import React, { useState } from 'react'

import Header from './Header';
import Table from './Table';
import Form from '../../components/Form';
import useToll from '../../hooks/useToll';
import SubmitButton from '../../components/SubmitButton';

const Toll = () => {
    const [data, setData] = useState({
        numberPlate: '',
        entryPoint: '',
        exitPoint: '',
        day: new Date()
    });

    const isUpdate = data ? !!data?._id : false

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
        isUpdate
            ? {
                value: data.exitPoint ? data.exitPoint : '',
                setValue: (value) => setData({ ...data, exitPoint: value }),
                label: 'Exit Point',
                placeholder: 'Islamabd etc.',
                type: 'text'
            }
            : {
                value: data.day.toISOString().split('T')[0],
                setValue: (value) => setData({ ...data, day: new Date(value) }),
                label: 'Date',
                placeholder: 'DD/MM/YYYY',
                type: 'date'
            },
        isUpdate
            ? {
                value: data.distance ? data.distance : '',
                setValue: (value) => setData({ ...data, distance: value }),
                label: 'Distance (KM)',
                placeholder: '123 etc.',
                type: 'number'
            } : null
    ].filter(item => item);

    const { onNewToll, onExitToll, tollAddLoading } = useToll();

    return (
        <div className='p-5'>
            <Header />
            <div className='container-fluid d-flex justify-content-between mt-5 gap-4'>
                <div className='col-lg-8 col-md-12 col-sm-12 p-5 shadow'>
                    <Table onEdit={(item) => setData({ ...item, day: new Date(item.day) })} />
                </div>
                <div className='col-lg-4 p-5 bg-white shadow'>
                    <Form fields={fields} />
                    <SubmitButton
                        title={isUpdate ? 'Mark Exit' : 'New Entry'}
                        color={'primary w-100'}
                        loading={tollAddLoading}
                        onClick={() => (!isUpdate ? onNewToll(data) : onExitToll(data)).then(() => setData({ numberPlate: '', entryPoint: '', day: new Date() }))}
                    />
                </div>
            </div>
        </div>
    )
}

export default Toll