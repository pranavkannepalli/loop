"use client";

import solutions from "@/app/solutions";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import LoopContext from "@/components/LoopContext";
import Icon from "@/components/Icon";
import classNames from "@/hooks/classnames";

const filterData = {
	water: {
		bg: "bg-blue-500",
		activeBg: "bg-blue-700",
		iconColor: "text-blue-700",
		activeIcon: "text-blue-500",
		icon: "water",
	},
	electricity: {
		bg: "bg-yellow-500",
		iconColor: "text-yellow-700",
		activeBg: "bg-yellow-700",
		activeIcon: "text-yellow-500",
		icon: "electricity",
	},
	transportation: {
		bg: "bg-purple-500",
		activeBg: "bg-purple-700",
		activeIcon: "text-purple-500",
		iconColor: "text-purple-700",
		icon: "car",
	},
	heating: {
		bg: "bg-green-500",
		activeBg: "bg-green-700",
		activeIcon: "text-green-500",
		iconColor: "text-green-700",
		icon: "fire",
	},
	waste: {
		bg: "bg-white-300",
		activeBg: "bg-white-500",
		activeIcon: "text-white-300",
		iconColor: "text-white-500",
		icon: "trash",
	},
};

export default function Solution({ params }) {
	const solutionName = params.solution.replace("%20", " ");
	const [solution, setSolution] = useState(null);
	const { userData, addWatchlist, addItem } = useContext(LoopContext);

	useEffect(() => {
		solutions[userData.state].forEach((value) => {
			if (value.title == solutionName) {
				setSolution(value);
			}
		});
	}, [setSolution, solutionName, userData]);

	if (solution != null) {
		return (
			<main>
				<section className="layout box-border h-[100vh] items-center my-4 w-full">
					<div className="flex flex-row items-center justify-center h-[100vh] w-full">
						<div className="w-full text-left flex flex-col gap-[10px]">
							<div
								className={classNames(
									"*:transition-all *:duration-200 transition-all duration-200 inline-flex gap-[10px] items-center px-[20px] py-[10px] rounded-full w-fit",
									filterData[solution.type].bg
								)}
							>
								<Icon name={filterData[solution.type].icon} size={20} className={filterData[solution.type].iconColor} />
								<h6 className={"text-white-600"}>{solution.type}</h6>
							</div>
							<h2>{solution.title}</h2>
							<div className="flex flex-row">
								<h4>{solution.price}</h4>
								<h6>/Unit</h6>
							</div>
							<p>{solution.description}</p>
							<div className="flex flex-row gap-[20px]">
								{solution.stats.map((val, ind) => (
									<div key={ind} className="py-[20px] px-[20px] rounded-[10px] border border-white-300 flex flex-col gap-[5px]">
										<div className="flex flex-row items-baseline gap-[5px]">
											<h4>{val.data}</h4>
											<div className="caption">{val.units}</div>
										</div>
										<p className="leading-none">{val.description}</p>
									</div>
								))}
							</div>
						</div>
						<div className="w-full">Hi</div>
					</div>
				</section>
			</main>
		);
	} else {
		return (
			<div className="my-[100px] flex flex-col items-center justify-center">
				<p>Can&apos;t find this solution... go back instead?</p>
				<Link href="/solutions">Back</Link>
			</div>
		);
	}
}
