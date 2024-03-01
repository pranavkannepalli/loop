"use client";

import { useContext } from "react";
import LoopContext from "../LoopContext";
import TextInput from "../TextInput";

export default function BudgetSelector() {
    const {
        userData: { low, high },
		changeLow,
		changeHigh
    } = useContext(LoopContext);

    return (
        <div className="relative flex flex-col gap-[10px]">
            <div className="h-[8px] relative bg-white-300 overflow-hidden rounded-full">
                <div
                    style={{
                        left: (low * 100) / 100000 + "%",
                        right: 100 - (high * 100) / 100000 + "%",
                    }}
                    className="*:transition-all *:duration-200 absolute top-0 bottom-0 bg-yellow-600"
                />
            </div>
            <div className="flex justify-between">
                <p className="caption text-white-400">$0</p>
                <p className="caption text-white-400">$100k</p>
            </div>
            <div className="flex gap-[10px] items-center">
                <TextInput
                    max={high}
                    min={0}
                    value={low}
                    type="number"
                    onChange={(e) => changeLow(parseInt(e.target.value))}
                />
                <p>TO</p>
                <TextInput
                    min={low}
                    max={100000}
                    value={high}
                    type="number"
                    onChange={(e) => changeHigh(parseInt(e.target.value))}
                />
            </div>
        </div>
    );
}
