"use client";

import { useContext, useState, useEffect } from "react";
import SectorFilters from ".";
import SolutionCard from "../SolutionCard";
import LoopContext from "../LoopContext";
import solutions from "@/app/solutions";

export default function BasicList({ nosearch = false, slice = false, size = 3 }) {
	const { userData, query, filterSort } = useContext(LoopContext);

	const [subset, setSubset] = useState(solutions["NY"]);
	useEffect(() => {
		setSubset(slice ? filterSort(nosearch).slice(0, size) : filterSort(nosearch));
	}, [filterSort, setSubset, slice, size, nosearch, query, userData]);

	if (subset.length != 0) {
		return (
			<>
				<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
					{subset.map((sol, i) => (
						<SolutionCard {...sol} key={i} />
					))}
				</div>
			</>
		);
	} else {
		return (
			<>
				<p>No results match your query. Try changing your search filters.</p>
			</>
		);
	}
}
