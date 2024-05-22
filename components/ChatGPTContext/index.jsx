"use client";

import { createContext, useState, useEffect } from "react";

const ChatGPTContext = createContext(null);

function ChatGPTContextProvider({ children }) {
	const [messages, setMessages] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [openMessage, setOpenMessage] = useState("");
	const [submitOnOpen, setSubmitOnOpen] = useState(false);

	const addMessage = (message) => {
		let m = messages.slice();
		m.push(message);
		setMessages(m);
	};

	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	const data = { messages, setMessages, addMessage, isOpen, setIsOpen, openMessage, setOpenMessage };

	return <ChatGPTContext.Provider value={data}>{children}</ChatGPTContext.Provider>;
}

export { ChatGPTContext as default, ChatGPTContextProvider };
