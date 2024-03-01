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

let text = "Helping both your homes.";
export default function HomeText() {
    return (
        <motion.h1 variants={headingVariants}  initial="initial" animate="animate" className="overflow-hidden max-w-[1280x] text-center mx-auto" >
            {text.split(" ").map((word, i ) => (
                    <span key={i}className={classNames(word, "inline-block overflow-hidden relative")}>
                        {word == "both" && <motion.div key={word + i} initial={{ right: "100%" }} animate={{ right: "8%" }} transition={{ delay: 1.6}} className="absolute left-0 h-full bg-green-600" /> }
                        {word.split("").map((letter, k) => (
                            <motion.span key={word + k} variants={letterVariants} className="relative inline-block">{letter}</motion.span> 
                        ))}
                        &nbsp;
                    </span>
            ))}
        </motion.h1>
    )
}