import TrendIndicator from "../TrendIndicator";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { shortenNum, getMaxVertical } from ".";

export default function ROIGraph({ datapoints, labelInterval = 8 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let yearsToRender = [];
    for (let i = datapoints[0][0] + labelInterval; i < datapoints[datapoints.length - 1][0]; i += labelInterval) {
        yearsToRender.push(i);
    }

    let verticalMax = getMaxVertical(datapoints);
    let verticalNumbersToRender = [];
    for (let i = verticalMax; i >= 0; i -= verticalMax / 5) {
        verticalNumbersToRender.push(i);
    }

    let polygon = "0% 100%,";
    let polyline = "";
    let startYear = datapoints[0][0];
    let range = datapoints[datapoints.length - 1][0] - startYear;
    for (let i = 0; i < datapoints.length; i++) {
        let y = Math.round(100 * (verticalMax - datapoints[i][1]) / verticalMax);
        let x = Math.round(100 * (datapoints[i][0] - startYear) / range);
        polygon += ` ${x}% ${y}%,`;
        polyline += `${x},${y} `;
    }
    polygon += "100% 100%";
    let mostRecent = 0;
    let today = new Date();
    for (let i = 0; datapoints[i][0] < today.getFullYear(); i++) {
        mostRecent = i;
    }
    let lastPrice = datapoints[mostRecent][1];
    let nextPrice = datapoints[mostRecent + 1][1];
    let currentPrice = lastPrice + (nextPrice - lastPrice) / 5 * (today.getUTCFullYear() - datapoints[mostRecent][0]);

    let [cx, cy] = [(today.getFullYear() - 1985) * 100 / 40, (verticalMax - currentPrice) * 100 / verticalMax];

    const graphColor = datapoints[datapoints.length - 1][1] - datapoints[0][1] > 0 ? "#48BB78" : "#F56565";
    return (
        <div style={{ aspectRatio: "5/3" }} className="flex flex-col bg-white-100 border border-white-300 p-[20px] !pr-0 rounded-[20px]">
            <h6 className="text-white-400">Return on Investment</h6>
            <div className="flex items-center gap-[20px]">
                <div className="flex items-baseline">
                    <h4 className="text-white-600">${currentPrice.toLocaleString()}</h4>
                    <p className="text-white-600 caption">/year</p>
                </div>
                <TrendIndicator past={datapoints[0][1]} reversed={false} present={datapoints[datapoints.length - 1][1]} />
            </div>
            <div className="flex-1 flex flex-col mt-[12px] items-stretch">
                <div className="flex-1 relative flex items-stretch">
                    <div id="axis label" className="flex flex-1 flex-col justify-between">
                        {verticalNumbersToRender.map(num => (
                            <div key={num} className="flex gap-[10px] items-center">
                                <p className="caption text-right text-white-400 w-[50px]">${shortenNum(num)}</p>
                                <div className="flex-1 border-t border-t-[#000000] opacity-20 border-dashed" />
                            </div>
                        ))}
                    </div>
                    <motion.div initial={{ scaleY: 0 }} animate={{
                        scaleY: isInView ? 1 : 0,
                        transition: {
                            duration: 0.5
                        }
                    }} className="absolute w-full h-full box-border bottom-0 py-[5px] pl-[60px]">
                        <div className="relative w-full h-full">
                        <div className="absolute w-[10px] h-[10px] translate-x-[-50%] translate-y-[-50%] rounded-full" style={{ backgroundColor: graphColor, top: `${cy}%`, left: `${cx}%`}} />
                            <div className="absolute left-0 top-0 bottom-0 border-l border-l-[#000] opacity-20 border-dashed" />

                            <svg className="absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polyline points={polyline} style={{ stroke: graphColor, fill: "none", strokeWidth: "1" }} />
                            </svg>
                            <div className="absolute w-full h-full" style={{
                                clipPath: `polygon(${polygon})`,
                                background: `linear-gradient(to bottom, ${graphColor}, transparent)`,
                                opacity: 0.3
                            }} />
                        </div>
                    </motion.div>
                </div>
                <div ref={ref} className="flex ml-[50px]">
                    {yearsToRender.map(year => <p key={year} className="flex-1 text-center caption text-white-400">{year}</p>)}
                </div>
            </div>
        </div>
    )
}
