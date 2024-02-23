"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import TextInput from "../TextInput";

export default function BudgetSelector() {
    const [min, changeMin] = useState(0);
    const minPos = useMotionValue(0);
    const maxPos = useMotionValue(100);
    const barWidth = useMotionValue(120);
    const [totalWidth, changeTotalWidth] = useState(100);
    const [max, changeMax] = useState(100000 * maxPos.get() / totalWidth);
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        const updateWidth = () => {
            let newWidth = inputRef.current ? inputRef.current.offsetWidth - 40: 100
            changeTotalWidth(newWidth);
            changeMax(100000 * maxPos.get() / newWidth)
        
        }
        window.addEventListener("resize", updateWidth);

        updateWidth();
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, []);

    useMotionValueEvent(maxPos, "change", () => {
        barWidth.set(maxPos.get() - minPos.get() + 20);
        changeMax(() => 100000 * maxPos.get() / totalWidth)

    })

    useMotionValueEvent(minPos, "change", () => {
        barWidth.set(maxPos.get() - minPos.get() + 20);
        changeMin(() => 100000 * minPos.get() / totalWidth)
    })

    return (
        <div className="flex-1" ref={inputRef} >
            <div className="relative h-[20px] flex">
                <div  className="absolute top-[50%] h-[3px] w-full bg-white-300 rounded-[3px]" />
                <motion.div style={{ left: minPos, width: barWidth }} className={`z-10 absolute  top-[50%] h-[3px] bg-yellow-600 rounded-[3px]`} /> 
                <motion.div 
                    style={{ x: minPos }}  
                    whileDrag={{ scale: 1.3}} 
                    dragElastic={false} 
                    dragConstraints={{ left: 0, right: maxPos.get()}} 
                    drag="x" 
                    dragMomentum={false} 
                    onDragEnd={() => changeMin(() => 100000 * minPos.get() / totalWidth)}
                    className="z-10 w-[20px] h-[20px] border border-[3px] border-yellow-600 bg-white-200 rounded-[10px]"
                />
                <motion.div 
                    style={{ x: maxPos }}
                    whileDrag={{ scale: 1.3}} 
                    dragElastic={false} 
                    dragConstraints={{ left: minPos.get(), right: totalWidth}} 
                    drag="x" 
                    dragMomentum={false} 
                    onDragEnd={() => changeMax(() => 100000 * maxPos.get() / totalWidth)}
                    className="z-10 w-[20px] h-[20px] border border-[3px] border-yellow-600 bg-white-200 rounded-[10px]"
                />
            </div>
            <div className="flex-1 flex justify-between mt-1">
                <p className="caption text-white-400 ">$0</p>
                <p className="caption text-white-400">$100k</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <TextInput value={Math.round(min)} max={max} type="number" onChange={(e) => {
                    changeMin(e.target.value);
                    minPos.set(e.target.value * totalWidth / 100000);
                }}/>
                <p className="button min-w-[50px] text-center">TO</p>
                <TextInput value={Math.round(max)} onChange={e => {
                    changeMax(e.target.value);
                    maxPos.set(e.target.value * totalWidth / 100000);
                }} />
            </div>
        </div>
    )

}