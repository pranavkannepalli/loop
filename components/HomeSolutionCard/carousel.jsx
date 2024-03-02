"use client";

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import HomeSolutionCard from ".";
import { useEffect, useRef, useState, useContext } from "react";
import getWidth from "@/hooks/getWidth";
import LoopContext from '../LoopContext';

// TODO: Add actual links for these products and use the actual solutions from solutions.js
const solutions = { NY: [
	{
		name: "Low-Flow Fixtures",
		sector: "water",
		img: "/solution_models/low_flow.png",
		link: "/solutions/Low-Flow Fixtures",
	},
	{
		name: "Solar Panels",
		sector: "electricity",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Electric Vehicles",
		sector: "transportation",
		img: "/solution_models/ev.png",
		link: "/solutions/Electric Vehicles",
	},

	{
		name: "Recycling",
		sector: "waste",
		img: "/solution_models/recycling.png",
		link: "/solutions/Recycling",
	},
	{
		name: "Efficient HVAC",
		sector: "heating",
		img: "/solution_models/hvac.png",
		link: "/solutions/Energy-Efficient HVAC",
	},
],
TX: [
	{
		name: "Solar Panels",
		sector: "electricity",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Electric Vehicles",
		sector: "transportation",
		img: "/solution_models/ev.png",
		link: "/solutions/Electric Vehicles",
	},
	{
		name: "Energy Efficient Windows",
		sector: "heating",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},

	{
		name: "Composting Toilets",
		sector: "waste",
		img: "/solution_models/toilet.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Rainwater Harvesting",
		sector: "water",
		img: "/solution_models/rainwater.png",
		link: "/solutions/Rainwater Harvesting",
	},
],
WA: [
	{
		name: "Solar Panel",
		sector: "electricity",
		img: "/solution_models/solar_panel.png",
		link: "/solutions/Solar Panels",
	},
	{
		name: "Electric Vehicles",
		sector: "transportation",
		img: "/solution_models/ev.png",
		link: "/solutions/Electric Vehicles",
	},
	{
		name: "Smart Thermostat",
		sector: "heating",
		img: "/solution_models/thermostat.png",
		link: "/solutions/Smart Thermostat",
	},

	{
		name: "Composting Toilet",
		sector: "waste",
		img: "/solution_models/toilet.png",
		link: "/solutions/Composting Toilet",
	},
	{
		name: "Rainwater Harvesting",
		sector: "water",
		img: "/solution_models/rainwater.png",
		link: "/solutions/Rainwater Harvesting",
	},
]};

const FAST_DURATION = 25;
const SLOW_DURATION = 75;

export default function HomeCarousel() {
	const [ref, width] = getWidth();
	const [duration, setDuration] = useState(FAST_DURATION);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);
	const {userData} = useContext(LoopContext);
	const x = useMotionValue(0);

	useEffect(() => {
		let controls;
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
				{[...solutions[userData.state], ...solutions[userData.state], ...solutions[userData.state], ...solutions[userData.state]].map((sol, i) => (
					<HomeSolutionCard img={sol.img} key={i} name={sol.name} sector={sol.sector} />
				))}
			</motion.div>
		</motion.div>
	);
}
