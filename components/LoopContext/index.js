"use client";

import { createContext, useState, useEffect } from "react";
import solutions from "@/app/solutions";

// TODO: create login context and login page

const LoopContext = createContext(null);

const states = ["NY", "TX", "WA"];

const LoopContextProvider = ({ children }) => {
	const [userData, changeData] = useState(() => {
		const saved = localStorage.getItem("user");
		const initialSaved = JSON.parse(saved);
		return initialSaved || {
			state: states[0],
			hometype: "Apartment",
			low: 0,
			high: 100000,
			priorities: ["Cutting Down on Bills", "Lowering my Footprint", "Becoming Self-Sufficient"],
			rebates: { government: false, utility: false },
		}
	});
	const [query, changeQuery] = useState("");

	const [sort, changeSort] = useState("Sort");



	const [filterStates, changeFilterStates] = useState({
		water: false,
		electricity: false,
		transportation: false,
		heating: false,
		waste: false,
	});

	const [watchlist, changeWatchlist] = useState(() => {
		const saved = localStorage.getItem("watchlist");
		const initialSaved = JSON.parse(saved);
		return initialSaved || [];
	});


	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(userData));
	}, [userData])

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	}, [watchlist])

	const addItem = (itemName) => {
		let item = inProgress[itemName] ?? { stage: 0 };
		item.stage++;
		changeInProgress((prev) => {
			prev[itemName] = item;
			return { ...prev };
		});
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
		let statefulSteps = solution.steps.map((step) => ({ ...step, isCompleted: false }));
		solution.steps = statefulSteps;
		item.push(solution);
		changeWatchlist(item);
	};

	const setStep = (solutionIndex, stepIndex, value) => {
		let newList = [...watchlist];
		newList[solutionIndex].steps[stepIndex].isCompleted = value;
		changeWatchlist(newList);
	};

	const inWatchlist = (solution) => {
		let index = -1;
		watchlist.forEach((val, i) => {
			if(val.title === solution.title) index = i;
		})
		return index;
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

	const filterSort = (nosearch = false, nofilter = false, nosort = false) => {
		var n = solutions[userData.state];
		if (!nofilter) n = n.filter((val) => filterStates[val.type]);
		if (n.length == 0) {
			n = solutions[userData.state];
		}
		if (!nofilter) {
			if (userData.rebates.government) {
				n = n.filter((item) => item.gov > 0);
			}
			if (userData.rebates.utility) {
				n = n.filter((item) => item.utility > 0);
			}
		}
		if (!nosearch) {
			n = n.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && item.price < userData.high && item.price > userData.low);
		}


		console.log(sort);
		if (!nosort) {
			if (sort == "Raw Price") {
				n = n.sort((item1, item2) => item1.price - item2.price);
			}
			if (sort == "Rebates") {
				n = n.sort((item1, item2) => item1.gov - item2.giv + item1.utility - item2.utility);
			}
			if (sort == "Difficulty") {
				n = n.sort((item1, item2) => item1.setup - item2.setup);
			}
			if (sort == "A to Z") {
				n = n.sort((item1, item2) => item1.title.localeCompare(item2.title));
			}
			if (sort == "Z to A") {
				n = n.sort((item1, item2) => -1 * item1.title.localeCompare(item2.title));
			}
		}

		return n;
	};

	const data = {
		userData,
		filterStates,
		query,
		sort,
		watchlist,
		setStep,
		inWatchlist,
		removeWatchlist,
		addWatchlist,
		removeWatchlist,
		filterSort,
		changeData,
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
		changeSort,
	};

	return <LoopContext.Provider value={data}>{children}</LoopContext.Provider>;
};

export { LoopContext as default, LoopContextProvider };
