"use client";

import { useContext, useEffect, useState } from "react";
import ChatGPTContext from "../ChatGPTContext";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Button from "../Button";
import LoopContext from "../LoopContext";

const ChatGPTModal = () => {
	const { messages, addMessage, isOpen, setIsOpen, openMessage, setOpenMessage, submitOnOpen, setSubmitOnOpen } = useContext(ChatGPTContext);
	const { state } = useContext(LoopContext);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (submitOnOpen) {
			setSubmitOnOpen(false);
			onSubmit();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const onSubmit = async (e) => {
		if (e) e.preventDefault();
		setLoading(true);
		console.log(state, openMessage);
		const response = await fetch("/api/openAI", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ state: state, query: openMessage }),
		}).then(async (response) => await response.json());
		setOpenMessage("");
		setLoading(false);
		console.log(response);
		addMessage(response["message"]);
		console.log(messages);
	};

	return (
		<div className={`sticky z-50 top-0 flex justify-center items-center w-screen h-screen ${!isOpen ? "hidden" : "backdrop-blur"}`}>
			<div className="bg-white-100 h-[50vh] w-[75vw] rounded-[20px] p-[20px] ">
				<div
					className="flex justify-center items-center w-[30px] h-[30px] relative left-[calc(100%-65px)] top-[40px] rounded-full text-white-400 bg-white-200 hover:cursor-pointer"
					onClick={() => setIsOpen(false)}
				>
					<Icon name="remove" />
				</div>
				<div className="flex flex-col gap-[20px] h-[calc(100%-40px)] justify-end">
					<form className="flex flex-row gap-[10px] pt-[10px]" onSubmit={async (e) => await onSubmit(e)}>
						<TextInput placeholder="Tell us how we can help!" value={openMessage} onChange={(e) => setOpenMessage(e.target.value)} />
						<Button onClick={async (e) => await onSubmit(e)}>Go</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatGPTModal;
