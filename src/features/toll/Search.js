import React, { useEffect, useState } from 'react'

const Search = ({ search, setSearch, onSearch }) => {
    const [isSearched, setIsSearched] = useState(false);

    useEffect(()=>{
        if(!search && isSearched) onReset();
    },[search]);

    const onReset = () => {
        setSearch('');
        onSearch('');
        setIsSearched(false)
    }

    return (
        <div className='d-flex gap-2 mb-2'>
            <input
                value={search}
                className='form-control'
                placeholder='Enter Number Plate'
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={onSearch}
            />
            {isSearched ? <button className='btn btn-outline-success' onClick={onReset}>Clear</button> : null}
            <button className='btn btn-success' onClick={()=>{
                onSearch(search);
                setIsSearched(true);
            }}>Search</button>
        </div>
    )
}

export default Search