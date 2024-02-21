import HomeCard from "@/components/HomeCard";
import Button from "@/components/Button";
import { StateSelector } from "@/components/Dropdown";

// TODO: make selectors for price, priorities, and type
// TODO: responsify
// TODO: fill in with actual data/symbols
// TODO: use React Context to store data
// TODO: use motion divs to add animations (even at the cost of render time)

export default function Home() {
	return (
		<main className="layout">
			<div className="flex flex-col md:flex-row h-[100vh] justify-center items-center my-4">
				<div className="md:flex-1">
					<h1 className="leading-none">
						Helping you help <span className="bg-green-600">both</span> your homes.
						<div className="flex flex-row gap-[20px]">
							<div className="flex flex-row items-center justify-center border-white-300 border-solid border hover:border-white-400 hover:text-white-400 focus:text-white-600 focus:border-green-700 active:border-white-400 active:text-white-600 focus:invalid:border-error focus:invalid:text-white-600 !rounded-[16px] bg-white-200">
								<input className="!rounded-[16px] !border-none bg-white-200" placeholder="Find a Solution" />
								<StateSelector />
							</div>
							<Button>Search</Button>
						</div>
					</h1>
				</div>
				<div className="h-1/2 md:h-[80%] md:flex-1 w-full box-border py-4 px-4 ">
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
				<HomeCard svg="add" color="bg-green-500" borderColor="border-green-700" name="Apartment" description="Large and small complexes" />
				<HomeCard svg="add" color="bg-yellow-500" borderColor="border-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
				<HomeCard svg="add" color="bg-purple-500" borderColor="border-purple-700" name="Individual Home" description="Individual homes and town homes" />
			</div>
		</main>
	);
}
