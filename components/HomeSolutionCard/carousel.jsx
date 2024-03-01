"use client";

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import HomeSolutionCard from ".";
import { useEffect, useRef, useState } from "react";
import getWidth from "@/hooks/getWidth";

// TODO: Add actual links for these products and use the actual solutions from solutions.js
const solutions = [
	{
		name: "Solar Panel",
		sector: "electricity",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Solar Panel",
		sector: "transportation",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Solar Panel",
		sector: "heating",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},

	{
		name: "Solar Panel",
		sector: "waste",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Solar Panel",
		sector: "water",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
];

const FAST_DURATION = 25;
const SLOW_DURATION = 75;

export default function HomeCarousel() {
	const [ref, width] = getWidth();
	const [duration, setDuration] = useState(FAST_DURATION);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);
	const x = useMotionValue(0);

	useEffect(() => {
		let controls;
		console.log(width);
		let finalPosition = -width / 2 - 10;

		if (mustFinish) {
			controls = animate(x, [x.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - x.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(x, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}

		return controls?.stop;
	}, [x, width, duration, rerender, mustFinish]);

	return (
		<motion.div
			onHoverEnd={() => {
				setDuration(FAST_DURATION);
				setMustFinish(true);
			}}
			onHoverStart={() => {
				setDuration(SLOW_DURATION);
				setMustFinish(true);
			}}
			className="w-full relative mb-10 overflow-hidden"
		>
			<motion.div style={{ x }} ref={ref} className="flex gap-[20px]">
				{[...solutions, ...solutions, ...solutions, ...solutions].map((sol, i) => (
					<HomeSolutionCard img={sol.img} key={i} name={sol.name} sector={sol.sector} />
				))}
			</motion.div>
		</motion.div>
	);
}
