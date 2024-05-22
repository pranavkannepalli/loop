"use client";

import {useContext} from "react";
import FeaturesContext from "@/components/FeaturesContext";
import classNames from "@/hooks/classnames";

const FeatureCard = ({children, id}) => {
    const {inView} = useContext(FeaturesContext);

    return (
        <div className={classNames("absolute inset-0 w-full h-full transition-all", inView == id ? "opacity-100" : "opacity-0")}>{children}</div>
    )
}

export default FeatureCard;