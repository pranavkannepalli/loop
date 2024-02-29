import Link from "next/link";
import Icon from "../Icon";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="absolute w-full flex flex-col items-center justify-center top-[20px]">
			<nav className="bg-white-100 rounded-[20px] shadow-card w-full layout">
				<div className="!py-5 grid grid-cols-5 items-center">
					<Link href="/">
						<h4>Loop</h4>
					</Link>
					<div className="flex flex-row gap-4 items-center justify-center col-span-3">
						<Link href="/dashboard">Dashboard</Link>
						<Link href="/solutions">Solutions</Link>
						<Link href="/login">Login</Link>
					</div>
					<div className="flex justify-end h-full items-center gap-[5px]">
						<Icon name="search" />
						<Link href="/dashboard">
							<Image alt="Profile Picture" src="/User.png" height={24} width={24} />
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
