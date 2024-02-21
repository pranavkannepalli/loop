import Icon from "../Icon";

export default function HomeCard({ svg, color, name, description }) {
	return (
		<div className={`flex flex-col gap-[5px] flex-1 p-[20px] sm:p-[40px] items-center justify-center ${color} rounded-[20px] aspect-[4/3]`}>
			<Icon name={svg} className="w-3/4 h-3/4 aspect-square" />
			<h6 className="text-center">{name}</h6>
			<p className="text-center caption">{description}</p>
		</div>
	);
}
