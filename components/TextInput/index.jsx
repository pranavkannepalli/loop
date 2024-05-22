import classNames from "@/hooks/classnames";

// TODO: Responsify this crap

export default function TextInput({ size = "small", hasInput = true, prefix = null, suffix = null, ...props }) {
	return (
		<div
			className={classNames(
				`flex flex-1 gap-[16px] items-center 
                        px-[16px]
                        outline outline-2 outline-white-300
                        hover:outline-white-400 focus-within:outline-green-700`,
				size == "small" ? "py-[12px] rounded-[8px] bg-white-100" : "p-[16px] rounded-[16px] bg-transparent"
			)}
		>
			{prefix}
			{hasInput && <input className=" flex-1 w-full min-w-0 focus:outline-none !bg-transparent font-inter" {...props} />}
			{suffix}
		</div>
	);
}
