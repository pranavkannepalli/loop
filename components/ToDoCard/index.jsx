"use client";

import { useContext, useState } from "react";
import Icon from "../Icon";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "@/hooks/classnames";
import LoopContext from "../LoopContext";

export default function ToDoCard({ name, tasks, index }) {
    const [open, toggleOpen] = useState(false);
    const { setStep } = useContext(LoopContext);

    let completed = 0;
    tasks.forEach((task) => {
        if (task.isCompleted) completed++;
    });
    return (
        <motion.div initial={{
            x: 500
        }} animate={{ x: 0 }} exit={{ x:500, opacity: 0, transition: {
            delay: 0.5
        } }} className="bg-white-100 flex flex-col gap-[20px] border border-white-300 rounded-[8px] p-[20px]">
            <div className="flex items-center justify-between" onClick={() => toggleOpen(!open)}>
                <h6>{name}</h6>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={open ? { rotate: 180 } : { rotate: 0 }}
                >
                    <Icon name="down" />
                </motion.div>
            </div>
            <div className="relative h-[4px] rounded-full bg-white-300">
                <div
                    style={{
                        left: 0,
                        width: (10 + 90 * completed/tasks.length)+"%"
                    }}
                    className={classNames("transition-all duration-200 top-0 z-10 absolute h-[4px] rounded-full", completed == 0 ? "bg-error" : (completed == tasks.length ? "bg-correct" : "bg-yellow-600"))}
                />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0}}
                        animate={{ opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="flex flex-col gap-[10px]">
                        {tasks.map((task, i) => (
                            <ToDoItem
                                name={task.header}
                                status={task.isCompleted}
                                changeStatus={(val) => {
                                    setStep(index, i, val);
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const ToDoItem = ({ name, status, changeStatus = () => {} }) => (
    <div className="flex items-center gap-[10px]" onClick={() => changeStatus(!status)}>
        <button

            className={classNames(
                "*:transition-all *:duration-200 w-[24px] h-[24px] border flex items-center justify-center rounded-full text-white-100 hover:text-white-400 ",
                status
                    ? "bg-white-600 border-white-600"
                    : "bg-white-100 border-white-400 "
            )}
        >
            <Icon name="check" size={16} />
        </button>
        <p className={status ? "line-through" : undefined}>{name}</p>
    </div>
);
