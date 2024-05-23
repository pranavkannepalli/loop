"use client";

import { useContext, useEffect, useState } from "react";
import ChatGPTContext from "../ChatGPTContext";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Button from "../Button";
import LoopContext from "../LoopContext";
import Image from "next/image";
import SolutionCard from "../SolutionCard";
import solutions from "@/app/solutions";

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
		addMessage("User", openMessage, state);
		setOpenMessage("");
		setLoading(true);
		const response = await fetch("/api/openAI", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ state: state, query: openMessage }),
		}).then(async (response) => await response.json());
		setLoading(false);
		addMessage("Loop AI", response["message"], state);
	};

	return (
		<div className={`fixed z-50 top-0 left-0 flex justify-center items-center w-full h-screen box-border ${!isOpen ? "hidden" : "bg-white-600 bg-opacity-20"}`}>
			<div style={{ width: "calc(100% - 40px)", height: "calc(100% - 40px)" }} className="box-border max-w-[1024px] max-h-[600px] bg-white-100 rounded-[20px] p-[20px] ">
				<div
					className="flex justify-center items-center w-[30px] h-[30px] relative left-[calc(100%-45px)] top-[20px] rounded-full text-white-400 bg-white-200 hover:cursor-pointer"
					onClick={() => setIsOpen(false)}
				>
					<Icon name="remove" />
				</div>
				<div className="gap-[20px] w-full h-[calc(100%-120px)] overflow-y-auto">
					{messages.map((value, index) => (
						<ChatGPTMessage message={value["message"]} sender={value["sender"]} cardState={value["state"]} index={index} key={index} />
					))}
				</div>
				<form className="mt-[20px] flex flex-row gap-[10px] pt-[10px]" onSubmit={async (e) => await onSubmit(e)}>
					<TextInput placeholder="Tell us how we can help!" value={openMessage} onChange={(e) => setOpenMessage(e.target.value)} disabled={loading} />
					<Button disabled={loading} onClick={async (e) => await onSubmit(e)}>
						Go
					</Button>
				</form>
			</div>
		</div>
	);
};

const ChatGPTMessage = ({ message, sender, cardState, index }) => {
	const { state } = useContext(LoopContext);

	return (
		<div className={`flex w-full min-h-max  flex-col gap-[10px] ${index == 0 ? "pr-[40px]" : "!mt-[20px]"}`}>
			<div className="flex items-center gap-[10px]">
				<div className="!min-w-[24px]">
					{sender == "Loop AI" ? (
						<Image alt="Profile Picture" src="/User.png" height={24} width={24} />
					) : (
						<div
							className="text-white-100 bg-white-600 rounded-full flex justify-center items-center w-[24px] h-[24px] hover:cursor-pointer
						"
							onClick={() => setIsOpen(true)}
						>
							<Icon name="sparkles" size={15} />
						</div>
					)}
				</div>
				<div className="caption text-white-400">{sender}</div>
			</div>
			<div className="flex flex-col gap-[5px]">

				{sender != "Loop AI" || message.includes("applicable") ? (
					<p>{message}</p>
				) : (
					<div className="flex flex-row gap-[20px] overflow-x-auto items-stretch">
						{cardState == state ? (
							message.split(",").map((value, index) => <GPTSolutionCard solution={value} state={cardState} key={value + index} />)
						) : (
							<p>No longer available (likely because you changed states since submitting this message).</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

const GPTSolutionCard = ({ solution, state }) => {
	const data = solutions[state].find((e) => e["title"].includes(solution));

	if (data != undefined) return <SolutionCard {...data} />;
};

export default ChatGPTModal;
