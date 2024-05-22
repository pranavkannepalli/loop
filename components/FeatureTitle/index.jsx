"use client";

import {useRef, useEffect, useContext} from "react";
import {useInView} from "framer-motion";
import FeaturesContext from "@/components/FeaturesContext";

const FeatureTitle = ({title, description}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});

    const {inView, setInView} = useContext(FeaturesContext);

    useEffect(() => {
        if(isInView) setInView(title);
        //if(!isInView && inView == title) setInView(null);
    }, [isInView, title, setInView]);
    
    console.log(isInView, title);

    return (
        <div ref={ref} className={`py-20 text-white-300 transition-colors ${isInView && "text-white-600"}`}>
            <h2>{title}</h2>
            <p className={!isInView && "opacity-0"}>{description}</p>
        </div>
    );
}

export default FeatureTitle;