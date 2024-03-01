"use client";

import { createContext, useState } from "react";

const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [redirect, setRedirect] = useState("/dashboard");

	const data = { loggedIn, setLoggedIn, redirect, setRedirect };

	return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
}

export { LoginContext as default, LoginContextProvider };
