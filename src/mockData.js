const categories = [
    'Finance', 
    'Marketing', 
    'Dev',
    'HR',
    'Sales'
];

const statuses = [
    'Выполнено',
    'В обработке',
    'Отклонено'
];

export const generateMockData = () => {
    const data = [];
    const startDate = new Date(2026, 0, 1);

    for (let i=1; i<=1100; i++) {
        const randomCategory = categories[Math.floor(Math.random()*categories.length)];
        const randomStatus = statuses[Math.floor(Math.random()*statuses.length)];
        const randomAmount = Math.floor(Math.random()*10000)+500;
        const date = new Date(startDate.getTime()+Math.random()*(30*24*69*60*1000));
        data.push({
            id: i,
            title: `Задача №${i}. ${randomCategory}`,
            amount: randomAmount,
            category: randomCategory,
            status: randomStatus,
            date: date.toISOString().split('T')[0]
        });
    }
    return data;
}