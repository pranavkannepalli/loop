"use client";

import Icon from "@/components/Icon";
import LoopContext from "@/components/LoopContext";
import ToDoCard from "@/components/ToDoCard";
import UserTags from "@/components/UserTags";
import WatchlistCard from "@/components/WatchListCard";
import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import CountUp from "@/components/CountUp";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import LoginContext from "@/components/LoginContext";
import ElectricityGraph from "./electricityGraph";

export default function Dashboard() {
	const { watchlist, removeWatchlist, state, address, city, zip } = useContext(LoopContext);
	const { loggedIn } = useContext(LoginContext);
	const [electricityData, changeElectricityData] = useState(null);
	const login = useRedirectFunction('/login');

	useEffect(() => {
		if (!loggedIn) login();
	}, [loggedIn]);

	console.log(electricityData);

	useEffect(() => {
		const fetchStuff = async () => {
			const response = await fetch("/api/houseData", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ address: address, zip: zip, city: city, state: state }),
			});
			const d = await response.json();
			if (response.status == 200) {
				changeElectricityData(d);
			} else {
				changeElectricityData(null);
			}
		}
		fetchStuff();
	}, [])


	return (
		<div className="flex min-h-screen gap-[20px] flex-col md:flex-row layout !pt-[120px]">
			<div className={`flex-col md:flex-row bg-white-100 border-white-300 border p-[20px] rounded-[20px] gap-[20px] md:hidden flex`}>
				<div className="flex-1 flex flex-col justify-between gap-[20px]">
					<div>
						<div className="caption text-white-400">Hello</div>
						<h4>Judges</h4>
					</div>
					<div>
						<UserTags />
					</div>
				</div>
			</div>
			<div className="flex-[2] flex flex-col gap-[24px]">
				<div className="flex flex-col md:flex-row gap-[20px]">
					<div className="p-[20px] rounded-[10px] bg-blue-500">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row gap-[5px] items-baseline">
								<CountUp number={6000} />
								<h6>Gallons</h6>
							</div>
							<div className="text-blue-700">
								<Icon name="water" size={40} />
							</div>
						</div>
						<p>Of water saved through solutions implemented via Loop.</p>
					</div>
					<div className="p-[20px] rounded-[10px] bg-yellow-500">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row gap-[5px] items-baseline">
								<CountUp number={4900} />
								<h6>Pounds</h6>
							</div>
							<div className="text-yellow-700">
								<Icon name="factory" size={40} />
							</div>
						</div>
						<p>Of CO2 saved from being emitted into the atmosphere.</p>
					</div>
				</div>
				{electricityData != null && <ElectricityGraph data={electricityData["estimation"]["monthly_usage_estimates"]} />}
				<div className="flex flex-col w-full gap-[20px]">
					<h4>Your Watchlist</h4>
					<div className="flex gap-[20px] overflow-x-scroll md:max-w-[66vw]">
						{watchlist.map((sol, i) => {
							return (
								<WatchlistCard
									img={sol.image}
									alt={sol.alt}
									key={i}
									name={sol.title}
									price={sol.price}
									past={sol.costGraph[sol.costGraph.length - 2][1]}
									present={sol.costGraph[sol.costGraph.length - 1][1]}
									remove={() => removeWatchlist(sol)}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col min-w-[300px] gap-[10px]">
				<div className={`flex-col md:flex-row bg-white-100 border-white-300 border p-[20px] rounded-[20px] gap-[20px] hidden md:flex`}>
					<div className="flex-1 flex flex-col justify-between gap-[20px]">
						<div>
							<div className="caption text-white-400">Hello</div>
							<h4>Judges</h4>
						</div>
						<div>
							<UserTags />
						</div>
					</div>
				</div>
				<div className="caption text-white-400">TO-DO List</div>
				<AnimatePresence>
					{watchlist.map((item, i) => {
						let completed = 0;
						item.steps.forEach((step) => {
							if (step.isCompleted) completed++;
						});
						return completed != item.steps.length && <ToDoCard key={i} name={item.title + " Installation"} tasks={item.steps} index={i} />;
					})}
				</AnimatePresence>
			</div>
		</div>
	);
}
