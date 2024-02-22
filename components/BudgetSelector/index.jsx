"use client";

import { useLayoutEffect, useRef, useState } from "react";


export default function BudgetSelector() {
    const [min, changeMin] = useState(30000);
    const [max, changeMax] = useState(60000);
    const [totalWidth, changeTotalWidth] = useState(0);
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        const updateWidth = () => {
            changeTotalWidth(inputRef.current ? inputRef.current.offsetWidth - 40: 0);
            console.log(inputRef.current ? inputRef.current.offsetWidth : -1);
        }
        window.addEventListener("resize", updateWidth);

        changeTotalWidth(inputRef.current ? inputRef.current.offsetWidth : 0);
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, []);

    return (
        <div ref={inputRef} className="flex-1">
            <div className="relative flex-1 h-[3px] bg-white-300">
                <div style={{ left: Math.round(totalWidth * min/100000) }} className="z-20 absolute translate-y-[-50%]  w-[16px] h-[16px] bg-white-200 border border-2 border-yellow-600 rounded-[10px]"/>
                <div style={{ left: Math.round(totalWidth * max/100000) }} className="z-20 absolute translate-y-[-50%]  w-[16px] h-[16px] bg-white-200 border border-2 border-yellow-600 rounded-[10px]"/>
                <div style={{ left: Math.round(totalWidth * min/100000), right: Math.round(totalWidth * max/100000)}} className="z-10 absolute translate-y-[-50%] h-[3px] bg-yellow-600"/>
            </div>
            <div className="flex-1 flex justify-between mt-1">
                <p className="caption text-white-400 ">$0</p>
                <p className="caption text-white-400">$100k</p>
            </div>
        </div>
    )

}