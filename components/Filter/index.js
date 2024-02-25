"use client";

import Button from "../Button";
import { useState } from "react";
import { FilterModal } from "./filtermodal";

export default function Filter() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button className="py-[12px] px-[16px] rounded-[8px] border border-white-300 !text-white-600" type="secondary" onClick={() => setOpen(true)}>
				Filter
			</Button>
			{open && <FilterModal setOpen={setOpen} />}
		</>
	);
}
