"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";
import { Reorder } from "framer-motion";

export default function PrioritiesReorder({}) {
	const { userData, changePriorities } = useContext(LoopContext);

	return (
		<Reorder.Group axis="y" onReorder={(newOrder) => changePriorities(newOrder)} values={userData.priorities}>
			{userData.priorities.map((item) => (
				<Reorder.Item key={item} value={item}>
					{item}
				</Reorder.Item>
			))}
		</Reorder.Group>
	);
}
