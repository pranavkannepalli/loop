"use client";

import classNames from "@/hooks/classnames";

export default function Button({ type = "primary", children, onClick = () => {} }) {
	return (
		<button className={classNames("px-[32px] py-[16px] rounded-[16px]", type == "primary" ? "bg-green-800 text-white-200" : "bg-none text-green-700")} onClick={onClick}>
			{children}
		</button>
	);
}
