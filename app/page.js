export default function Home() {
	return (
		<main className="layout">
			<div className="flex flex-row h-[calc(100vh-100px)] items-center my-4">
				<div className="flex-1">
					<h1 className="leading-none">
						Helping you help <span className="bg-green-600">both</span> your homes.
					</h1>
				</div>
				<div className="flex-1 h-full box-border py-4 px-4 ">
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
		</main>
	);
}
