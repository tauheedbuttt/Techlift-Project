import React, { useState } from 'react'
import { data } from '../config/constants';
import Labels from './Labels';

import SearchBar from './SearchBar';

const Table = () => {
    const [search, setSearch] = useState('');
    const labels = ['Name', 'Price'];

    const filtered = data?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <SearchBar value={search} setValue={setSearch} />
            <Labels labels={labels} />
        </div>
    )
}

export default Table