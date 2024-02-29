"use client";

import { createContext, useState } from "react";
import solutions from "@/app/solutions";

// TODO: create login context and login page

const LoopContext = createContext(null);

const states = ["NY", "TX", "WA"];

const LoopContextProvider = ({ children }) => {
	const [userData, changeData] = useState({
		state: states[0],
		hometype: "Apartment",
		low: 0,
		high: 100000,
		priorities: ["Cutting Down on Bills", "Lowering my Footprint", "Becoming Self-Sufficient"],
		rebates: { government: false, utility: false },
	});
	const [query, changeQuery] = useState("");

	const [filterStates, changeFilterStates] = useState({
		water: false,
		electricity: false,
		transportation: false,
		heating: false,
		waste: false,
	});

	const [inProgress, changeInProgress] = useState({});
	const [watchlist, changeWatchlist] = useState([]);

	const addItem = (itemName) => {
		let item = inProgress[itemName] ?? { stage: 0 };
		item.stage++;
		changeInProgress((prev) => {
			prev[itemName] = item;
			return { ...prev };
		});
		console.log(inProgress);
	};

	const removeItem = (itemName) => {
		let item = inProgress[itemName] ?? { stage: 0 };
		item.stage--;
		changeInProgress((prev) => {
			if (item.stage == 0) {
				delete prev[itemName];
			} else {
				prev[itemName] = item;
			}
			return { ...prev };
		});
	};

	const addWatchlist = (solution) => {
		let item = watchlist.slice();
		item.push(solution);
		changeWatchlist(item);
	};

	const inWatchlist = (solution) => {
		return watchlist.indexOf(solution) != -1;
	};

	const removeWatchlist = (solution) => {
		let item = watchlist.slice();
		let index = item.indexOf(solution);
		if (index > -1) {
			item.splice(index, 1);
		}
		changeWatchlist(item);
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

	const changeRebates = (data = "government") => {
		let n = { ...userData };
		n.rebates[data.toLowerCase()] = !n.rebates[data.toLowerCase()];
		changeData(n);
	};

	const filterSort = (nosearch = false) => {
		var n = solutions[userData.state];
		n = n.filter((val) => filterStates[val.type]);
		console.log(n);
		if (n.length == 0) {
			n = solutions[userData.state];
		}
		if (userData.rebates.government) {
			n = n.filter((item) => item.gov > 0);
		}
		if (userData.rebates.utility) {
			n = n.filter((item) => item.utility > 0);
		}
		if (!nosearch) {
			n = n.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && item.price < userData.high && item.price > userData.low);
		}
		return n;
	};

	const data = {
		userData,
		inProgress,
		filterStates,
		query,
		inWatchlist,
		removeWatchlist,
		addWatchlist,
		removeWatchlist,
		filterSort,
		changeData,
		changeInProgress,
		addItem,
		removeItem,
		changeHomeType,
		changeState,
		changePriorities,
		changeLow,
		changeHigh,
		changeFilterStates,
		changeQuery,
		changeRebates,
	};

	return <LoopContext.Provider value={data}>{children}</LoopContext.Provider>;
};

export { LoopContext as default, LoopContextProvider };
