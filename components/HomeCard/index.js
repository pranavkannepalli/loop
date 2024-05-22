"use client";

import Icon from "../Icon";
import { useContext } from "react";
import LoopContext from "../LoopContext";
import classNames from "@/hooks/classnames";
import { motion } from "framer-motion";

export default function HomeCard({ svg, color, borderColor, name, description }) {
	const { userData, changeHomeType } = useContext(LoopContext);

	return (
		<div
			className={classNames(
				`flex flex-col gap-[5px] 
				flex-1 p-[10px] sm:p-[20px] 
				items-center justify-center ${color} 
				rounded-[20px] aspect-[4/3] outline outline-0  
				${borderColor} hover:outline-3 transition-all`,
				(userData.hometype == name ? `outline !outline-[3px] ${borderColor}` : ""))
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
