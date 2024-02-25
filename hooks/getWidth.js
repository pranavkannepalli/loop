"use client";

const { useLayoutEffect, useState, useRef } = require("react");

const getWidth = () => {
    const ref = useRef();
    const [width, changeWidth] = useState(0);

    useLayoutEffect(() => {
        const updateWidth = () => {
            changeWidth(ref.current ? ref.current.scrollWidth: 0);
        }

        window.addEventListener("resize", updateWidth);

        updateWidth();
        return  () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, []);

    return [ref, width];
}

export default getWidth;