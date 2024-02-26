"use client";

import Image from "next/image";
import Icon from "../Icon";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import { motion } from "framer-motion";

export default function SolutionCard({ title, gov, utility, price, setup, image, alt }) {
	const redirect = useRedirectFunction(`/solutions/${title}`);

	return (
		<motion.div whileHover={{ scale: 1.05 }} className="border min-w-[300px] border-white-300 rounded-xl overflow-hidden hover:cursor-pointer" onClick={() => redirect()}>
			<div className="relative w-full aspect-[16/9] ">
				<Image src={image} alt={alt} fill />
			</div>
			<div className="flex flex-col gap-3 bg-white-200 p-[20px]">
				<div className="flex justify-between">
					<h6>{title}</h6>
					<h6>~${price / 1000}k</h6>
				</div>
				<div className="flex justify-between">
					<div>
						<p className="caption mb-1">Rebates</p>
						<div className="flex gap-[20px]">
							<div className="flex items-center gap-[10px] text-green-700">
								<Icon name="company" />
								<p className="caption">~${utility / 1000}K</p>
							</div>
							<div className="flex items-center gap-[10px] text-green-700">
								<Icon name="government" />
								<p className="caption">~${gov / 1000}K</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-end">
						<p className="caption mb-1">Setup</p>
						<div className="flex items-center">
							{Array.from(Array(setup)).map((_, i) => (
								<Icon name="hammer" key={i} className="text-white-400" />
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
