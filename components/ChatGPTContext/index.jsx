"use client";

import { createContext, useState, useEffect } from "react";

const ChatGPTContext = createContext(null);

function ChatGPTContextProvider({ children }) {
	const [messages, setMessages] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [openMessage, setOpenMessage] = useState("");
	const [submitOnOpen, setSubmitOnOpen] = useState(false);

	const addMessage = (sender, message, state) => {
		setMessages((prev) => [...prev, { sender: sender, message: message, state: state }]);
	};

	const data = { messages, setMessages, addMessage, isOpen, setIsOpen, openMessage, setOpenMessage, submitOnOpen, setSubmitOnOpen };

	return <ChatGPTContext.Provider value={data}>{children}</ChatGPTContext.Provider>;
}

export { ChatGPTContext as default, ChatGPTContextProvider };
