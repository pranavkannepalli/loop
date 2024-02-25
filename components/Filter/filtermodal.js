import Icon from "../Icon";
import BudgetSelector from "../BudgetSelector";
import Button from "../Button";

export function FilterModal({ setOpen }) {
	return (
		<div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm flex flex-row items-center justify-center z-10">
			<div className="flex flex-col items-center justify-center bg-white-100 rounded-[20px] p-[20px] gap-[20px]">
				<div className="w-full flex flex-row justify-between items-center">
					<h3>Select Filters</h3>
					<Button type="secondary" className="!p-0" onClick={() => setOpen(false)}>
						<Icon name="remove" className="text-white-600" />
					</Button>
				</div>
				<BudgetSelector />
			</div>
		</div>
	);
}
