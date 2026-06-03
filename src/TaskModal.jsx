import React, {useEffect, useRef, useState} from "react";

function TaskModal({isOpen, onClose, onAdd}) {
    const titleInputRef = useRef(null);
    const [formData, setFormData] = useState({title: '', amount: '', category: 'Dev', status: 'В обработке'});

    // для автоматического фокуса при открытии
    useEffect(() => {
        if(isOpen && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [isOpen]);
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.amount) return;
        onAdd({
            ...formData,
            id: Date.now(),
            amount: Number(formData.amount),
            date: new Date().toISOString().split('T')[0]
        });
        setFormData({title: '', amount: '', category: 'Dev', status: 'В обработке'});
        onClose();
    };

    const modalStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '20px',
        width: '400px'
    };

    return (
        <div style={modalStyle}>
            <div style={formStyle}>
                <h3>Новая запись</h3>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <input
                        ref={titleInputRef}
                        type="text"
                        placeholder="Название задачи"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                    <input
                        type="number"
                        placeholder="Сумма"
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                    <select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        <option value='Finance'>Finance</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Dev'>Dev</option>
                        <option value='HR'>HR</option>
                        <option value='Sales'>Sales</option>
                    </select>
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                        <option value='Выполнено'>Выполнено</option>
                        <option value='В обработке'>В обработке</option>
                        <option value='Отклонено'>Отклонено</option>
                    </select>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button onClick={onClose}>Отмена</button>
                        <button type="submit">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default TaskModal;