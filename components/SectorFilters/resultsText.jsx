"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function ResultsText() {
	const { filterSort } = useContext(LoopContext);

	return <h3>Showing All Results ({filterSort().length})</h3>;
}
