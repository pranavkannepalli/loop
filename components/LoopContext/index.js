"use client";

import { createContext, useState, useEffect } from "react";
import solutions from "@/app/solutions";

// TODO: create login context and login page

const LoopContext = createContext(null);

const states = ["NY", "TX", "WA"];

let defaultWatchlist = [
	{
		alt: "A bathroom sink with a low-flow faucet and aerator.",
		gov: 60,
		utility: 30,
		price: 200,
		setup: 1,
		image: "/solutions/low-faucet.png",
		imageNoBg: "/solution_models/low_flow.png",
		title: "Low-Flow Fixtures",
		stats: [
			{
				data: 40,
				units: "%",
				description: "Reduction in water consumption",
			},
			{ data: 10000, units: "gal/yr", description: "Water savings" },
		],
		localProviders: ["Home Depot", "Lowe's", "Ferguson", "Local plumbing supply stores"],
		type: ["Low-Flow Faucets", "Low-Flow Showerheads", "Low-Flow Toilets"],
		description:
			"Low-flow fixtures include faucets, showerheads, and toilets designed to use less water while maintaining performance. They can save water, reduce utility bills, and help preserve the environment.",
		hometypes: ["Apartment", "Multi-family home", "Individual home"],
		costGraph: [
			[1985, 300],
			[1990, 320],
			[1995, 340],
			[2000, 345],
			[2005, 360],
			[2010, 375],
			[2015, 390],
			[2020, 420],
			[2025, 490],
		],
		roiGraph: [
			[1985, 16],
			[1990, 23],
			[1995, 26],
			[2000, 32],
			[2005, 39],
			[2010, 44],
			[2015, 54],
			[2020, 82],
			[2025, 120],
		],
		steps: [
			{
				header: "Turn off water supply.",
				description: "You can find this in your garage",
			},
			{
				header: "Remove the old fixture.",
				description: "Consult the manufacturer's instructions for specific removal steps",
			},
			{
				header: "Install the new low-flow fixture.",
				description: "Consult the manufacturer's instructions for specific installation steps",
			},
			{
				header: "Turn the water supply on",
				description: "Test the fixture before certifying it works",
			},
		],
		utilityRebates: [
			{
				price: 100,
				label: "New York State Energy Research and Development Authority (NYSERDA)",
			},
			{
				price: 200,
				label: "New York City Department of Environmental Protection (DEP)",
			},
		],
		govtRebates: [{ price: 60, label: "Federal tax credit" }],
		type: "water",
	},
	{
		alt: "A diagram of a greywater recycling system, showing water flowing from a shower and sink into a storage tank and being filtered before being reused for toilet flushing and irrigation",
		gov: 1100,
		utility: 1000,
		price: 3500,
		setup: 2,
		image: "/solutions/greywater_recycling.png",
		imageNoBg: "/solution_models/grey_water.png",
		title: "Greywater Recycling",
		stats: [
			{
				data: 35,
				units: "%",
				description: "household water usage reduction",
			},
		],
		description: "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity. ",
		hometypes: ["Multi-Family Home", "Individual Home"],
		costGraph: [
			[1985, 2500],
			[1990, 3000],
			[1995, 3350],
			[2000, 3900],
			[2005, 4250],
			[2010, 4600],
			[2015, 4900],
			[2020, 5250],
			[2025, 5700],
		],
		roiGraph: [
			[1985, 150],
			[1990, 110],
			[1995, 140],
			[2000, 150],
			[2005, 160],
			[2010, 190],
			[2015, 190],
			[2020, 180],
			[2025, 160],
		],
		steps: [
			{
				header: "Consult with a plumber or greywater system specialist",
				description: "to determine the best system for your home.",
			},
			{
				header: "Obtain necessary permits and approvals",
				description: "from local authorities.",
			},
			{
				header: "Install the greywater collection and storage system",
				description: "typically involving plumbing modifications and the installation of a storage tank.",
			},
			{
				header: "Install the filtration and treatment system",
				description: "which may include a pump, filters, and disinfection equipment.",
			},
			{
				header: "Connect the treated greywater",
				description: "to the toilet or irrigation system as appropriate.",
			},
			{
				header: "Test the system",
				description: "and make any necessary adjustments.",
			},
		],
		utilityRebates: [
			{
				price: 1000,
				label: "Up to $1,000 for residential greywater systems",
			},
		],
		govtRebates: [
			{
				price: 30,
				label: "Federal tax credit",
			},
		],
		localProviders: ["Water Management Systems, Inc.", "Eco Brooklyn", "Green Water Solutions"],
		types: ["Basic gravity-fed systems", "Pump-based systems with advanced filtration and treatment", "Integrated greywater and rainwater harvesting systems"],

		type: "water",
	},
];

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

	const [sort, changeSort] = useState("Sort");

	const [address, setAddress] = useState("3828 Piermont Drive NE");
	const [city, setCity] = useState("Albuquerque");
	const [state, setState] = useState("NM");
	const [zip, setZip] = useState("87111");

	const [filterStates, changeFilterStates] = useState({
		water: false,
		electricity: false,
		transportation: false,
		heating: false,
		waste: false,
	});

	const [watchlist, changeWatchlist] = useState(defaultWatchlist);

	useEffect(() => {
		changeData(
			JSON.parse(localStorage.getItem("user")) || {
				state: states[0],
				hometype: "Apartment",
				low: 0,
				high: 100000,
				priorities: ["Cutting Down on Bills", "Lowering my Footprint", "Becoming Self-Sufficient"],
				rebates: { government: false, utility: false },
			}
		);
		changeWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(userData));
	}, [userData]);

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	}, [watchlist]);

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
		item.push({ ...solution });
		changeWatchlist([...item]);
	};

	const setStep = (solutionIndex, stepIndex, value) => {
		let newList = [...watchlist];
		newList[solutionIndex].steps[stepIndex].isCompleted = value;
		changeWatchlist(newList);
	};

	const inWatchlist = (solution) => {
		let index = -1;
		watchlist.forEach((val, i) => {
			if (val.title === solution?.title) {
				index = i;
			}
		});
		return index != -1;
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
			n = n.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && item.price <= userData.high && item.price >= userData.low);
		}

		if (!nosort) {
			if (sort == "Raw Price") {
				n = n.sort((item1, item2) => item1.price - item2.price);
			}
			if (sort == "Rebates") {
				n = n.sort((item1, item2) => -1 * (item1.gov - item2.gov + item1.utility - item2.utility));
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
		address,
		city,
		state,
		zip,
		setAddress,
		setCity,
		setState,
		setZip,
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
