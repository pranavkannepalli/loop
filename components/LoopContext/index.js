"use client";

import { createContext, useState } from "react";
import solutions from "@/app/solutions";

const LoopContext = createContext(null);

const states = ["NY", "TX", "WA"];

const LoopContextProvider = ({ children }) => {
	const [userData, changeData] = useState({ state: states[0], hometype: null, low: 0, high: 100, priorities: ["Cutting Down on Bills", "Lowering my Footprint", "Becoming Self-Sufficient"] });
	const [query, changeQuery] = useState("");

	const [filterStates, changeFilterStates] = useState({
		water: false,
		electricity: false,
		transportation: false,
		heating: false,
		waste: false,
	});

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

	const changeLow = (data) => {
		let n = { ...userData };
		n.low = data;
		changeData(n);
	};

	const changeHigh = (data) => {
		let n = { ...userData };
		n.high = data;
		changeData(n);
	};

	const filterSort = (nosearch = false) => {
		var n = solutions;
		n = n.filter((val) => filterStates[val.type]);
		console.log(n);
		if (n.length == 0) {
			n = solutions;
		}
		if (!nosearch) {
			n = n.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
			if (n.length == 0) return [];
		}
		return n;
	};

	const data = {
		userData,
		items,
		filterStates,
		query,
		filterSort,
		changeData,
		changeItems,
		addItem,
		removeItem,
		changeHomeType,
		changeState,
		changePriorities,
		changeLow,
		changeHigh,
		changeFilterStates,
		changeQuery,
	};

	return <LoopContext.Provider value={data}>{children}</LoopContext.Provider>;
};

export { LoopContext as default, LoopContextProvider };
