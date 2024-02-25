"use client";

import classNames from "@/hooks/classnames";
import { motion } from "framer-motion"

let letterVariants = {
    initial: {
        y: 70
    },
    animate: {
        y: 0,
        transition: {
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9]
        }
    }
}
 
let headingVariants = {
    initial: {
        y: 0
    },
    animate: {
        y: 0,
        transition: {
            staggerChildren: .02,
            delayChildren: .6,
        }
    }
}

let text = "Helping you help both your homes.";
export default function HomeText() {
    return (
        <motion.h1 variants={headingVariants}  initial="initial" animate="animate" className="overflow-hidden w-[80%] max-w-[1280x] text-center mx-auto" >
            {text.split(" ").map((word, i ) => (
                <>
                    <span key={i}className={classNames(word, "inline-block overflow-hidden relative")}>
                        {word == "both" && <motion.div key={word + i} initial={{ right: "100%" }} animate={{ right: 0 }} transition={{ delay: 1.6}} className="absolute left-0 h-full bg-green-600" /> }
                        {word.split("").map((letter, i) => (
                            <motion.span key={word + i} variants={letterVariants} className="relative inline-block">{letter}</motion.span> 
                        ))}
                    </span>
                    {" "}
                </>
            ))}
        </motion.h1>
    )
}