import { NextRequest, NextResponse } from "next/server";
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

		var api_key = process.env.WATTBUY_KEY;
		sdk.auth(api_key);
		var overallRequest = await sdk.getElectricity({ address: address, city: city, state: state, zip: zipcode });
		var utilitiesRequest = await sdk.getElectricityInfo({ address: address, city: city, state: state, zip: zipcode });

		var data = overallRequest["data"];
		data["utility_info"] = utilitiesRequest["data"]["utility_info"];

		return NextResponse.json(data, { status: 200 });
	} catch (err) {
		return NextResponse.json({ request: requestData, data: `Address: ${address} City: ${city} State: ${state} Zipcode: ${zipcode}` }, { status: 400 });
	}
}
