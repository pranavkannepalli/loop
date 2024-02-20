export default function Home() {
	return (
		<main className="my-2">
			<div className="layout flex flex-row h-[calc(100vh-100px)] items-center">
				<div className="flex-1">
					<h1 className="leading-none">
						Helping you help <span className="bg-green-600">both</span> your homes.
					</h1>
				</div>
				<div className="flex-1 h-full">
					<div className="bg-green-600 h-full my-4 mx-4 rounded-[40px]"></div>
				</div>
			</div>
		</main>
	);
}
