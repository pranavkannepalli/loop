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
import { StateSelector } from "@/components/Dropdown";
import classNames from "@/hooks/classnames";
import HomeTypeSelector from "./homeType";
import BasicInfoForm from "./basicInfo";
import GoalsForm from "./goals";
import { AnimatePresence, motion } from "framer-motion";

const stageStyles = (current, step) => {
	if (current == step) return "text-white-100 bg-white-600";
	if (current < step) return "text-white-600 bg-white-300";
	return "text-white-600 bg-purple-600";
}

const stageVariant = {
	initial: (direction) => ({
		opacity: 0,
		x: direction * 100,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			type: "spring",
			bounce: 0
		}
	}),
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeIn",
			type: "spring",
			bounce: 0
		}
	},
	exit: (direction) => ({
		opacity: 0,
		x: -100 * direction,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			type: "spring",
			bounce: 0
		}
	})
};

const stages = [
	<HomeTypeSelector />,
	<BasicInfoForm />,
	<GoalsForm />
]

function Login() {
	const [screen, setScreen] = useState(0);
	const [direction, setDirection] = useState(1);
	const { redirect, loggedIn } = useContext(LoginContext);
	const dashboard = useRedirectFunction(redirect);

	const titles = ["What Type of Home Do You Have?", "Basic Information", "What Are Your Goals?"];

	const onNext = () => {
		if (screen < 2) {
			setScreen(screen + 1);
			setDirection(1);
		}
		else dashboard();
	};

	return (
		<main className="layout flex flex-col items-center justify-start w-full h-screen box-border p-[20px]">
			<div className="flex flex-1 flex-col gap-[20px] items-stretch py-[100px]">
				<div className="flex justify-center">
					<div className="flex-1 flex items-center justify-center max-w-[600px]">
						<a className={classNames("w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-1000", stageStyles(screen, 0))}>1</a>
						<div className={classNames("flex-1 h-[3px] rounded-full transition-all duration-1000", screen > 0 ? "bg-purple-600" : "bg-white-300")} />
						<a className={classNames("w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-1000", stageStyles(screen, 1))}>2</a>
						<div className={classNames("flex-1 h-[3px]", screen > 1 ? "bg-purple-600" : "bg-white-300")} />
						<a className={classNames("w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-1000", stageStyles(screen, 2))}>3</a>
					</div>
				</div>
				<div className="flex-1 flex flex-col justify-between">
					<div className="flex flex-col gap-[12px]">
						<h6 className="text-white-400 text-center">Set Up Your Profile</h6>
						<h2 className="text-center">{titles[screen]}</h2>
					</div>
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div className="flex" key={screen} custom={direction} variants={stageVariant} initial="initial" animate="animate" exit="exit">
								{stages[screen]}
							</motion.div>
						</AnimatePresence>
					<div className={`w-full flex flex-row mt-[20px] ${screen != 0 ? "justify-between" : "justify-end"}`}>
						{screen != 0 && (
							<Button type="secondary" className="!text-white-600" onClick={() => {
								setDirection(-1);
								setScreen(screen - 1);

							}}>
								Back
							</Button>
						)}
						<Button onClick={onNext}>Next</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

export {
	Login as default,
	stageVariant
}