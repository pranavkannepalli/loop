"use client";

import TextInput from "../TextInput";
import Button from "../Button";
import ChatGPTContext from "../ChatGPTContext";
import { useContext } from "react";
import Icon from "../Icon";

export default function ChatGPTPrompt({ children }) {
	const { setIsOpen, openMessage, setOpenMessage, setSubmitOnOpen } = useContext(ChatGPTContext);

	const onClick = (e, message) => {
		e.preventDefault();
		setIsOpen(true);
		setOpenMessage(message);
		setSubmitOnOpen(true);
	};

	return (
		<div className="flex flex-col items-stretch w-full">
			<form className="mx-auto flex flex-row justify-center items-center gap-[16px] max-w-[400px] md:min-w-[500px]" onSubmit={(e) => onClick(e, openMessage)}>
				<TextInput placeholder="Tell us what the problem is" value={openMessage} onChange={(e) => setOpenMessage(e.target.value)} />
				<Button prefix={<Icon name="sparkles" size={20}/>} onClick={(e) => onClick(e, openMessage)}>Go</Button>
			</form>
			<div className="mx-auto justify-center w-full flex flex-row gap-[10px] overflow-x-auto mt-[10px]">
				<button style={{ minWidth: "max-content" }} className="caption p-[10px] bg-green-500 border border-green-700 text-green-700 border-solid rounded-[5px]" onClick={(e) => onClick(e, "My Electric Bill Is Too High")}>
					My Electricity Bill Is Too High
				</button>
				<button style={{ minWidth: "max-content" }} className="caption p-[10px] w-max bg-purple-500 border border-purple-700 text-purple-700 border-solid rounded-[5px]" onClick={(e) => onClick(e, "How Do I low My Footprint?")}>
					How Do I Lower My Footprint?
				</button>
				<button style={{ minWidth: "max-content" }} className="caption p-[10px] w-max bg-blue-500 border border-blue-700 text-blue-700 border-solid rounded-[5px]" onClick={(e) => onClick(e, "Is Solar The Right Option For Me?")}>
					Is Solar The Right Option For Me?
				</button>
			</div>
		</div>
	);
}
