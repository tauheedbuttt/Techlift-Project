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
            <div className='container-fluid'>
                <div className='row mt-5 d-flex justify-content-between'>
                    <div className='col-12 col-lg-4 col-xl-4 p-5 rounded bg-white shadow' style={{height: 'max-content'}}>
                        <Form fields={fields} />
                        <SubmitButton
                            title={isUpdate ? 'Mark Exit' : 'New Entry'}
                            color={'primary w-100'}
                            loading={tollAddLoading}
                            onClick={() => (!isUpdate ? onNewToll(data) : onExitToll(data)).then(() => setData({ numberPlate: '', entryPoint: '', day: new Date() }))}
                        />
                    </div>
                    <div className='col-12 col-lg-7 col-xl-7 p-5 rounded shadow'>
                        <Table onEdit={(item) => setData({ ...item, day: new Date(item.day) })} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toll