"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";
import LoginContext from "@/components/LoginContext";
import useRedirectFunction from "@/hooks/useRedirectFunction";

export default function Login() {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const { redirect, loggedIn, setLoggedIn } = useContext(LoginContext);
	const dashboard = useRedirectFunction(redirect);

	useEffect(() => {
		if (loggedIn) dashboard();
	}, [loggedIn, dashboard]);

	return (
		<main className="flex flex-col items-center justify-center w-full h-screen box-border p-[20px]">
			<div className="flex flex-col gap-[20px] border border-white-300 bg-white-100 p-[40px] rounded-[20px]">
				<h2>Login</h2>
				<TextInput
					placeholder="Email"
					prefix={<Icon name="account" />}
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<TextInput
					placeholder="Password"
					type="password"
					prefix={<Icon name="password" />}
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<Button
					onClick={() => {
						setLoggedIn(username == "tsajudges@tsa.org" && password == "Passw0rd");
					}}
				>
					Login
				</Button>
				<p>Username: tsajudges@tsa.org</p>
				<p>Password: Passw0rd</p>
			</div>
		</main>
	);
}
