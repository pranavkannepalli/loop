import Icon from "@/components/Icon";
import UserTags from "@/components/UserTags";

export default function Dashboard() {
	return (
		<div className="layout flex flex-row !mt-[100px] gap-[20px]">
			<div className="flex-[2] w-full flex flex-row bg-white-100 border-white-300 border p-[20px] rounded-[20px]">
				<div className="flex-1 flex flex-col justify-between">
					<div>
						<div className="caption text-white-400">Hello</div>
						<h4>Achintya</h4>
					</div>
					<div>
						<UserTags />
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-[20px]">
					<div className="p-[20px] rounded-[10px] bg-blue-500">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row gap-[5px] items-baseline">
								<h3>6,000</h3>
								<h6>Gallons</h6>
							</div>
							<div className="text-blue-700">
								<Icon name="water" size={40} />
							</div>
						</div>
						<p>Of water saved through solutions implemented via Loop.</p>
					</div>
					<div className="p-[20px] rounded-[10px] bg-yellow-500">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row gap-[5px] items-baseline">
								<h3>6,000</h3>
								<h6>Tons</h6>
							</div>
							<div className="text-yellow-700">
								<Icon name="water" size={40} />
							</div>
						</div>
						<p>Of CO2 saved from being emitted into the atmosphere.</p>
					</div>
				</div>
			</div>
			<div className="flex-1">Hello</div>
		</div>
	);
}
