import Accordion from "@/components/Accordion";
import sources from "./sources";
import Link from "next/link";
export default function Sources() {
	return (
		<main className="min-h-screen">
			<section className="flex flex-col gap-[20px] box-border !pt-[100px] layout">
				<h4>Important Documents</h4>
				<div className="flex flex-col">
					<Link href="/CopyrightChecklist.pdf" locale={false} target="_blank">
						Copyright Checklist (Click to open)
					</Link>
					<Link href="/SignedWorkLog.pdf" locale={false} target="_blank">
						Signed Plan of Work Log (Click to open)
					</Link>
				</div>
				<h4>Sources</h4>
				{sources.map((val, index) => (
					<Accordion number={index + 1} key={index} question={val.name}>
						{val.sources.map((source, i) => (
							<p key={i}>
								{source}
								<br />
							</p>
						))}
					</Accordion>
				))}
			</section>
		</main>
	);
}
