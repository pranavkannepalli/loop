"use client";

import { createContext, useState } from "react";

const LoopContext = createContext(null);

const states = ["NY", "TX", "WA"];

const LoopContextProvider = ({ children }) => {
	const [userData, changeData] = useState({ state: states[0], hometype: null, low: 0, high: 100, priorities: ["Cutting down on bills", "Lowering my footprint", "Becoming self-sufficient"] });
	const [items, changeItems] = useState({});

	const addItem = (itemName) => {
		let item = items[itemName] ?? { stage: 0 };
		item.stage++;
		changeItems((prev) => {
			prev[itemName] = item;
			return { ...prev };
		});
		console.log(items);
	};

	const removeItem = (itemName) => {
		let item = items[itemName] ?? { stage: 0 };
		item.stage--;
		changeItems((prev) => {
			if (item.stage == 0) {
				delete prev[itemName];
			} else {
				prev[itemName] = item;
			}
			return { ...prev };
		});
	};

	const changeHomeType = (data) => {
		let n = { ...userData };
		n.hometype = data;
		changeData(n);
	};

	const changeState = (data) => {
		let n = { ...userData };
		n.state = data;
		changeData(n);
	};

	const changePriorities = (data) => {
		let n = { ...userData };
		n.priorities = data;
		changeData(n);
	};

	const data = {
		userData,
		items,
		changeData,
		changeItems,
		addItem,
		removeItem,
		changeHomeType,
		changeState,
		changePriorities,
	};

	return <LoopContext.Provider value={data}>{children}</LoopContext.Provider>;
};

export { LoopContext as default, LoopContextProvider };
