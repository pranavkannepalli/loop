"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function RebatesCheckbox() {
	const { userData, changeRebates } = useContext(LoopContext);

	return (
		<div className="flex flex-col items-start">
			{["Government", "Utility"].map((val, ind) => (
				<div key={ind} className="flex flex-row gap-[5px]">
					<input className="border-white-300 border" type="checkbox" checked={userData.rebates[val]} onChange={() => changeRebates(val)} />
					<p className="font-krona">{val}</p>
				</div>
			))}
		</div>
	);
}
