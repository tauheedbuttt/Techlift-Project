import React, { useState } from 'react'
import { data } from './config/constants';

import SearchBar from './components/SearchBar';
import Table from './components/Table'

const App = () => {
  // States
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);

  // Constatns
  const labels = ['Name', 'Price'];
  const filtered = data?.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase()) && (stock ? item.stocked : true)
  ));

  return (
    <div className='container d-flex flex-column pt-5 pb-5 gap-5'>
      <SearchBar search={search} setSearch={setSearch} stock={stock} setStock={setStock} />
      <Table labels={labels} data={filtered} />
    </div>
  )
}

export default App