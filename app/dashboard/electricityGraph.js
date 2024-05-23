import LineGraph from "@/components/LineGraph";

export default function ElectricityGraph({ data }) {
    let points = [];
    for(let i = 0; i < data.length; i++) {
        points.push([data[i].x, data[i].y]);
    }
    return (
        <LineGraph.YearGraph datapoints={points} color="#7D9D9C" title="Estimated Electricity Usage" suffix="KWH" />
    )
}