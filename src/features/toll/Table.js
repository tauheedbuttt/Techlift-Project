import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import useToll from '../../hooks/useToll'

import Loader from '../../components/Loader';

const Table = ({ onEdit }) => {
    const { tolls } = useSelector(state => state.toll);
    const { tollLoading, fetchTolls, onDeleteToll } = useToll();

    const [search, setSearch] = useState('');

    const labels = ['ID', 'Number Plate', 'Entry Point', 'Exit Point', 'Distance', 'Day', 'Cost (PKR)', 'Action']

    useEffect(() => {
        fetchTolls({});
    }, [])

    const onCopy = (text) => {
        // Create a temporary element to hold the text to copy
        const tempElement = document.createElement('textarea');
        tempElement.value = text;
        tempElement.setAttribute('readonly', '');
        tempElement.style.position = 'absolute';
        tempElement.style.left = '-9999px';
        document.body.appendChild(tempElement);

        // Select the text and copy it to the clipboard
        const selectedText = document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
        tempElement.select();
        document.execCommand('copy');

        // Remove the temporary element
        document.body.removeChild(tempElement);

        // Restore the previous selection
        if (selectedText) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selectedText);
        }
    }

    return (
        <div className='col-lg-8 col-md-12'>
            <div className='d-flex gap-2 mb-2'>
                <input
                    value={search}
                    className='form-control'
                    placeholder='Enter Number Plate'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='btn btn-success' onClick={() => fetchTolls({ numberPlate: search })}>Search</button>
            </div>
            <table className='table table-striped border'>
                <thead>
                    <tr className='table-success' >{labels.map((label, index) => (
                        <th key={index}>{label}</th>
                    ))}</tr>
                </thead>
                <tbody>
                    <Loader loading={tollLoading} color={'green'}>
                        {tolls?.map((toll, index) => (
                            <tr key={index}>
                                <td onClick={() => onCopy(toll._id)}>...{toll._id.substr(toll._id.length - 5)}</td>
                                <td>{toll.numberPlate}</td>
                                <td>{toll.entryPoint}</td>
                                <td>{toll.exitPoint}</td>
                                <td>{toll.distance}</td>
                                <td>{new Date(toll.day).toLocaleDateString('en-GB', {
                                    weekday: 'short',
                                    day: '2-digit',
                                    month: 'short'
                                })}</td>
                                <td>{toll.cost}</td>
                                <td>
                                    <div className="table-actions d-flex align-items-center gap-3 fs-6">
                                        <a
                                            title="View Company Profile"
                                            className="text-primary"
                                            onClick={() => onEdit(toll)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i class="bi bi-pencil"></i>
                                        </a>
                                        <a
                                            title="Delete"
                                            className="text-danger"
                                            onClick={() => onDeleteToll(toll)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className="bi bi-trash-fill"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Loader>
                </tbody>
            </table>
        </div>
    )
}

export default Table