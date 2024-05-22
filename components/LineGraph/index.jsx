import CostGraph from "./costGraph";
import ROIGraph from "./roiGraph";

const shortenNum = (num) => {
    if(num < 1000) return `${num}`;
    else {
        return `${Math.round(num / 1000)}K`;
    }
}


const LineGraph = {
    CostGraph,
    ROIGraph
};

export {
    LineGraph as default,
    shortenNum
}