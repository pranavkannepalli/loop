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
		description: "For each sustainable solution, learn about its historical pricing, return on investment, environmental impact, installation steps, and potential rebates to see if it fits you.",
		pic: "/about/Details.png",
	},
	{
		title: "Start Implementing",
		description: "Add a solution to your information dashboard, where you can keep track of your implementation progress, or add it to your watchlist so you know when the time is right.",
		pic: "/about/Dashboard.png",
	},
];

export default function Home() {
	return (
		<main>
			<section className="flex layout flex-col items-center !mt-[200px] !mb-[40px] gap-[40px]">
				<div className="max-w-[900px]">
					<HomeText />
				</div>
				<form className="flex items-stretch gap-[16px]">
					<TextInput placeholder="Tell us what the problem is" />
					<Button>Go</Button>
				</form>
			</section>
			<HomeCarousel />
			<section className=" layout flex flex-col text-center my-4">
				<TagLine value="helping you find solutions across all sectors and all buildings" />
			</section>
			<FeaturesContextProvider>
				<section className="hidden layout md:flex w-full items-start gap-20">
					<div className="w-full py-[30vh]">
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
							{features.map((feature) => (
								<FeatureCard key={feature.pic} id={feature.title}>
									<Image alt="Demonstration Graphic" fill className="object-contain" src={feature.pic} />
								</FeatureCard>
							))}
						</div>
					</div>
				</section>
				<section className="flex layout md:hidden w-full items-start gap-20">
					<div className="w-full pb-[20vh]">
						<ul>
							{features.map((feature, index) => (
								<li key={"feature" + index} className="flex flex-col">
									<div className=" *:object-contain relative w-full h-auto ">
										<Image alt="Demonstration Graphic" src={feature.pic} className="w-full h-auto" width={500} height={500} />
									</div>

									<FeatureTitle title={feature.title} description={feature.description} margin={"med"} />
								</li>
							))}
						</ul>
					</div>
				</section>
			</FeaturesContextProvider>
		</main>
	);
}
