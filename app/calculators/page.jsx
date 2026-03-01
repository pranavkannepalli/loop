"use client";

import { useState, useEffect, useContext } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import LoopContext from "@/components/LoopContext";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "@/hooks/classnames";
import Footprint from "./footprint";
import SolarSavings from "./solarSavings";

export default function Calculators() {
	const { address, state, zip, city } = useContext(LoopContext);

	const [nAddress, setAddress] = useState(address);
	const [nState, setState] = useState(state);
	const [nZip, setZip] = useState(zip);
	const [nCity, setCity] = useState(city);

	const [screen, setScreen] = useState(0);

	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [loading, setLoading] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		setErrorMessage("");
		
		// Input validation
		if (!nZip || nZip.trim().length === 0) {
			setError(true);
			setErrorMessage("Zip code is required.");
			setLoading(false);
			return;
		}
		
		// Validate zip code format (5 digits)
		if (!/^\d{5}$/.test(nZip.trim())) {
			setError(true);
			setErrorMessage("Please enter a valid 5-digit zip code.");
			setLoading(false);
			return;
		}
		
		// Validate state format if provided (2 letters)
		if (nState && nState.trim().length > 0 && !/^[A-Za-z]{2}$/.test(nState.trim())) {
			setError(true);
			setErrorMessage("Please enter a valid 2-letter state code (e.g., WA).");
			setLoading(false);
			return;
		}
		
		try {
			const response = await fetch("/api/houseData", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ 
					address: nAddress?.trim() || "", 
					zip: nZip.trim(), 
					city: nCity?.trim() || "", 
					state: nState?.trim() || "" 
				}),
			});
			
			const d = await response.json();
			
			if (response.status === 200) {
				// Check if we have valid data
				if (!d || (!d.carbon_footprint && !d.solar)) {
					setError(true);
					setErrorMessage("No data available for this address. Please try a different address.");
					setData(null);
				} else {
					setData(d);
					setError(false);
				}
			} else {
				// Handle different error scenarios
				if (response.status === 400) {
					setErrorMessage("Invalid address information. Please check your input and try again.");
				} else if (response.status === 404) {
					setErrorMessage("Address not found. Please try a different address.");
				} else if (response.status === 500) {
					setErrorMessage("Server error. Please try again later.");
				} else {
					setErrorMessage("Something went wrong. Please try another address or try again later.");
				}
				setData(null);
				setError(true);
			}
		} catch (err) {
			console.error("Error fetching house data:", err);
			setErrorMessage("Network error. Please check your internet connection and try again.");
			setData(null);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main>
			<section className="layout flex flex-col box-border min-h-[100vh] items-center justify-start py-4 !pt-[125px]">
				<h2 className="text-center">CALCULATOR HUB</h2>
				<div className="flex flex-row gap-[40px] mt-[40px]">
					<AnimatePresence>
						<div className="flex flex-col items-center gap-[6px]">
							<button className={screen != 0 && "text-white-400"} onClick={() => setScreen(0)}>
								CARBON FOOTPRINT
							</button>
							{screen == 0 && <motion.div layoutId="calcUnderline" className="w-[35px] h-[3px] rounded-full bg-white-600" />}
						</div>
						<div className="flex flex-col items-center gap-[6px]">
							<button className={screen != 1 && "text-white-400"} onClick={() => setScreen(1)}>
								SOLAR PANEL ESTIMATES
							</button>
							{screen == 1 && <motion.div layoutId="calcUnderline" className="w-[35px] h-[3px] rounded-full bg-white-600" />}
						</div>
					</AnimatePresence>
				</div>
				<div className="flex flex-wrap gap-20px mt-[60px] justify-center gap-[20px]">
					<form className="flex flex-1 flex-col gap-[20px] min-w-[250px]" onSubmit={async (e) => await onSubmit(e)}>
						<h4>HOME DETAILS</h4>
						<div className="flex flex-col gap-[6px]">
							<div className="caption text-white-500">STREET ADDRESS</div>
							<TextInput 
								placeholder="123 Test St" 
								value={nAddress || ""} 
								onChange={(e) => {
									setAddress(e.target.value);
									setError(false);
									setErrorMessage("");
								}} 
							/>
						</div>
						<div className="flex flex-row gap-[13px]">
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">City</div>
								<TextInput 
									placeholder="Seattle" 
									value={nCity || ""} 
									onChange={(e) => { 
										setError(false); 
										setErrorMessage("");
										setCity(e.target.value); 
									}} 
								/>
							</div>
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">State</div>
								<TextInput 
									placeholder="WA" 
									value={nState || ""} 
									onChange={(e) => {
										setError(false); 
										setErrorMessage("");
										setState(e.target.value);
									}} 
								/>
							</div>
							<div className="flex flex-col gap-[6px]">
								<div className="caption text-white-500">Zip *</div>
								<TextInput 
									placeholder="98101" 
									value={nZip || ""} 
									onChange={(e) => { 
										setError(false); 
										setErrorMessage("");
										setZip(e.target.value);
									}}
									required 
								/>
							</div>
						</div>
						{error && <p className="caption text-error">{errorMessage || "Something went wrong. Please try another address or try again later."}</p>}
						<Button disabled={loading} onClick={async (e) => await onSubmit(e)}>
							{loading ? "Loading..." : "GO"}
						</Button>
					</form>
					{
						data != null && screen == 0 && data["carbon_footprint"] != null && (
							<Footprint data={data["carbon_footprint"]} />
						)}
					{
						data != null && screen == 1 && data["solar"] != null && <SolarSavings data={data["solar"]} />
					}
				</div>
			</section>
		</main>
	);
}