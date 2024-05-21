"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";
import LoginContext from "@/components/LoginContext";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import LoopContext from "@/components/LoopContext";
import HomeCard from "@/components/HomeCard";
import BudgetSelector from "@/components/BudgetSelector";
import PrioritiesReorder from "@/components/PrioritiesReorder";

export default function Login() {
	const [screen, setScreen] = useState(0);

	const { city, state, address, zip, setCity, setState, setAddress, setZip } = useContext(LoopContext);
	const { redirect, loggedIn } = useContext(LoginContext);
	const dashboard = useRedirectFunction(redirect);

	const titles = ["What Type of Home Do You Have?", "Basic Information", "What Are Your Goals?"];

	const onNext = () => {
		if (screen < 2) setScreen(screen + 1);
		else dashboard();
	};

	return (
		<main className="layout flex flex-col items-center justify-center w-full h-screen box-border p-[20px]">
			<div className="flex flex-col gap-[20px] items-center">
				<h6 className="text-white-400">Set Up Your Profile</h6>
				<h2>{titles[screen]}</h2>
				<div className={`flex flex-col md:flex-row gap-[20px] ${screen != 0 && "hidden"}`}>
					<HomeCard svg="apartment" color="bg-green-500" borderColor="outline-green-700" name="Apartment" description="Large and small complexes" />
					<HomeCard svg="multi-family" color="bg-yellow-500" borderColor="outline-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
					<HomeCard svg="single-family" color="bg-purple-500" borderColor="outline-purple-700" name="Individual Home" description="Individual homes and town homes" />
				</div>
				<div className={`flex flex-col gap-[20px] ${screen != 1 && "hidden"}`}>
					<div className="flex flex-col gap-[6px]">
						<div className="caption text-white-500">STREET ADDRESS</div>
						<TextInput placeholder="9769 111th Ave NE" value={address} onChange={(e) => setAddress(e.target.value)} />
					</div>
					<div className="flex flex-row gap-[13px]">
						<div className="flex flex-col gap-[6px]">
							<div className="caption text-white-500">City</div>
							<TextInput placeholder="Redmond" value={city} onChange={(e) => setCity(e.target.value)} />
						</div>
						<div className="flex flex-col gap-[6px]">
							<div className="caption text-white-500">State</div>
							<TextInput placeholder="WA" value={state} onChange={(e) => setState(e.target.value)} />
						</div>
						<div className="flex flex-col gap-[6px]">
							<div className="caption text-white-500">Zip</div>
							<TextInput placeholder="98052" value={zip} onChange={(e) => setZip(e.target.value)} />
						</div>
					</div>
				</div>
				<div className={`flex flex-col gap-[20px] ${screen != 2 && "hidden"}`}>
					<div className="caption text-white-500 !text-[20px]">Budget</div>
					<BudgetSelector />
					<div className="caption text-white-500 !text-[20px]">Priorities</div>
					<PrioritiesReorder />
				</div>
				<div className={`w-full flex flex-row mt-[20px] ${screen != 0 ? "justify-between" : "justify-end"}`}>
					{screen != 0 && (
						<Button type="secondary" className="!text-white-600" onClick={() => setScreen(screen - 1)}>
							Back
						</Button>
					)}
					<Button onClick={onNext}>Next</Button>
				</div>
			</div>
		</main>
	);
}
