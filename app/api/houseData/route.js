import { NextResponse } from "next/server";
import sdk from "@api/wattbuy";

export async function POST(request) {
	var address = "";
	var city = "";
	var state = "";
	var zipcode = "";
	var requestData;

	try {
		requestData = await request.json();

		address = requestData["address"];
		city = requestData["city"];
		state = requestData["state"];
		zipcode = requestData["zip"];

		// Validate required fields
		if (!zipcode || zipcode.trim() === "") {
			console.error("Missing required field: zip");
			return NextResponse.json({ error: "Zip code is required" }, { status: 400 });
		}

		var api_key = process.env.WATTBUY_KEY;
		if (!api_key) {
			console.error("WATTBUY_KEY environment variable not set");
			return NextResponse.json({ error: "API configuration error" }, { status: 500 });
		}

		sdk.auth(api_key);
		
		console.log(`Making API request for: ${address}, ${city}, ${state}, ${zipcode}`);
		
		// Make API calls with better error handling
		let overallRequest, utilitiesRequest;
		
		try {
			overallRequest = await sdk.getElectricity({ 
				address: address, 
				city: city, 
				state: state, 
				zip: zipcode 
			});
		} catch (apiError) {
			console.error("Error in getElectricity API call:", apiError);
			return NextResponse.json({ 
				error: "Unable to fetch electricity data for this address. Please verify the address details and try again.",
				details: apiError.message 
			}, { status: 400 });
		}

		try {
			utilitiesRequest = await sdk.getElectricityInfo({ 
				address: address, 
				city: city, 
				state: state, 
				zip: zipcode 
			});
		} catch (apiError) {
			console.error("Error in getElectricityInfo API call:", apiError);
			// Continue without utility info if this fails
			utilitiesRequest = { data: { utility_info: null } };
		}

		var data = overallRequest["data"];
		if (utilitiesRequest && utilitiesRequest["data"] && utilitiesRequest["data"]["utility_info"]) {
			data["utility_info"] = utilitiesRequest["data"]["utility_info"];
		}

		console.log("API request successful");
		return NextResponse.json(data, { status: 200 });
	} catch (err) {
		console.error("General error in houseData API:", err);
		return NextResponse.json({ 
			error: "Something went wrong. Please try another address or try again later.",
			request: requestData, 
			data: `Address: ${address} City: ${city} State: ${state} Zipcode: ${zipcode}`,
			details: err.message 
		}, { status: 400 });
	}
}