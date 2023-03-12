import React from 'react'

const Search = ({ search, setSearch, onSearch }) => {
    return (
        <div className='d-flex gap-2 mb-2'>
            <input
                value={search}
                className='form-control'
                placeholder='Enter Number Plate'
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={onSearch}
            />
            <button className='btn btn-success' onClick={onSearch}>Search</button>
        </div>
    )
}

export default Search