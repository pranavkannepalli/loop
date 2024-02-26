"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";
import TextInput from "../TextInput";
import { StateSelector } from "../Dropdown";
import Button from "../Button";
import useRedirectFunction from "@/hooks/useRedirectFunction";

export default function Search() {
	const { query, changeQuery } = useContext(LoopContext);

	return (
		<>
			<TextInput
				value={query}
				suffix={<StateSelector />}
				size="large"
				placeholder="FIND A SOLUTION"
				onChange={(e) => {
					changeQuery(e.target.value);
				}}
			/>
		</>
	);
}
