import { shortenNum, getMaxVertical } from ".";
import {motion, useInView } from "framer-motion"
import { useRef } from "react";
export default function YearGraph({
    datapoints,
    suffix = null,
    prefix = null,
    color,
    title
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    let verticalMax = getMaxVertical(datapoints);
    let verticalNumbersToRender = [];
    for (let i = verticalMax; i >= 0; i -= verticalMax / 5) {
        verticalNumbersToRender.push(i);
    }
    let currentMonth = new Date().getMonth();

    let polygon = "0% 100%,";
    let polyline = "";
    let startYear = datapoints[0][0];
    let plottingPoints = [];
    plottingPoints.push([0, (datapoints[0][1] + datapoints[datapoints.length - 1][1]) / 2]);
    for(let i = 0; i < 12; i++) {
        plottingPoints.push([0.5 + i, datapoints[i][1]]);
    }
    plottingPoints.push([12, (datapoints[0][1] + datapoints[datapoints.length - 1][1]) / 2]);
    console.log(plottingPoints);
    for (let i = 0; i < plottingPoints.length; i++) {
        let y = Math.round(100 * (verticalMax - plottingPoints[i][1]) / verticalMax);
        let x = Math.round(100 * plottingPoints[i][0] / 12);
        polygon += ` ${x}% ${y}%,`;
        polyline += `${x},${y} `;
    }
    polygon += "100% 100%";
    console.log(polygon);
    let [cx, cy] = [(0.5 + currentMonth) * 100 / 12, (verticalMax -  datapoints[currentMonth][1]) * 100 / verticalMax];
    return (
        <div ref={ref} style={{ aspectRatio: "5/3" }} className="flex flex-col bg-white-100 border border-white-300 p-[20px] rounded-[20px]">
            <h6 className="text-white-400">{title}</h6>
            <h3 className="mb-[12px]">{prefix}{datapoints[currentMonth][1]} {suffix} </h3>
            <div className="flex-1 flex flex-col items-stretch">
            <div className="flex-1 relative flex items-stretch">
                    <div id="axis label" className="flex flex-1 flex-col justify-between">
                        {verticalNumbersToRender.map(num => (
                            <div key={num} className="flex gap-[10px] items-center">
                                <p className="caption text-right text-white-400 w-[50px]">{shortenNum(num)}</p>
                                <div className="flex-1 border-t border-t-[#000] opacity-20 border-dashed" />
                            </div>
                        ))}
                    </div>
                    <motion.div initial={{ scaleY: 0}} animate={{
                        scaleY: isInView ? 1:0,
                        transition: {
                            duration: 0.5
                        }
                    }} className="absolute w-full h-full box-border bottom-0 py-[5px] pl-[60px]">
                        <div className="relative w-full h-full">
                        <div className="absolute w-[10px] h-[10px] translate-y-[-5px] rounded-full" style={{ backgroundColor: color, top: `${cy}%`, left: `${cx}%`}} />

                            <div className="absolute left-0 top-0 bottom-0 border-l border-l-[#000] opacity-20 border-dashed" />
                            <svg className="absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polyline points={polyline} style={{ stroke: color, fill: "none", strokeWidth: "0.5px"}}/>
                            </svg>
                            <div className="absolute w-full h-full" style={{
                                clipPath: `polygon(${polygon})`,
                                background: `linear-gradient(to bottom, ${color}, transparent)`,
                                opacity: 0.3
                            }} />
                        </div>
                    </motion.div>
                </div>
                <div className="flex  ml-[60px]">
                    {datapoints.map(d => (
                        <p style={{ fontSize: "12px", fontWeight: "bold"}} className="flex-1 text-center text-white-400 overflow-hidden" key={d[0]}>{d[0]}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

