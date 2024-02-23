"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";
import { Reorder, useDragControls } from "framer-motion";
import Icon from "../Icon";

export default function PrioritiesReorder({}) {
	const { userData, changePriorities } = useContext(LoopContext);

	return (
		<Reorder.Group axis="y" className="flex flex-col h-full gap-[20px]" onReorder={(newOrder) => changePriorities(newOrder)} values={userData.priorities}>
			{userData.priorities.map((item) => (
				<Priority item={item} key={item} />
			))}
		</Reorder.Group>
	);
}

let itemDetails = {
	"Cutting Down on Bills": {
		color: "bg-blue-500",
		icon: "money",
	},
	"Lowering my Footprint": {
		color: "bg-green-500",
		icon: "leaf",
	},
	"Becoming Self-Sufficient": {
		color: "bg-purple-500",
		icon: "independent",
	},
};

const Priority = ({ item }) => {
	const controls = useDragControls();

	return (
		<Reorder.Item value={item} dragListener={false} dragControls={controls}>
			<div className={`rounded-[20px] ${itemDetails[item].color} p-[16px] pr-[32px] flex flex-row items-center justify-between`}>
				<div className="flex flex-row items-center gap-[5px]">
					<Icon name={itemDetails[item].icon} />
					{item}
				</div>
				<div
					style={{ touchAction: "none" }}
					onPointerDown={(e) => {
						console.log("Dragging");
						controls.start(e);
					}}
				>
					<Icon name="grab" />
				</div>
			</div>
		</Reorder.Item>
	);
};
