"use client";

import Link from "next/link";
import Icon from "../Icon";
import Image from "next/image";
import { AnimatePresence, m, motion } from "framer-motion";
import { useState, useContext } from "react";
import LoginContext from "../LoginContext";
import { useRouter, usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import ChatGPTContext from "../ChatGPTContext";

const links = [
	{
		label: "Home",
		address: "/",
		shouldRender: (loggedIn) => true,
	},
	{
		label: "Dashboard",
		address: "/dashboard",
		shouldRender: (loggedIn) => loggedIn,
	},
	{
		label: "Solutions",
		address: "/solutions",
		shouldRender: (loggedIn) => true,
	},
	{
		label: "Calculators",
		address: "/calculators",
		shouldRender: (loggedIn) => true,
	},
	{
		label: "About",
		address: "/about",
		shouldRender: (loggedIn) => true,
	},
	{
		label: "Sources",
		address: "/sources",
		shouldRender: (loggedIn) => true,
	},
	{
		label: "Login",
		address: "/login",
		shouldRender: (loggedIn) => !loggedIn,
	},
];

export default function Navbar() {
	const [showMenu, changeShowMenu] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const { setRedirect, loggedIn } = useContext(LoginContext);
	const scrollPos = useScrollPosition();
	const linksFiltered = links.filter((e) => e.shouldRender(loggedIn));
	const { setIsOpen } = useContext(ChatGPTContext);

	return (
		<>
			<nav
				style={{
					width: "min(1440px, calc(100vw - 40px)",
				}}
				className={`z-40 fixed top-[20px] bg-white-200 rounded-[20px] ${scrollPos < 50 ? "" : "shadow-card"} max-w-[1440px] left-[50%] translate-x-[-50%] ${pathname == "/register" && "hidden"}`}
			>
				<div className="!py-5 grid items-center">
					<Link href="/" style={{ justifySelf: "flex-start", gridRow: 1 }}>
						<h4>Loop</h4>
					</Link>
					<AnimatePresence>
						<div style={{ gridRow: 1 }} className="hidden md:flex flex-row gap-[50px] items-start justify-self-center justify-center col-span-3">
							{linksFiltered.map((e) => (
								<div className="flex flex-col items-center gap-[6px]" key={e.label}>
									<Link href={e.address} className={pathname == e.address || (e.address != "/" && pathname.includes(e.address)) ? "text-white-600" : "text-white-400"}>
										{e.label}
									</Link>
									{(pathname == e.address || (e.address != "/" && pathname.includes(e.address))) && (
										<motion.div className="w-[35px] h-[3px] rounded-full bg-white-600" layoutId="underline" />
									)}
								</div>
							))}
						</div>
					</AnimatePresence>
					<div style={{ gridRow: 1 }} className="justify-self-end flex justify-end h-full items-center gap-[10px]">
						<div
							className="text-white-100 bg-white-600 rounded-full flex justify-center items-center w-[24px] h-[24px] hover:cursor-pointer
						"
							onClick={() => setIsOpen(true)}
						>
							<Icon name="sparkles" size={15} />
						</div>
						<Icon name="menu" className="md:hidden" onClick={() => changeShowMenu(true)} />
						<Link href={loggedIn ? "/dashboard" : "/login"}>
							<Image alt="Profile Picture" src="/User.png" height={24} width={24} />
						</Link>
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{showMenu && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="z-50 t-0 fixed w-full h-full gap-[20px] bg-white-100 flex flex-col items-center justify-center"
					>
						<Icon name="add" className="absolute top-[20px] right-[20px]" style={{ transform: "rotate(45deg)" }} onClick={() => changeShowMenu(false)} />
						{loggedIn && (
							<Link onClick={() => changeShowMenu(false)} href="/dashboard">
								Dashboard
							</Link>
						)}
						<Link onClick={() => changeShowMenu(false)} href="/solutions">
							Solutions
						</Link>
						<Link onClick={() => changeShowMenu(false)} href="/about">
							About
						</Link>
						<Link onClick={() => changeShowMenu(false)} href="/sources">
							Sources
						</Link>
						{!loggedIn && (
							<div
								className="link cursor-pointer"
								onClick={() => {
									if (pathname != "/login") setRedirect(pathname);
									changeShowMenu(false);
									router.push("/login");
								}}
							>
								Login
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
