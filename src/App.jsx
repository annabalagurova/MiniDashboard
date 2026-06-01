import React, { useState, useMemo, useEffect } from "react";
import { generateMockData } from "./mockData";
import DashboardMetrics from "./DashboardMetrics";

function App() {
    const [rawData, setRawData] = useState(() => generateMockData());
    return (
        <>
            <DashboardMetrics filteredData={rawData} />
        </>
    )
}

export default App;