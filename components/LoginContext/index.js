"use client";

import { createContext, useState, useEffect, useContext } from "react";
import ChatGPTContext from "../ChatGPTContext";

const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [redirect, setRedirect] = useState("/dashboard");

	useEffect(() => {
		setLoggedIn(JSON.parse(localStorage.getItem("auth")) || false);
	}, []);

	useEffect(() => {
		localStorage.setItem("auth", JSON.stringify(loggedIn));
	}, [loggedIn]);

	const data = { loggedIn, setLoggedIn, redirect, setRedirect };

	return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
}

export { LoginContext as default, LoginContextProvider };
