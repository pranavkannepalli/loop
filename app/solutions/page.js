import TextInput from "@/components/TextInput";
import { StateSelector } from "@/components/Dropdown";
import Button from "@/components/Button";
import SectorFilters from "@/components/SectorFilters";
import ResultsText from "@/components/SectorFilters/resultsText";
import BasicList from "@/components/SectorFilters/basicList";
import Filter from "@/components/Filter";

export default function Solutions() {
	return (
		<div className="layout !mt-[125px] flex flex-col">
			<div className="flex flex-row gap-[20px] mb-[20px]">
				<TextInput suffix={<StateSelector />} size="large" placeholder="FIND A SOLUTION" />
				<Button>Search</Button>
			</div>
			<SectorFilters />
			<div className="flex flex-row justify-between items-center">
				<ResultsText />
				<div className="flex flex-row gap-[5px]">
					<Filter />
					<div className="py-[12px] px-[16px] rounded-[8px] border border-white-300 flex items-center justify-center">
						<StateSelector />
					</div>
				</div>
			</div>
			<div className="mt-[20px]">
				<BasicList />
			</div>
		</div>
	);
}
