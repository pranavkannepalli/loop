"use client";

import solutions from "@/app/solutions";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Solution({ params }) {
	const solutionName = params.solution.replace("%20", " ");
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		solutions.forEach((value) => {
			if (value.title == solutionName) {
				setSolution(value);
			}
		});
	}, [setSolution, solutionName]);

	if (solution != null) {
		return <div>{solution.title}</div>;
	} else {
		return (
			<div className="my-[100px] flex flex-col items-center justify-center">
				<p>Can&apos;t find this solution... go back instead?</p>
				<Link href="/solutions">Back</Link>
			</div>
		);
	}
}
