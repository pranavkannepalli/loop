"use client";

import Button from "../Button";
import useRedirectFunction from "@/hooks/useRedirectFunction";

export default function SolutionsButton({ children }) {

	const search = useRedirectFunction("/solutions");

	return (
		<Button onClick={search}>{children}</Button>
	)
}
