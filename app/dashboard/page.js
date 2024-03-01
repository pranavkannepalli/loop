"use client";

import Icon from "@/components/Icon";
import LoopContext from "@/components/LoopContext";
import ToDoCard from "@/components/ToDoCard";
import UserTags from "@/components/UserTags";
import WatchlistCard from "@/components/WatchListCard";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

// TODO: Implement the solutions list
// TODO: implement the watchlist
// TODO: connect to react context

export default function Dashboard() {
    const { watchlist, removeWatchlist } = useContext(LoopContext);
    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-[20px] layout box-border !pt-[120px]">
            <div className="flex-[2] flex flex-col gap-[40px]">
                <div className=" w-full flex flex-row bg-white-100 border-white-300 border p-[20px] rounded-[20px]">
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="caption text-white-400">Hello</div>
                            <h4>Achintya</h4>
                        </div>
                        <div>
                            <UserTags />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-[20px]">
                        <div className="p-[20px] rounded-[10px] bg-blue-500">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-[5px] items-baseline">
                                    <h3>6,000</h3>
                                    <h6>Gallons</h6>
                                </div>
                                <div className="text-blue-700">
                                    <Icon name="water" size={40} />
                                </div>
                            </div>
                            <p>
                                Of water saved through solutions implemented via
                                Loop.
                            </p>
                        </div>
                        <div className="p-[20px] rounded-[10px] bg-yellow-500">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-[5px] items-baseline">
                                    <h3>6,000</h3>
                                    <h6>Tons</h6>
                                </div>
                                <div className="text-yellow-700">
                                    <Icon name="factory" size={40} />
                                </div>
                            </div>
                            <p>
                                Of CO2 saved from being emitted into the
                                atmosphere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h4>Your Watchlist</h4>
                    <div className="flex gap-[20px] overflow-x-auto">
                        {watchlist.map((sol, i) => {
                            let trend =
                                sol.costGraph[sol.costGraph.length - 1][1];
                            trend -= sol.costGraph[sol.costGraph.length - 2][1];
                            trend =
                                (trend * 100) /
                                sol.costGraph[sol.costGraph.length - 2][1];
                            trend = Math.round(trend * 100) / 100;
                            return (
                                <WatchlistCard
                                    img={sol.image}
                                    alt={sol.alt}
                                    key={i}
                                    name={sol.title}
                                    price={sol.price}
                                    trend={trend}
                                    remove={() => removeWatchlist(sol)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-[10px]">
                <div className="caption text-white-400">TO-DO List</div>
                <AnimatePresence>
                    {watchlist.map((item, i) => {
                        let completed = 0;
                        item.steps.forEach((step) => {
                            if (step.isCompleted) completed++;
                        });
                        return (
                            completed != item.steps.length && (
                                <ToDoCard
                                    key={i}
                                    name={item.title + " Installation"}
                                    tasks={item.steps}
                                    index={i}
                                />
                            )
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
