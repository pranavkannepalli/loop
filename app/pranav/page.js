import Accordion from "@/components/Accordian";
import CostGraph from "@/components/CostGraph";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import PrioritiesReorder from "@/components/PrioritiesReorder";
import ROIGraph from "@/components/ROIGraph";
import TextInput from "@/components/TextInput";

const points = [
	[1985, 30000],
	[1990, 18000],
	[1995, 16000],
	[2000, 13500],
	[2005, 13000],
	[2010, 11500],
	[2015, 10500],
	[2020, 10000],
	[2025, 5000],
];

export default function Pranav() {
	return (
		<div>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h6>Heading 6</h6>
			<p>Paragraph</p>
			<p className="caption">Caption</p>
			<button className="">Button Text</button>
			<br />
			<input placeholder="Input Text" />
			<Icon name="add" className="text-white-600" />
			<Dropdown items={["Hi", "bye", "cya"]} />
			<TextInput prefix={<Icon name="add" size={20} />} suffix={<Dropdown items={["Hi", "bye", "cya"]} />} placeholder="First Name" size="large" />
			<PrioritiesReorder />
			<CostGraph points={points} t={2000} />
			<ROIGraph points={points} t={2000} />
			<Accordion question="Who is your favorite webmaster winner?" answers={["Pranav", "Achintya"]} />
		</div>
	);
}
