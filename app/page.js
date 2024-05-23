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
			<section className="flex layout flex-col items-center !pt-[200px] !mb-[40px] gap-[40px]">
				<div className="max-w-[900px]">
					<HomeText />
				</div>
				<div className="flex items-stretch gap-[16px]">
					<TextInput
						placeholder="Tell us what the problem is"
						suffix={<StateSelector />}
					/>
					<Button>Go</Button>
				</div>
			</section>
			<HomeCarousel />
			<section className=" layout flex flex-col text-center my-4">
				<TagLine value="helping you find solutions across all sectors and all buildings" />
			</section>
			<FeaturesContextProvider>
				<section className="layout flex w-full items-start gap-20">
					<div className="w-full py-[40vh]">
						<ul>
							{features.map((feature, index) => (
								<li key={"feature" + index}>
									<FeatureTitle title={feature.title} description={feature.description} />
								</li>
							))}
						</ul>
					</div>
					<div className="sticky top-0 flex h-screen w-full items-center">
						<div className="aspect-square w-full">
							{features.map((feature) => (<FeatureCard key={feature.pic} id={feature.title}><Image fill className="object-contain" src={feature.pic} /></FeatureCard>))}
						</div>
					</div>
				</section>
			</FeaturesContextProvider>
		</main>
	);
}