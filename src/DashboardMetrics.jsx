import React, {useMemo} from "react";

function DashboardMetrics({filteredData}) {
    const metrics = useMemo(() => {
        console.log('начало фильтрации');
        if (filteredData.length === 0) {
            return {totalAmount: 0, avgAmount: 0, successRate: 0};
        }
        const totalAmount = filteredData.reduce((sum, item) => sum + item.amount, 0);
        const avgAmount = Math.round(totalAmount/filteredData.length);
        const completedCount = filteredData.filter(item => item.status === 'Выполнено').length;
        const successRate = Math.round((completedCount/filteredData.length)*100);

        return {totalAmount, avgAmount, successRate};
    }, [filteredData]);

    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <div style={{border: '1px solid #666'}}>
                <h3>Общая сумма</h3>
                <p>{metrics.totalAmount.toLocaleString()} руб.</p>
            </div>
            <div style={{border: '1px solid #666'}}>
                <h3>Средний чек</h3>
                <p>{metrics.avgAmount.toLocaleString()} руб.</p>
            </div>
            <div style={{border: '1px solid #666'}}>
                <h3>Процент выполнения</h3>
                <p>{metrics.successRate}%</p>
            </div>
        </div>
    );
}

export default DashboardMetrics;