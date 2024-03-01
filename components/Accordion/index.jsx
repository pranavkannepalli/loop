"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../Icon";
import classNames from "@/hooks/classnames";

const Accordion = ({ number, question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-white-100 p-[20px] rounded-[8px] cursor-pointer flex flex-col gap-[20px] w-full border border-white-300"
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.div
                key="question"
                className="flex flex-row justify-between items-center"
            >
                <motion.h6 className="text-gray-800 font-bold flex flex-row gap-[10px] items-center">
                    <p
                        className={classNames(
                            isOpen
                                ? "bg-white-600 text-white-100"
                                : "bg-white-200 text-white-400",
                            "caption flex rounded-full w-[20px] h-[20px] items-center justify-center"
                        )}
                    >
                        {number}
                    </p>
                    {question}
                </motion.h6>
                <motion.div
                    className={classNames(
                        isOpen ? "rotate-180" : "rotate-0",
                        "*:transition-all *:duration-500 transition-all"
                    )}
                >
                    <Icon name="down" />
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Accordion;
