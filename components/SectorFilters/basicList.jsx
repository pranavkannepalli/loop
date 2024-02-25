"use client";

import { useContext, useState, useEffect } from "react";
import SectorFilters from ".";
import SolutionCard from "../SolutionCard";
import LoopContext from "../LoopContext";
import solutions from "@/app/solutions";

export default function BasicList({ slice = false, size = 3 }) {
	const { filterSort } = useContext(LoopContext);

	const [subset, setSubset] = useState(solutions);
	useEffect(() => {
		setSubset(slice ? filterSort(solutions).slice(0, size) : filterSort(solutions));
	}, [filterSort, setSubset, slice, size]);

	return (
		<>
			<SectorFilters />
			<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
				{subset.map((sol, i) => (
					<SolutionCard {...sol} key={i} />
				))}
			</div>
		</>
	);
}
