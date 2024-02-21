import HomeCard from "@/components/HomeCard";

export default function Home() {
	return (
		<main className="layout">
			<div className="flex flex-col md:flex-row h-[calc(100vh-100px)] justify-center items-center my-4">
				<div className="md:flex-1">
					<h1 className="leading-none">
						Helping you help <span className="bg-green-600">both</span> your homes.
					</h1>
				</div>
				<div className="aspect-square md:flex-1 w-full box-border py-4 px-4 ">
					<div className="bg-green-600 h-full rounded-[40px]"></div>
				</div>
			</div>
			<div className="flex flex-col text-center my-4">
				<h2 className="my-8">
					Helping you find solutions Across All <span className="bg-purple-600">Sectors</span> and all <span className="bg-green-600">Buildings</span>
				</h2>
				<h3 className="text-left my-2">Set Up Your Profile</h3>
				<h4 className="text-left my-2 text-white-400">Select Home</h4>
			</div>
			<div className="flex flex-col sm:flex-row gap-[20px]">
				<HomeCard svg="add" color="bg-green-500" name="VT" description="Large family homes" />
				<HomeCard svg="add" color="bg-yellow-500" name="VT" description="Large family homes" />
				<HomeCard svg="add" color="bg-purple-500" name="VT" description="Large family homes" />
			</div>
		</main>
	);
}
