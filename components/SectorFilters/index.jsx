"use client";

import classNames from "@/hooks/classnames";
import { useContext, useState } from "react";
import Icon from "../Icon";
import LoopContext from "../LoopContext";

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

function SectorFilters() {
	const { filterStates, changeFilterStates } = useContext(LoopContext);

	return (
		<div className="flex gap-[20px] pb-20 flex-wrap">
			{Object.keys(filterData).map((key) => (
				<Filter value={{ ...filterData[key], name: key }} onClick={changeFilterStates} state={filterStates[key]} key={key} />
			))}
		</div>
	);
}

const Filter = ({ value, state, onClick }) => {
	return (
		<div
			onClick={() => onClick((prev) => ({ ...prev, [value.name]: !state }))}
			className={classNames(
				"*:transition-all *:duration-200 transition-all duration-200 cursor-pointer flex gap-[10px] items-center px-[20px] py-[10px] rounded-lg",
				state ? value.activeBg : value.bg
			)}
		>
			<Icon name={value.icon} size={20} className={state ? value.activeIcon : value.iconColor} />
			<h6 className={state ? "text-white-100" : "text-white-600"}>{value.name}</h6>
			<Icon name="add" size={20} className={classNames(state ? "text-white-100  rotate-45" : "text-white-600")} />
		</div>
	);
};

export { SectorFilters as default };
