import React, { useState } from 'react'
import { data } from '../config/constants';
import Labels from './Labels';
import Products from './Products';

import SearchBar from './SearchBar';

const Table = () => {
    const [search, setSearch] = useState('');
    const [stock, setStock] = useState(false);
    const labels = ['Name', 'Price'];

    const filtered = data?.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase()) && (stock ? item.stocked : true)
    ));

    const categories = Array.from(new Set(filtered.map(item => item.category)));
    console.log(search.toLowerCase())

    return (
        <div>
            <SearchBar
                search={search}
                setSearch={setSearch}
                stock={stock}
                setStock={setStock}
            />
            <div className='d-flex flex-column rounded shadow bg-white p-2 mt-5'>
                <Labels labels={labels} />
                {
                    categories?.map((category, index) => (
                        <Products
                            key={index}
                            title={category}
                            data={filtered?.filter(item => item.category == category)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Table