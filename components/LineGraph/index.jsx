import CostGraph from "./costGraph";
import ROIGraph from "./roiGraph";
import YearGraph from "./yearGraph";

const shortenNum = (num) => {
    if(num < 1000) return `${num}`;
    else {
        return `${Math.round(num / 1000)}K`;
    }
}

const getMaxVertical = (datapoints) => {
    let max = datapoints[0][1];
    for (let i = 0; i < datapoints.length; i++) {
        if (datapoints[i][1] > max) {
            max = datapoints[i][1];
        }
    }

    let order = 0;
    while (max >= 10) {
        max /= 10;
        order++;
    }
    if(max * 2 < Math.ceil(max) + Math.floor(max)) {
        max = (Math.ceil(max) + Math.floor(max)) / 2;
    } else {
        max = Math.ceil(max);
    }
    max *= Math.pow(10, order);
    return max;
}

const LineGraph = {
    CostGraph,
    ROIGraph,
    YearGraph
};

export {
    LineGraph as default,
    shortenNum,
    getMaxVertical
}