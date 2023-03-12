import React from 'react'
import Labels from './Labels';
import Products from './Products';

const Table = ({ labels, data }) => {
    const categories = Array.from(new Set(data.map(item => item.category)));
    return (
        <div>
            <div className='d-flex flex-column rounded shadow bg-white p-4'>
                <Labels labels={labels} />
                {
                    categories?.map((category, index) => (
                        <Products
                            key={index}
                            title={category}
                            data={data?.filter(item => item.category == category)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Table