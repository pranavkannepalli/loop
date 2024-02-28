"use client";

import { useState, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../Icon";
import classNames from "@/hooks/classnames";

const Accordion = ({ number, question, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const itemVariants = {
		initial: {
			opacity: 0,
			height: 0,
			transition: {
				staggerChildren: 0.5,
			},
		},
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
			height: "auto",
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const variants = {
		initial: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.5,
			},
		},
		animate: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.5,
			},
		},
		exit: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.5,
			},
		},
	};

	return (
		<motion.div className="bg-white-100 p-[20px] rounded-[8px] cursor-pointer flex flex-col w-full" onClick={() => setIsOpen(!isOpen)}>
			<AnimatePresence>
				<motion.div key="question" className="flex flex-row justify-between items-center">
					<motion.h6 className="text-gray-800 font-bold ml-1 flex flex-row gap-[5px] items-center">
						<div className="flex bg-white-200 text-white-400 rounded-full w-[30px] h-[30px] items-center justify-center">{number}</div>
						{question}
					</motion.h6>
					<motion.div className={classNames(isOpen ? "rotate-180" : "rotate-0", "*:transition-all *:duration-500 transition-all")}>
						<Icon name="down" />
					</motion.div>
				</motion.div>
				<motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
					{isOpen &&
						Children.map(children, (val, ind) => (
							<motion.div className="px-2 mt-2" variants={itemVariants} key={ind}>
								{val}
							</motion.div>
						))}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default Accordion;
