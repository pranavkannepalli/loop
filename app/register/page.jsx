"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";
import LoginContext from "@/components/LoginContext";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import LoopContext from "@/components/LoopContext";

export default function Login() {
	const [screen, setScreen] = useState(0);

	const { city, state, address, zip, setCity, setState, setAddress, setZip } = useContext(LoopContext);
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const dashboard = useRedirectFunction("/register");

	useEffect(() => {
		if (loggedIn) dashboard();
	}, [screen, loggedIn, dashboard]);

	return (
		<main className="flex flex-col items-center justify-center w-full h-screen box-border p-[20px]">
			<div className="flex flex-col gap-[20px]">
				<h6>Set Up Your Profile</h6>
				<h2>Register</h2>
			</div>
		</main>
	);
}
