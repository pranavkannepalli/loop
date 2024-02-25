"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";

export default function UserTags() {
	const { userData } = useContext(LoopContext);

	return (
		<div className="flex flex-row flex-wrap gap-[10px]">
			{userData.hometype != null ? <div className="bg-yellow-500 rounded-[14px] px-[14px] py-[8px] caption text-yellow-800">{userData.hometype}</div> : ""}
			<div className="bg-purple-500 rounded-[14px] px-[14px] py-[8px] caption text-purple-800">{userData.state}</div>
		</div>
	);
}
