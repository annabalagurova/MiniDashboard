import React from "react";

function FilterPanel({filters, setFilters, onOpenModal}) {
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev,[name]:value}));
    };
    return (
        <div style={{display: 'flex', gap: '15px'}}>
            <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleChange}
            />
            <select name="category" value={filters.category} onChange={handleChange}>
                <option value=''>Все</option>
                <option value='Finance'>Finance</option>
                <option value='Marketing'>Marketing</option>
                <option value='Dev'>Dev</option>
                <option value='HR'>HR</option>
                <option value='Sales'>Sales</option>
            </select>
            <select name="status" value={filters.status} onChange={handleChange}>
                <option value=''>Все</option>
                <option value='Выполнено'>Выполнено</option>
                <option value='В обработке'>В обработке</option>
                <option value='Отклонено'>Отклонено</option>
            </select>
            <button onClick={onOpenModal}>Добавитьзапись</button>
        </div>
    );
}

export default FilterPanel;