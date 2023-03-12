import React, { useState } from 'react'

import Header from './Header';
import Table from './Table';
import Form from '../../components/Form';

const Toll = () => {
    const [data, setData] = useState({
        numberPlate: '',
        entryPoint: '',
        day: ''
    });

    const fields = [
        {
            value: data.numberPlate,
            setValue: (value) => setData({ ...data, numberPlate: value }),
            label: 'Number Plate',
            placeholder: 'LLL-NNNN',
            type: 'text'
        },
        {
            value: data.entryPoint,
            setValue: (value) => setData({ ...data, entryPoint: value }),
            label: 'Entry Point',
            placeholder: 'Rawalpindi etc.',
            type: 'text'
        },
        {
            value: data.day,
            setValue: (value) => setData({ ...data, day: value }),
            label: 'Daye',
            placeholder: 'DD/MM/YYYY',
            type: 'text'
        },
    ]

    return (
        <div className='p-5'>
            <Header />
            <div className='container-fluid d-flex justify-content-between mt-5 gap-4'>
                <div className='col-lg-8 col-md-12 col-sm-12 p-5 shadow'>
                    <Table />
                </div>
                <div className='col-lg-4 p-5 bg-white shadow'>
                    <Form fields={fields} />
                    <button className='btn btn-success w-100'>Add New Entry</button>
                </div>
            </div>
        </div>
    )
}

export default Toll