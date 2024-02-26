"use client";

import solutions from "@/app/solutions";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import LoopContext from "@/components/LoopContext";

export default function Solution({ params }) {
	const solutionName = params.solution.replace("%20", " ");
	const [solution, setSolution] = useState(null);
	const { userData } = useContext(LoopContext);

	useEffect(() => {
		solutions[userData.state].forEach((value) => {
			if (value.title == solutionName) {
				setSolution(value);
			}
		});
	}, [setSolution, solutionName, userData]);

	if (solution != null) {
		return (
			<main>
				<section className="layout box-border h-[100vh] items-center my-4 w-full">
					<div className="flex flex-row items-center justify-center h-[100vh] w-full">
						<div className="w-full text-left">
							<h2>{solution.title}</h2>
							<div className="flex flex-row">
								<h4>{solution.price}</h4>
								<h6>/Unit</h6>
							</div>
							<p>{solution.description}</p>
						</div>
						<div className="w-full">Hi</div>
					</div>
				</section>
			</main>
		);
	} else {
		return (
			<div className="my-[100px] flex flex-col items-center justify-center">
				<p>Can&apos;t find this solution... go back instead?</p>
				<Link href="/solutions">Back</Link>
			</div>
		);
	}
}
