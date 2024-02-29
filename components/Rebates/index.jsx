export default function Rebate({ dollars, label }) {
	return (
		<div className="bg-white-100 p-[20px] rounded-[8px] flex flex-col w-full border border-white-300">
			<h6>${dollars}</h6>
			<p>{label}</p>
		</div>
	);
}
