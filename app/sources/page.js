import sources from "./sources";

export default function Sources() {
	return (
		<main>
			<section className="flex flex-col box-border items-center mt-[100px]">
				<h4>Sources Page</h4>
				{sources.map((val, index) => (
					<a href={val} key={index}>
						{val}
					</a>
				))}
			</section>
		</main>
	);
}
