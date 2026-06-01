import React, {useState, useMemo} from "react";

// useMemo будет перерасчитывать список только тогда, когда
// меняется сам список или поисковый запрос

function FilterList({ users }) {
    const [query, setQuery] = useState('');
    
    const filteredUsers = useMemo(() => {
        console.log('фильтрация началась');
        return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, users]);

    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => 
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </div>
    );
}

export default FilterList;