import React from 'react'

const Products = ({ data, title }) => {
    return (
        <div className='mt-2'>
            <span className='d-flex justify-content-center'><strong>{title}</strong></span>
            {
                data?.map((item, index) => (
                    <div className='d-flex justify-content-between'>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Products