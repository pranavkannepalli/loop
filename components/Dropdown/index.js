"use client";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Icon from "../Icon";
import LoopContext from "../LoopContext";
import classNames from "@/hooks/classnames";

const Dropdown = ({ placeholder = "Select an item", expanded = false, items = [], onClick = (value) => {} }) => {
	const [open, setOpen] = useState(false);
	const [selected, changeSelected] = useState(placeholder);

	return (
		<div className={classNames("flex items-center justify-center bg-white !c", expanded ? "flex-1" : undefined)}>
			<motion.div animate={open ? "open" : "closed"} className="relative flex flex-row flex-1">
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="flex-1 flex items-center justify-between gap-2 px-3 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
				>
					<span className="font-medium text-sm">{selected}</span>
					<motion.span variants={iconVariants}>
						<Icon name="down" />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top" }}
					className="flex flex-col rounded-lg bg-white-100 outline outline-1 outline-white-300 shadow-xl absolute top-[150%] right-0 w-48 overflow-hidden z-50"
				>
					{items.map((value, index) => (
						<Option
							onClick={() => {
								onClick(value);
								changeSelected(value);
								setOpen(false);
							}}
							selected={selected == value}
							text={value}
							key={index}
						/>
					))}
				</motion.ul>
			</motion.div>
		</div>
	);
};

const StateSelector = ({ expanded = false }) => {
	const { userData, changeState } = useContext(LoopContext);
	return <Dropdown placeholder={userData.state} expanded={expanded} onClick={changeState} items={["NY", "TX", "WA"]} />;
};

const SortSelector = ({ expanded = false }) => {
	const { sort, changeSort } = useContext(LoopContext);
	return <Dropdown placeholder={sort} expanded={expanded} onClick={changeSort} items={["Sort", "Raw Price", "Rebates", "Difficulty", "A to Z", "Z to A"]} />;
};

const Option = ({ selected, text, onClick = () => {} }) => {
	return (
		<motion.li
			variants={itemVariants}
			onClick={onClick}
			className={classNames(
				`flex items-center justify-between w-full px-[16px] py-[12px] 
						text-xs font-medium whitespace-nowrap 
						hover:bg-white-200 text-slate-700
						hover:text-indigo-500 transition-colors 
						cursor-pointer`,
				!selected ? undefined : "bg-white-200"
			)}
		>
			<p className={selected ? "font-[600]" : undefined}>{text}</p>
			{selected && <Icon name="check" size={20} />}
		</motion.li>
	);
};

export { Dropdown as default, StateSelector, SortSelector };

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
