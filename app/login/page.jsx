"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";
import LoginContext from "@/components/LoginContext";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const images = [
	"/about/Solutions.png",
	"/about/Details.png",
	"/about/Dashboard.png"
]

export default function Login() {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [animationImg, changeAnimationImg] = useState(0);
	const [error, changeError] = useState(null);
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const dashboard = useRedirectFunction("/register");

	useEffect(() => {
		if (loggedIn) dashboard();
	}, [loggedIn, dashboard]);

	useEffect(() => {
		let unsubscribe = setInterval(() => {
			changeAnimationImg(prev => (prev + 1) % 3);
		}, 5000);
		return () => clearInterval(unsubscribe);
	}, [])

	return (
		<main className="layout flex flex-col-reverse items-stretch md:flex-row md:items-center justify-center gap-[20px] w-full h-screen box-border !pt-[100px]">
			<form className="flex flex-1 flex-col gap-[20px] " onSubmit={(e) => {
				e.preventDefault()
				if(password.trim() != "Passw0rd") {
					changeError("Incorrect Password");
				}
				setLoggedIn(username == "tsajudges@tsa.org" && password.trim() == "Passw0rd");
				if (loggedIn) setScreen(screen + 1);
			}}>
				<h2>Login</h2>
				<TextInput
					placeholder="Email"
					prefix={<Icon name="account" />}
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					type="email"
				/>
				<TextInput
					placeholder="Password"
					type="password"
					prefix={<Icon name="password" />}
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						changeError(e.target.value.trim() == "Passw0rd" ? null: "Incorrect Password");
					}}
				/>
				{error && <p className="caption text-error text-right">{error}</p>}
				<Button
					submit
				>
					Login
				</Button>
				<p>Username: tsajudges@tsa.org</p>
				<p>Password: Passw0rd</p>
				<p>
					NOTE: This will trigger a registration flow as
					<br /> if the user just registered. This is just for demonstration <br /> purposes and the judges do not have to fill anything out.
				</p>
			</form>
			<div className="flex-1 flex items-center justify-end">
				<AnimatePresence mode="wait">
					<motion.div key={animationImg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ aspectRatio: "1/1" }} className="flex-1 max-w-[500px] relative *:object-contain">
						<Image key={animationImg} src={images[animationImg]} fill
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</main>
	);
}
