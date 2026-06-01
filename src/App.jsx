import React, { useState, useMemo, useEffect } from "react";
import { generateMockData } from "./mockData";
import DashboardMetrics from "./DashboardMetrics";
import FilterPanel from "./FilterPanel";

function App() {
    const [rawData, setRawData] = useState(() => generateMockData());
    const [filters, setFilters] = useState({search: '', category: '', status: ''});

    const filteredData = useMemo(() => {

    }, [rawData, filters.search, filters.category, filters.status]);

    return (
        <>
            <DashboardMetrics filteredData={rawData} />
        </>
    )
}

export default App;