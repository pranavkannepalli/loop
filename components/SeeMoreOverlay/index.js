"use client";

import Button from "../Button";
import useRedirectFunction from "@/hooks/useRedirectFunction";

export default function SeeMore() {
	const solutionsRedirect = useRedirectFunction("/solutions");
	return (
		<div className="layout relative top-[-300px] h-[300px] bg-white-200 flex flex-col items-center justify-center gap-[20px]">
			<h1>Want to see more?</h1>
			<Button onClick={() => solutionsRedirect()}>GO TO SOLUTIONS</Button>
		</div>
	);
}
