import React from 'react';

export const SearchBar = ({ query, setQuery }) => {
    return (
            <input 
                className='mt-3 text-md text-blue-300'
                key="random1"
                maxLength={25}
                value={query}
                placeholder="🔎 Inventory"
                onChange={(e) => setQuery(e.target.value)}
            />
    );
}