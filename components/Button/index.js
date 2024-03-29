"use client";

import classNames from "@/hooks/classnames";

export default function Button({ prefix=null, type = "primary", children, className = "", onClick = () => {} }) {
	return (
		<button className={classNames("px-[32px] flex gap-[10px] items-center justify-center py-[16px] rounded-[16px]", type == "primary" ? "bg-green-800 text-white-200" : "bg-none text-green-700", className)} onClick={onClick}>
			{prefix}
			{children}
		</button>
	);
}
