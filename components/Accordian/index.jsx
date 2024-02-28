"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answers }) => {
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
		<motion.div>
			<AnimatePresence>
				<motion.div
					key="question"
					className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
					onClick={() => setIsOpen(!isOpen)}
				>
					<motion.div className="text-gray-800 font-bold ml-1">{question}</motion.div>
				</motion.div>

				<motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
					{isOpen &&
						answers.map((val, ind) => (
							<motion.div variants={itemVariants} key={ind} className="p-2 text-lg text-white-700 border-l border-b border-gray-300">
								{val}
							</motion.div>
						))}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default Accordion;
