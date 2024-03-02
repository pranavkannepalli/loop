import Link from "next/link";

export default function About({}) {
	return (
		<main>
			<section className="flex flex-col box-border gap-[20px] !mt-[100px] layout">
				<h4>About Us</h4>
				<p>
					To ensure a seamless, fast, and optimized user experience, this website uses Vercel&apos;s NextJS framework, a ReactJS technology as the coding technology. However, the design
					system and brand themes are all original and specially designed with the user&apos;s experience and accessibility in mind.
				</p>
				<div className="flex flex-col">
					<Link href="/CopyrightChecklist.pdf" locale={false} target="_blank">
						Copyright Checklist (Click to open)
					</Link>
					<Link href="/SignedWorkLog.pdf" locale={false} target="_blank">
						Signed Plan of Work Log (Click to open)
					</Link>
				</div>
			</section>
		</main>
	);
}
