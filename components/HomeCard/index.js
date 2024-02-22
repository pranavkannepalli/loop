"use client";

import Icon from "../Icon";
import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function HomeCard({ svg, color, borderColor, name, description }) {
	const { userData, changeHomeType } = useContext(LoopContext);

	return (
		<div
			className={
				`box-border flex flex-col gap-[5px] flex-1 p-[10px] sm:p-[20px] items-center justify-center ${color} rounded-[20px] aspect-[4/3] hover:border-[3px] hover:border-solid ${"hover:" + borderColor} transition-all` +
				(userData.hometype == name ? ` border-solid border-[3px] ${borderColor}` : "")
			}
			onClick={() => {
				changeHomeType(name);
			}}
		>
			<Icon name={svg} className="w-1/2 h-1/2 aspect-square" />
			<h4 className="text-center">{name}</h4>
			<p className="text-center caption">{description}</p>
		</div>
	);
}
