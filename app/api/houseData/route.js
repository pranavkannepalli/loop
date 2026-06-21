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

		address = requestData["address"] || "";
		city = requestData["city"] || "";
		state = requestData["state"] || "";
		zipcode = requestData["zip"] || "";

		// Input validation
		if (!zipcode || zipcode.trim().length === 0) {
			return NextResponse.json({ 
				error: "Zip code is required",
				message: "Please provide a valid zip code" 
			}, { status: 400 });
		}

		// Validate zip code format (5 digits)
		if (!/^\d{5}$/.test(zipcode.trim())) {
			return NextResponse.json({ 
				error: "Invalid zip code format",
				message: "Please provide a valid 5-digit zip code" 
			}, { status: 400 });
		}

		// Validate state format if provided (2 letters)
		if (state && state.trim().length > 0 && !/^[A-Za-z]{2}$/.test(state.trim())) {
			return NextResponse.json({ 
				error: "Invalid state format",
				message: "Please provide a valid 2-letter state code" 
			}, { status: 400 });
		}

		var api_key = process.env.WATTBUY_KEY;
		if (!api_key) {
			console.error("WATTBUY_KEY environment variable not set");
			return NextResponse.json({ 
				error: "Configuration error",
				message: "Service temporarily unavailable" 
			}, { status: 500 });
		}

		sdk.auth(api_key);
		
		const requestParams = {
			address: address.trim(),
			city: city.trim(),
			state: state.trim(),
			zip: zipcode.trim()
		};

		// Remove empty parameters to avoid API issues
		Object.keys(requestParams).forEach(key => {
			if (requestParams[key] === "") {
				delete requestParams[key];
			}
		});

		const [overallRequest, utilitiesRequest] = await Promise.allSettled([
			sdk.getElectricity(requestParams),
			sdk.getElectricityInfo(requestParams)
		]);

		let data = {};
		let hasValidData = false;

		// Handle electricity data
		if (overallRequest.status === 'fulfilled') {
			data = overallRequest.value["data"] || {};
			hasValidData = true;
		} else {
			console.error("Electricity data request failed:", overallRequest.reason);
		}

		// Handle utilities data
		if (utilitiesRequest.status === 'fulfilled') {
			data["utility_info"] = utilitiesRequest.value["data"]["utility_info"] || [];
		} else {
			console.error("Utilities data request failed:", utilitiesRequest.reason);
		}

		// Check if we have meaningful data to return
		if (!hasValidData || (!data.carbon_footprint && !data.solar && !data.estimation)) {
			return NextResponse.json({ 
				error: "No data available",
				message: "No data available for this address. Please try a different address.",
				request: requestParams
			}, { status: 404 });
		}

		return NextResponse.json(data, { status: 200 });
		
	} catch (err) {
		console.error("API Error:", err);
		
		// Handle specific API errors
		if (err.status === 400) {
			return NextResponse.json({ 
				error: "Invalid request",
				message: "Invalid address information provided",
				request: requestData 
			}, { status: 400 });
		} else if (err.status === 404) {
			return NextResponse.json({ 
				error: "Address not found",
				message: "Address not found in our database",
				request: requestData 
			}, { status: 404 });
		} else if (err.status === 500 || err.name === 'FetchError') {
			return NextResponse.json({ 
				error: "External service error",
				message: "External service temporarily unavailable. Please try again later.",
				request: requestData 
			}, { status: 500 });
		}
		
		return NextResponse.json({ 
			error: "Unexpected error",
			message: "Something went wrong. Please try another address or try again later.",
			request: requestData,
			data: `Address: ${address} City: ${city} State: ${state} Zipcode: ${zipcode}` 
		}, { status: 500 });
	}
}