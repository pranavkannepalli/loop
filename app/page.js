import HomeCard from "@/components/HomeCard";
import Button from "@/components/Button";
import { StateSelector } from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import BudgetSelector from "@/components/BudgetSelector";

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
							<TextInput 
								suffix={
									<StateSelector />
								}
								size="large"
								placeholder="FIND A SOLUTION"
							/>
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
				<HomeCard svg="single-family" color="bg-green-500" borderColor="outline-green-700" name="Apartment" description="Large and small complexes" />
				<HomeCard svg="multi-family" color="bg-yellow-500" borderColor="outline-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
				<HomeCard svg="apartment" color="bg-purple-500" borderColor="outline-purple-700" name="Individual Home" description="Individual homes and town homes" />
			</div>
			<div className="my-4">
				<h4 className="text-left my-2 text-white-400">Select State</h4>
				<TextInput hasInput={false} suffix={<StateSelector />}/>
			</div>
			<div className="my-4">
				<h4 className="text-left my-2 text-white-400">Select Budget</h4>
				<BudgetSelector />
			</div>
		</main>
	);
}
