"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function HometypeCheckbox() {
	const { userData, changeHomeType } = useContext(LoopContext);

	return (
		<div className="flex flex-col items-start">
			{["Apartment", "Multi-Family Home", "Individual Home"].map((val, ind) => (
				<div key={ind} className="flex flex-row gap-[5px]">
					<input className="border-white-300 border" type="checkbox" checked={val == userData.hometype} onChange={() => changeHomeType(val)} />
					<p className="font-krona">{val}</p>
				</div>
			))}
		</div>
	);
}
