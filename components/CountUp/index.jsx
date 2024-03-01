import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform, useInView } from "framer-motion";
import classNames from "@/hooks/classnames";

export default function CountUp({ children, number, className }) {
  const count = useMotionValue("0");
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    let animation;
    if(isInView) {

      animation = animate(count, number, {
        duration: 1,
        ease: "easeOut",
      });
    }
    return animation?.stop;
  }, [isInView]);

  return (
    <div ref={ref} className={classNames("flex inline items-baseline gap-[10px] flex-wrap", className)}>
      <motion.h4>{rounded}</motion.h4>
      {children}
    </div>
  );
}