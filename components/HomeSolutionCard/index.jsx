"use client";

import classNames from "@/hooks/classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "../Icon";

const colors = {
	electricity: "bg-yellow-600",
	water: "bg-blue-600",
	waste: "bg-white-300",
	transportation: "bg-purple-600",
	heating: "bg-green-600",
};

export default function HomeSolutionCard({ name, img, sector, link = "/solutions" }) {
	const [hover, setHover] = useState(false);

	return (
		<motion.div
			style={{
				minWidth: "clamp(200px, 44vw, 300px)",
				aspectRatio: "3/4",
			}}
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			className={classNames(colors[sector], "cursor-pointer inline-block relative rounded-3xl")}
			href={link}
		>
			<Image alt={name} src={img} fill />
			<div className="absolute box-border left-3 bottom-3 rounded-full bg-white-100 px-5 py-[10px] border border-white-300 overflow-hidden">
				<div className="flex gap-[10px] items-center">
					<p className="caption">{name}</p>
				</div>
				<motion.div
					initial={{ x: -200 }}
					animate={{
						x: hover ? 0 : -200,
						transition: {
							type: "ease-out",
						},
					}}
					className="absolute box-border left-0 top-0 px-5 py-[10px] flex justify-between items-center rounded-full w-full h-full bg-white-600"
				>
					<p className="caption text-white-100">Explore</p>
					<Icon size={16} name="right" className="text-white-100" />
				</motion.div>
			</div>
		</motion.div>
	);
}
