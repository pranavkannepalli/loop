"use client";

import classNames from "@/hooks/classnames";

export default function Button({ prefix = null, type = "primary", children, className = "", onClick = (e) => {}, submit=false }) {
	return (
		<button
			className={classNames(
				"px-[24px] flex gap-[10px] items-center justify-center py-[12px] rounded-[8px]",
				type == "primary" ? "bg-green-800 text-white-200" : "bg-none text-green-700",
				className
			)}
			type={submit ? "submit" : ""}
			onClick={(e) => onClick(e)}
		>
			{prefix}
			{children}
		</button>
	);
}
