"use client";

import classNames from "@/hooks/classnames";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";

export default function CostGraph({ points, t = new Date().getFullYear() }) {
    const ref = useRef(null);
    const isinView = useInView(ref, {once: true});

    const getMinMax = (points) => {
        let min = points[0];
        let max = points[0];
        for(let i = 0; i < points.length; i++) {
            if(points[i][1] < min[1]) {
                min = points[i];
            }
            if(points[i][1] > max[1]) {
                max = points[i];
            }
        }
        return [min, max];
    }

    const getRanges = (points) => {
        let min = points[0][1];
        let max = points[0][1];
        for(let i = 0; i < points.length; i++) {
            if(points[i][1] < min) {
                min = points[i][1];
            }
            if(points[i][1] > max) {
                max = points[i][1];
            }
        }
        return [points[points.length - 1][0] - points[0][0], max- min];
    }
    
    const [min, max] = getMinMax(points);
    const start = points[0];
    const end = points[points.length - 1];
    
    const [horizontalRange, verticalRange] = getRanges(points);
    const step = horizontalRange / 5;

    const getPolygon = (points) => {
        let polygon = "0 100%, ";
        for(let i = 0; i < points.length; i++) {
            let x = (points[i][0] - start[0]) *100 / horizontalRange;
            let y = 100 - (points[i][1] - min[1]) * 100/ verticalRange;
            polygon += x+"% " + y + "%, ";
        }
        polygon += "100% 100%";
        return polygon;
    }
    
    const getCurrent = (points, time) => {
        for(let i = 0; i < points.length - 1; i++) {
            if(points[i][0] < time && points[i+1][0] >= time) {
                let dy = points[i+1][1] - points[i][1];
                let dx = points[i+1][0] - points[i][0];
                let perc = (time - points[i][0]) / dx;
                return [time, points[i][1] + perc * dy];
            }
        }
        return [0, 0];
    }

    let barFillColor = end[1] - start[1] <= 0 ? "bg-correct" : "bg-error";
    let barGradient = end[1] - start[1] <= 0 ? "from-correct" : "from-error";
    let barOutline = end[1] - start[1] <= 0 ? "border-correct" : "border-error";

    const polygon = getPolygon(points);
    const target = getCurrent(points, t);
    return (
        <div ref={ref} style={{ aspectRatio: "5/3"}} className="flex-1 flex flex-col overflow-hidden bg-white-600 rounded-[20px]">
        <div className="px-[20px] py-[20px] pb-[40px]">
            <p className="caption text-white-400">Unit Cost</p>
            <div className="flex">
                <h4 className="inline text-white-100">$</h4><CountUp number={target[1]} className="text-white-100"/>
                </div>
        </div>
        <div className="points relative flex-1">
            <motion.div
                initial={{ scaleY: 0 }}
                animate={isinView ? {scaleY: 1, transition: {delay: 0.5, duration: 0.5}} : {scaleY: 0}}
                id="graphLine" 
                className={classNames("absolute w-full h-full", barFillColor)}
                style={{
                    clipPath: `polygon(${polygon})`,
                    transformOrigin: "bottom",
                    top: "-2px"
                }}
            />
            <motion.div
                id="graphBackground"
                initial={{ scaleY: 0 }}
                animate={isinView ? {scaleY: 1, transition: {delay: 0.5, duration: 0.5}} : {scaleY: 0}}
                className="absolute w-full h-full bg-white-600"
                style={{
                    clipPath: `polygon(${polygon})`,
                    transformOrigin: "bottom"
                }}
            />
            <motion.div
                id="graph"                 
                initial={{ scaleY: 0 }}
                animate={isinView ? {scaleY: 1, transition: {delay: 0.5, duration: 0.5}} : {scaleY: 0}}
                className={classNames("absolute w-full h-full bg-gradient-to-b from", barGradient)}
                style={{
                    clipPath: `polygon(${polygon})`,
                    transformOrigin: "bottom",
                    opacity: 0.5
                }}
            />

            <div 
                id="maxValueLine"
                className="absolute w-full flex gap[10px] translate-y-[50%] text-white-300 items-center"
                style={{
                    bottom: ((max[1] - min[1]) * 100 / verticalRange)+"%",
                    left: 0,
                }}
            >
                <div className="border-t-2 border-t-white-400 border-dashed flex-1" />
                <p className="caption px-[20px]">${max[1].toLocaleString()}</p>
                <div className="border-t-2 border-t-white-400 border-dashed flex-[3]" />
                
            </div>
            
            <div
                id="targetValueLine" 
                className="absolute flex gap[10px] w-full translate-y-[50%] text-white-100 items-center"
                style={{
                    bottom: ((target[1] - min[1]) * 100 / verticalRange)+"%",
                    left: 0,
                }}
            >
                <div className="h-[2px] bg-white-100 flex-1" />
                <p className="caption px-[20px]">${target[1].toLocaleString()}</p>
                <div className="h-[2px] bg-white-100 flex-[7]" />
            </div>
            <div
                id="targetPointVerticalIntersection"
                className="absolute w-[2px] bg-white-100"
                style={{
                    left: ((target[0] - start[0]) * 100 / horizontalRange)+"%",
                    bottom: 0,
                    height: ((target[1] - min[1]) * 100 / verticalRange)+"%"
                }}
            />

            <div
                id="targetPoint" 
                style={{
                    left: ((target[0] - start[0]) * 100 / horizontalRange)+"%",
                    bottom: ((target[1] - min[1]) * 100 / verticalRange)+"%"
                }}
                className={classNames(`absolute box-border bg-white-600 border border-2
                        translate-x-[-50%] translate-y-[50%]
                        w-[20px] h-[20px] rounded-full`, barOutline)}
            />
        </div>
        <div
            id="labels"
            className="border-t border-t-white-300 box-border py-[10px] flex justify-around text-white-200"
        >
            {new Array(4).fill(1).map((_, i) => (
                <p className="caption" key={i}>{start[0] + step*(1.5+i)}</p>
            ))}
        </div>
        </div>
    );
}
