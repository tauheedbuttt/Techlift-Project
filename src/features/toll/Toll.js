import React from 'react'

import Header from './Header';
import Table from './Table';

const Toll = () => {
    return (
        <div className='border border-5 border-danger p-5' style={{ height: '100vh' }}>
            <Header />
            <div className='container-fluid d-flex justify-content-between mt-5'>
                <Table />
            </div>
        </div>
    )
}

export default Toll