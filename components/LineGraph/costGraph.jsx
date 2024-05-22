import TrendIndicator from "../TrendIndicator";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

export default function CostGraph({ datapoints, labelInterval = 8 }) {
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
    console.log(polygon);
    const graphColor = datapoints[datapoints.length - 1][1] - datapoints[datapoints.length - 2][1] < 0 ? "#48BB78" : "#F56565";
    return (
        <div style={{ aspectRatio: "5/3" }} className="flex flex-col bg-white-600 p-[20px] rounded-[20px]">
            <h6 className="text-white-300">Historical Prices</h6>
            <div className="flex items-center gap-[20px]">
                <h4 className="text-white-100">$18,000</h4>
                <TrendIndicator past={datapoints[datapoints.length - 2][1]} present={datapoints[datapoints.length - 1][1]} />
            </div>
            <div  className="flex-1 flex flex-col mt-[12px] items-stretch">
                <div className="flex-1 relative flex items-stretch">
                    <div id="axis label" className="flex flex-1 flex-col justify-between">
                        {verticalNumbersToRender.map(num => (
                            <div key={num} className="flex gap-[10px] items-center">
                                <p className="caption text-right text-white-300 w-[50px]">${num}</p>
                                <div className="flex-1 border-t border-t-white-300 border-dashed" />
                            </div>
                        ))}
                    </div>
                    <motion.div initial={{ scaleY: 0}} animate={{
                        scaleY: isInView ? 1:0,
                        transition: {
                            duration: 0.5
                        }
                    }} className="absolute w-full h-full box-border bottom-0 pl-[60px]">
                        <div className="relative w-full h-full">
                            <svg className="absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polyline points={polyline} style={{ stroke: graphColor, fill: "none", strokeWidth: "1"}}/>
                            </svg>
                            <div className="absolute w-full h-full" style={{
                                clipPath: `polygon(${polygon})`,
                                background: `linear-gradient(to bottom, ${graphColor}, transparent)`,
                                opacity: 0.3
                            }} />
                        </div>
                    </motion.div>
                </div>
                <div ref={ref}  className="flex ml-[50px]">
                    {yearsToRender.map(year => <p key={year} className="flex-1 text-center caption text-white-300">{year}</p>)}
                </div>
            </div>
        </div>
    )
}

const getMaxVertical = (datapoints) => {
    let max = datapoints[0][1];
    for (let i = 0; i < datapoints.length; i++) {
        if (datapoints[i][1] > max) {
            max = datapoints[i][1];
        }
    }

    let order = 0;
    while (max >= 10) {
        max /= 10;
        order++;
    }
    max = Math.ceil(max);
    max *= Math.pow(10, order);
    return max;
}