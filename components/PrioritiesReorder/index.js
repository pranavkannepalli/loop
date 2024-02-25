"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";
import { Reorder, useDragControls } from "framer-motion";
import Icon from "../Icon";

export default function PrioritiesReorder({}) {
	const { userData, changePriorities } = useContext(LoopContext);

	return (
		<Reorder.Group axis="y" className="flex-1 flex flex-col h-full gap-[20px]" onReorder={(newOrder) => changePriorities(newOrder)} values={userData.priorities}>
			{userData.priorities.map((item) => (
				<Priority item={item} key={item} />
			))}
		</Reorder.Group>
	);
}

let itemDetails = {
	"Cutting Down on Bills": {
		color: "bg-blue-500",
		iconColor: "text-blue-700",
		icon: "money",
	},
	"Lowering my Footprint": {
		color: "bg-green-500",
		iconColor: "text-green-700",
		icon: "leaf",
	},
	"Becoming Self-Sufficient": {
		color: "bg-purple-500",
		iconColor: "text-purple-700",
		icon: "independent",
	},
};

const Priority = ({ item }) => {
	return (
		<Reorder.Item value={item}  dragConstraints={{top: -50, bottom: 50}} >
			<div className={`rounded-[20px] ${itemDetails[item].color} p-[16px] pr-[32px] flex flex-row items-center justify-between cursor-grabbing`}>
				<div className="flex flex-row items-center gap-[5px]">
					<Icon name={itemDetails[item].icon} size={20} className={itemDetails[item].iconColor}/>
					<p className="font-krona uppercase text-white-600">{item}</p>
				</div>
				<div>
					<Icon name="grab" size={20} className={itemDetails[item].iconColor} />
				</div>
			</div>
		</Reorder.Item>
	);
};
