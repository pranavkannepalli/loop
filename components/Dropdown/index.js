"use client";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Icon from "../Icon";
import LoopContext from "../LoopContext";

const Dropdown = ({ placeholder = "Select an item", items = [], onClick = (value) => {} }) => {
	const [open, setOpen] = useState(false);
	const [selected, changeSelected] = useState(placeholder);

	return (
		<div className="flex-1 flex items-center justify-center bg-white">
			<motion.div animate={open ? "open" : "closed"} className="relative">
				<button onClick={() => setOpen((pv) => !pv)} className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors">
					<span className="font-medium text-sm">{selected}</span>
					<motion.span variants={iconVariants}>
						<Icon name="down" />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
				>
					{items.map((value, index) => (
						<Option
							onClick={() => {
								onClick(value);
								changeSelected(value);
								setOpen(false);
							}}
							text={value}
							key={index}
						/>
					))}
				</motion.ul>
			</motion.div>
		</div>
	);
};

const StateSelector = () => {
	const { userData, changeState } = useContext(LoopContext);
	return <Dropdown placeholder={userData.state} onClick={changeState} items={["NY", "TX", "WA"]} />;
};

const Option = ({ text, onClick = () => {} }) => {
	return (
		<motion.li
			variants={itemVariants}
			onClick={onClick}
			className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
		>
			<span>{text}</span>
		</motion.li>
	);
};

export { Dropdown as default, StateSelector };

const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
		},
	},
};

const iconVariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
};

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			when: "afterChildren",
		},
	},
};
