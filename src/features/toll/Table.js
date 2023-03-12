import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import useToll from '../../hooks/useToll'

import Loader from '../../components/Loader';
import Search from './Search';
import Toll from './Toll';
import Row from './Row';

const Table = ({ onEdit }) => {
    const { tolls } = useSelector(state => state.toll);
    const { tollLoading, fetchTolls, onDeleteToll } = useToll();

    const [search, setSearch] = useState('');

    const labels = ['ID', 'Number Plate', 'Entry Point', 'Exit Point', 'Distance', 'Day', 'Cost (PKR)', 'Action']

    useEffect(() => {
        fetchTolls({});
    }, [])

    return (
        <div>
            {/* Search */}
            <Search
                search={search}
                setSearch={setSearch}
                onSearch={() => fetchTolls({ numberPlate: search })}
            />
            {/* Table */}
            <table className='table table-striped border col-sm-12'>
                <thead>
                    <tr className='table-success' >{labels.map((label, index) => (
                        <th key={index}>{label}</th>
                    ))}</tr>
                </thead>
                <tbody>
                    <Loader loading={tollLoading} color={'green'}>
                        {tolls
                            .map((toll, index) => (
                                <Row
                                    key={index}
                                    toll={toll}
                                    onDelete={onDeleteToll}
                                />
                            ))}
                    </Loader>
                </tbody>
            </table>
        </div>
    )
}

export default Table