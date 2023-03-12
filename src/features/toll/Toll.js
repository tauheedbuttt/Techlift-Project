import React from 'react'

import Header from './Header';
import Table from './Table';

const Toll = () => {
    return (
        <div className='p-5' style={{ height: '100vh' }}>
            <Header />
            <div className='container-fluid d-flex justify-content-between mt-5'>
                <Table />
            </div>
        </div>
    )
}

export default Toll