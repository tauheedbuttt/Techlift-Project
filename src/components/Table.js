import React, { useState } from 'react'
import { data } from '../config/constants';
import Labels from './Labels';

import SearchBar from './SearchBar';

const Table = () => {
    const [search, setSearch] = useState('');
    const [stock, setStock] = useState(false);
    const labels = ['Name', 'Price'];

    const filtered = data?.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
            stock ? item.stocked : true
    ));

    const categories = new Set(filtered.map(item => item.category));

    return (
        <div>
            <SearchBar
                search={search}
                setSearch={setSearch}
                stock={stock}
                setStock={setStock}
            />
            <Labels labels={labels} />
        </div>
    )
}

export default Table