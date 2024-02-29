"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function StateCheckbox() {
	const { userData, changeState } = useContext(LoopContext);

	return (
		<div className="flex flex-col items-start">
			{["WA", "NY", "TX"].map((val, ind) => (
				<div key={ind} className="flex flex-row gap-[5px]">
					<input className="border-white-300 border" type="checkbox" checked={val == userData.state} onChange={() => changeState(val)} />
					<p className="font-krona">{val}</p>
				</div>
			))}
		</div>
	);
}
