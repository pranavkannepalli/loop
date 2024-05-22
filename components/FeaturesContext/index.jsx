"use client";

import { createContext, useState, useEffect } from "react";

const FeaturesContext = createContext(null);

function FeaturesContextProvider({ children }) {
	const [inView, setInView] = useState(null);

	const data = { inView, setInView };

	return <FeaturesContext.Provider value={data}>{children}</FeaturesContext.Provider>;
}

export { FeaturesContext as default, FeaturesContextProvider };
