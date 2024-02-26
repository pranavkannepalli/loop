import HomeCard from "@/components/HomeCard";
import Button from "@/components/Button";
import { StateSelector } from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import BudgetSelector from "@/components/BudgetSelector";
import PrioritiesReorder from "@/components/PrioritiesReorder";
import BasicList from "@/components/SectorFilters/basicList";
import HomeText from "@/components/HomeText";
import HomeCarousel from "@/components/HomeSolutionCard/carousel";
import TagLine from "@/components/Tagline";
import SectorFilters from "@/components/SectorFilters";
import SeeMore from "@/components/SeeMoreOverlay";
import Search from "@/components/Search";
import SolutionsButton from "@/components/SolutionsButton";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col box-border h-[100vh] items-center my-4">
				<div className="flex flex-col gap-[10px] flex-1 justify-center items-stretch layout">
					<HomeText />
					<div className="flex flex-row gap-[20px]">
						<Search />
						<SolutionsButton>Search</SolutionsButton>
					</div>
				</div>
				<HomeCarousel />
			</section>
			<section className=" layout flex flex-col text-center my-4">
				<TagLine value="Helping you find solutions Across All Sectors and all buildings" />
				<h3 className="text-left my-2">Set Up Your Profile</h3>
				<h4 className="text-left my-2 text-white-400">Select Home</h4>
			</section>
			<div className=" layout flex flex-col sm:flex-row gap-[20px]">
				<HomeCard svg="apartment" color="bg-green-500" borderColor="outline-green-700" name="Apartment" description="Large and small complexes" />
				<HomeCard svg="multi-family" color="bg-yellow-500" borderColor="outline-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
				<HomeCard svg="single-family" color="bg-purple-500" borderColor="outline-purple-700" name="Individual Home" description="Individual homes and town homes" />
			</div>
			<div className="layout !mt-6 flex flex-col md:flex-row gap-[20px]">
				<div className="flex-1 flex flex-col gap-[32px]">
					<div className="flex flex-col gap-[20px]">
						<h4 className="text-left text-white-400">Select State</h4>
						<TextInput hasInput={false} suffix={<StateSelector />} />
					</div>
					<div>
						<h4 className="text-left my-2 text-white-400">Select Budget</h4>
						<BudgetSelector />
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-[20px]">
					<h4 className="text-left text-white-400">Priorities</h4>
					<PrioritiesReorder />
				</div>
			</div>
			<div className="!pt-6 layout">
				<h4 className="pb-6">View your Recommendations</h4>
				<SectorFilters />
				<BasicList nosearch slice size={6} />
			</div>
			<SeeMore />
		</main>
	);
}
