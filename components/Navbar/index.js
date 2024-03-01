"use client";

import Link from "next/link";
import Icon from "../Icon";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useContext } from "react";
import LoginContext from "../LoginContext";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
	const [showMenu, changeShowMenu] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const { setRedirect, loggedIn } = useContext(LoginContext);

	return (
		<>
			<nav
				style={{
					width: "min(1440px, calc(100vw - 40px)",
				}}
				className="z-40 fixed top-[20px] bg-white-100 rounded-[20px] shadow-card max-w-[1440px] left-[50%] translate-x-[-50%]"
			>
				<div className="!py-5 grid items-center">
					<Link href="/" style={{ justifySelf: "flex-start", gridRow: 1 }}>
						<h4>Loop</h4>
					</Link>
					<div style={{ gridRow: 1 }} className="hidden md:flex flex-row gap-4 items-center justify-self-center justify-center col-span-3">
						{loggedIn && <Link href="/dashboard">Dashboard</Link>}
						<Link href="/solutions">Solutions</Link>
						<Link href="/about">About</Link>
						<Link href="/sources">Sources</Link>
						{!loggedIn && (
							<div
								className="link cursor-pointer"
								onClick={() => {
									if (pathname != "/login") setRedirect(pathname);
									router.push("/login");
								}}
							>
								Login
							</div>
						)}
					</div>
					<div style={{ gridRow: 1 }} className="justify-self-end flex justify-end h-full items-center gap-[10px]">
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
									changeShowModal(false);
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
