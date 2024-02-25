"use client";

import SectorFilters from ".";
import SolutionCard from "../SolutionCard";
import { useSectorFilters } from "./index";

const solutions = [
  {
    alt: "Solar Panels on a Independent Home",
    gov: "$1K",
    utility: "$5K",
    price: "~$18K",
    setup: 3,
    image: "/solutions/solar_panel.jpg",
    title: "Solar Panels",
  },
  {
    alt: "Solar Panels on a Independent Home",
    gov: "$1K",
    utility: "$5K",
    price: "~$18K",
    setup: 3,
    image: "/solutions/solar_panel.jpg",
    title: "Solar Panels",
  },
  {
    alt: "Solar Panels on a Independent Home",
    gov: "$1K",
    utility: "$5K",
    price: "~$18K",
    setup: 3,
    image: "/solutions/solar_panel.jpg",
    title: "Solar Panels",
  },
  {
    alt: "Solar Panels on a Independent Home",
    gov: "$1K",
    utility: "$5K",
    price: "~$18K",
    setup: 3,
    image: "/solutions/solar_panel.jpg",
    title: "Solar Panels",
  },
];

export default function BasicList() {
  const [filters, changeFilters] = useSectorFilters();
  return (
    <>
      <SectorFilters filters={filters} changeFilters={changeFilters} />
      <div className="flex-1 grid grid-cols-3 gap-[20px]">
        {solutions.map((sol, i) => (
          <SolutionCard {...sol} key={i} />
        ))}
      </div>
    </>
  );
}
