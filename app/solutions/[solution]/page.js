"use client";

import solutions from "@/app/solutions";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import LoopContext from "@/components/LoopContext";
import Icon from "@/components/Icon";
import classNames from "@/hooks/classnames";
import Button from "@/components/Button";
import Image from "next/image";
import ROIGraph from "@/components/ROIGraph";
import CostGraph from "@/components/CostGraph";
import Accordion from "@/components/Accordion";
import Rebate from "@/components/Rebates";

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

//TODO: acc build the last section

export default function Solution({ params }) {
	const solutionName = params.solution.replace("%20", " ");
	const [solution, setSolution] = useState(null);
	const { userData, addWatchlist, inWatchlist, addItem, removeWatchlist } = useContext(LoopContext);

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
				<section className="layout box-border md:h-[100vh] items-center !mt-[100px] md:!mt-0 w-full">
					<div className="flex flex-col-reverse gap-[20px] md:flex-row items-center justify-center w-full md:h-[100vh]">
						<div className="flex-1 w-full text-left flex flex-col items-center md:items-start gap-[10px]">
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
							<div className="flex flex-row gap-[20px] flex-wrap">
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
							{inWatchlist(solution) ? (
								<Button prefix={<Icon name="remove" size={20} />} onClick={() => removeWatchlist(solution)}>
									Remove from Watchlist
								</Button>
							) : (
								<Button prefix={<Icon name="add" size={20} />} onClick={() => addWatchlist(solution)}>
									Add to Watchlist
								</Button>
							)}
						</div>
						<div className={classNames("flex-1 w-full mx-8 rounded-[20px] flex items-center justify-center", filterData[solution.type].bg)}>
							<Image src="/solution_models/solar_panel.png" alt="solar panel image" width={500} height={500} className="object-contain" />
						</div>
					</div>
				</section>
				<section className="layout box-border items-center !mt-[30px] w-full">
					<div className="flex flex-col gap-[20px] md:flex-row justify-center w-full">
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[10px]">
							<h3>Installation Steps</h3>
							{solution.steps.map((item, ind) => (
								<Accordion number={ind + 1} key={ind} question={item.header}>
									<p>{item.description}</p>
								</Accordion>
							))}
						</div>
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[10px]">
							<CostGraph points={solution.costGraph} />
							<ROIGraph points={solution.roiGraph} />
						</div>
					</div>
				</section>
				<section className="layout box-border !mt-[30px] w-full">
					<h3>Rebates</h3>
					<div className="flex flex-col gap-[20px] md:flex-row justify-center w-full mt-[30px]">
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[20px]">
							<div className="caption text-white-400">Utility</div>
							{solution.utilityRebates.map((item, ind) => (
								<Rebate dollars={item.price} label={item.label} key={ind} />
							))}
						</div>
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[20px]">
							<div className="caption text-white-400">Government Rebates</div>
							{solution.govtRebates.map((item, ind) => (
								<Rebate dollars={item.price} label={item.label} key={ind} />
							))}
						</div>
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
