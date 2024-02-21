import Link from "next/link";
import Icon from "../Icon";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="bg-white-100 layout rounded-[20px] !my-2">
			<div className="!py-5 grid grid-cols-5">
				<h4>Loop</h4>
				<div className="flex flex-row gap-4 items-center justify-center col-span-3">
					<Link href="Dashboard">Dashboard</Link>
					<Link href="Solutions">Solutions</Link>
					<Link href="Blog">Blog</Link>
					<Link href="Login">Login</Link>
				</div>
				<div className="flex justify-end h-full items-center gap-[5px]">
					<Icon name="search" />
					<Image alt="Profile Picture" src="/User.png" height={24} width={24} />
				</div>
			</div>
		</nav>
	);
}
