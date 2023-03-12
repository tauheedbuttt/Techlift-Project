import React from 'react'

const SearchBar = ({ value, setValue }) => {
    return (
        <div>
            <input
                className='form-control'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={'text'}
                placeholder={'Search...'}
            />
            <div className='d-flex align-items-center gap-2 mt-2'>
                <input
                    className='form-check-input mt-0'
                    type={'checkbox'}
                />
                <span className='text-success'>Only Show Products in Stock</span>
            </div>
        </div>
    )
}

export default SearchBar