"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

export default function Calculators() {
	const [address, setAddress] = useState("");
	const [state, setState] = useState("WA");
	const [zip, setZip] = useState("");
	const [city, setCity] = useState("");

	const [screen, setScreen] = useState(0);

	const [data, setData] = useState(null);
	const [error, setError] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(address);
		console.log(state);
		console.log(zip);
		console.log(city);
		const response = await fetch("/api/houseData", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ address: address, zip: zip, city: city, state: state }),
		});
		const d = await response.json();
		if (response.status == 200) {
			setData(d);
			setError(false);
		} else {
			setData(null);
			setError(true);
		}
		console.log(d);
	};

	return (
		<main>
			<section className="flex flex-col box-border h-[100vh] items-center justify-start py-4 !pt-[125px]">
				<h2>CALCULATOR HUB</h2>
				<div className="flex flex-row gap-[40px] mt-[40px]">
					<button className={screen != 0 && "text-white-400"} onClick={() => setScreen(0)}>
						CARBON FOOTPRINT
					</button>
					<button className={screen != 1 && "text-white-400"} onClick={() => setScreen(1)}>
						SOLAR PANEL ESTIMATES
					</button>
				</div>
				<div className="flex flex-row gap-20px mt-[60px] justify-center">
					<form className="bg-white-100 p-[20px] rounded-[12px] flex flex-col gap-[20px]" onSubmit={async (e) => await onSubmit(e)}>
						<h4>HOME DETAILS</h4>
						<div className="flex flex-col gap-[6px]">
							<div className="caption text-white-500">STREET ADDRESS</div>
							<TextInput placeholder="9769 111th Ave NE" onChange={(e) => setAddress(e.target.value)} />
						</div>
						<div className="flex flex-row gap-[13px]">
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">City</div>
								<TextInput placeholder="Redmond" onChange={(e) => setCity(e.target.value)} />
							</div>
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">State</div>
								<TextInput placeholder="WA" onChange={(e) => setState(e.target.value)} />
							</div>
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">Zip</div>
								<TextInput placeholder="98052" onChange={(e) => setZip(e.target.value)} />
							</div>
						</div>
						<Button onClick={async (e) => await onSubmit(e)}>GO</Button>
					</form>
					{
						data != null && screen == 0 && data["carbon_footprint"] != null && <div>{data["carbon_footprint"]["annual_carbon_footprint"]}</div> //TODO: add content here
					}
					{
						data != null && screen == 1 && data["solar"] != null && <div>{data["solar"]["payback_period"]}</div> //TODO: add content here
					}
					{
						(data == null || (screen == 0 && data["carbon_footprint"] == null) || (screen == 1 && data["solar"] == null)) && <div>Something went wrong</div> //TODO: add content here
					}
				</div>
			</section>
		</main>
	);
}
