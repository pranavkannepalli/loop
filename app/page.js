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
import FeatureTitle from "@/components/FeatureTitle";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import { FeaturesContextProvider } from "@/components/FeaturesContext";

const features = [
	{
		title: "Find Green Solutions",
		description: "Explore our wide list of solutions, choosing the ones best for you based on cost, difficulty to implement, and rebates/tax credits you can receive upon implementing them.",
		pic: "/about/Solutions.png",
	},
	{
		title: "See If They Fit",
		description: "Explore our wide list of solutions, choosing the ones best for you based on cost, difficulty to implement, and rebates/tax credits you can receive upon implementing them.",
		pic: "/about/Details.png",
	},
	{
		title: "Start Implementing",
		description: "Explore our wide list of solutions, choosing the ones best for you based on cost, difficulty to implement, and rebates/tax credits you can receive upon implementing them.",
		pic: "/about/Dashboard.png",
	}
]


export default function Home() {
	return (
		<main>
			<section className="flex flex-col box-border items-center justify-end py-4">
				<div className="flex flex-col gap-[10px] flex-1 box-border !pt-[80px] justify-center gap-[50px] layout mb-6">
					<HomeText />
					<div className="flex flex-col gap-[20px] md:flex-row">
						<Search />
						<SolutionsButton>Search</SolutionsButton>
					</div>
				</div>
				<HomeCarousel />
			</section>
			<section className=" layout flex flex-col text-center my-4">
				<TagLine value="Helping you find solutions Across All Sectors and all buildings" />
				
			</section>
			<FeaturesContextProvider>
				<section className="layout flex w-full items-start gap-20">
					<div className="w-full py-[40vh]">
						<ul>
							{features.map((feature, index) => (
								<li key={"feature" + index}>
									<FeatureTitle title={feature.title} description={feature.description}/>
								</li>
							))}
						</ul>
					</div>
					<div className="sticky top-0 flex h-screen w-full items-center">
						<div className="aspect-square w-full">
							{features.map((feature) => (<FeatureCard key={feature.pic} id={feature.title}><Image fill className="object-contain" src={feature.pic}/></FeatureCard>))}
						</div>
					</div>
				</section>
			</FeaturesContextProvider>
		</main>
	);
}

/*
	<h3 className="text-left my-2">Set Up Your Profile</h3>
	<h4 className="text-left my-2 text-white-400">Select Home</h4>

	<div className=" layout flex flex-col md:flex-row gap-[20px]">
		<HomeCard svg="apartment" color="bg-green-500" borderColor="outline-green-700" name="Apartment" description="Large and small complexes" />
		<HomeCard svg="multi-family" color="bg-yellow-500" borderColor="outline-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
		<HomeCard svg="single-family" color="bg-purple-500" borderColor="outline-purple-700" name="Individual Home" description="Individual homes and town homes" />
	</div>
	<div className="layout !mt-6 flex flex-col md:flex-row gap-[20px]">
		<div className="flex-1 flex flex-col gap-[32px]">
			<div className="flex flex-col gap-[20px]">
				<h4 className="text-left text-white-400">Select State</h4>
				<TextInput hasInput={false} suffix={<StateSelector  expanded />} />
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
		<BasicList slice size={6} />
	</div>
	<SeeMore />

*/