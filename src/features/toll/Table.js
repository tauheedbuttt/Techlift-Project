import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import useToll from '../../hooks/useToll'

import Loader from '../../components/Loader';
import Search from './Search';
import Toll from './Toll';
import Row from './Row';
import Pagination from './Pagination';

const Table = ({ onEdit }) => {
    const { tolls } = useSelector(state => state.toll);
    const { tollLoading, fetchTolls, onDeleteToll } = useToll();

    const [search, setSearch] = useState('');

    const labels = ['#', 'ID', 'Number Plate', 'Entry Point', 'Exit Point', 'Distance', 'Day', 'Cost (PKR)', 'Action'];
    const limit = 10;

    useEffect(() => {
        fetchTolls({});
    }, [])

    return (
        <div>
            {/* Search */}
            <Search
                search={search}
                setSearch={setSearch}
                onSearch={(value) => fetchTolls({ numberPlate: value })}
            />
            {/* Table */}
            <div className='table-responsive h-100'>
                <table className='table table-striped table-bordered col-sm-12'>
                    <thead>
                        <tr className='table-success' >{labels.map((label, index) => (
                            <th key={index}>{label}</th>
                        ))}</tr>
                    </thead>
                    <tbody>
                        <Loader loading={tollLoading} color={'green'}>
                            {
                                tolls?.length == 0 
                                ? <tr>
                                    <td colspan={999} style={{textAlign: 'center'}}>No Items</td>
                                </tr> 
                                : tolls
                                    .map((toll, index) => index >= limit ? null : (
                                        <Row
                                            key={index}
                                            index={index+1}
                                            toll={toll}
                                            onDelete={onDeleteToll}
                                            onEdit={onEdit}
                                        />
                                    ))
                            }
                        </Loader>
                    </tbody>
                </table>
                <Pagination
                    data={tolls}
                    loadData={(page) => fetchTolls({page, limit, numberPlate: search})}
                    limit={limit}
                />
            </div>
        </div>
    )
}

export default Table