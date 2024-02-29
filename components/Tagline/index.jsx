"use client";

import classNames from "@/hooks/classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TagLine({ value }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });
  const words = value.split(" ");
  return (
    <motion.h2 ref={ref} style={{ opacity: scrollYProgress }} className="my-24">
      {words.map((word, i) => {
        let range = [i / words.length, (i + 1) / words.length];
        let highlight = null;
        if (word == "Sectors") {
          highlight = "bg-purple-600";
        } else if (word == "buildings") {
          highlight = "bg-green-600";
        }
        return (
          <>
            <Word
              value={word}
              range={range}
              highlight={highlight}
              progress={scrollYProgress}
              key={i}
            ></Word>{" "}
          </>
        );
      })}
    </motion.h2>
  );
}

function Word({ value, range, highlight, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const scaleX = useTransform(progress, [0, 1],  [0, 1]);

  return (
    <motion.span className="relative">
      {highlight != null && (
        <motion.div
          style={{ scaleX, originX: 0 }}
          className={classNames(
            "absolute z-0 left-0 top-0 w-full h-full",
            highlight
          )}
        />
      )}
      <motion.span style={{ opacity }} className="relative z-10">{value}</motion.span>
    </motion.span>
  );
}
