import Icon from "../Icon";

export default function HomeCard({ svg, color, name, description }) {
	return (
		<div className={`flex flex-col gap-[5px] flex-1 p-[10px] sm:p-[20px] items-center justify-center ${color} rounded-[20px] aspect-[4/3]`}>
			<Icon name={svg} className="w-1/2 h-1/2 aspect-square" />
			<h4 className="text-center">{name}</h4>
			<p className="text-center caption">{description}</p>
		</div>
	);
}
