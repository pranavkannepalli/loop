import Icon from "../Icon";
import BudgetSelector from "../BudgetSelector";
import Button from "../Button";
import HometypeCheckbox from "../HomeTypeCheckbox";
import RebatesCheckbox from "../RebatesCheckbox";
import StateCheckbox from "../StateCheckbox";

export function FilterModal({ setOpen }) {
	return (
		<div className="fixed top-0 left-0 w-full bg-white-600 bg-opacity-25 h-full backdrop-blur-sm flex flex-row items-center justify-center z-10">
			<div className="flex flex-col items-start justify-center bg-white-100 rounded-[20px] p-[40px] gap-[40px]">
				<div className="w-full flex flex-row justify-between items-center">
					<h3>Select Filters</h3>
					<Button type="secondary" className="!p-0" onClick={(e) => setOpen(false)}>
						<Icon name="remove" className="text-white-600" />
					</Button>
				</div>
				<div className="flex flex-col gap-[10px]">
					<h4 className="text-white-400">Select Budget</h4>
					<BudgetSelector />
				</div>
				<div className="grid grid-cols-1 md:flex-row gap-[10px] md:grid-cols-3 w-full">
					<div className="flex flex-col gap-[10px]">
						<h4 className="text-white-400">Select Home:</h4>
						<HometypeCheckbox />
					</div>
					<div className="flex flex-col gap-[10px]">
						<h4 className="text-white-400">Select Rebates:</h4>
						<RebatesCheckbox />
					</div>
					<div className="flex flex-col gap-[10px]">
						<h4 className="text-white-400">Select State:</h4>
						<StateCheckbox />
					</div>
				</div>
			</div>
		</div>
	);
}
