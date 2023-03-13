import React, {useState} from 'react'

const Pagination = ({data, loadData, limit, page, setPage}) => {

  const onNextPage = () => {
    if(data?.length < limit) return;
    setPage(page + 1);
    loadData(page + 1)
  }

  const onPreviousPage = () => {
    if(page == 1) return;
    setPage(page - 1);
    loadData(page - 1)
  }

  return (
    <div className='d-flex justify-content-end align-items-center gap-3'>
      <button 
        className='btn btn-outline-success' 
        onClick={onPreviousPage}
        disabled={page == 1}
      >{'<'}</button>
      <span className='text-secondary'>{page}</span>
      <button 
        className='btn btn-outline-success' 
        onClick={onNextPage}
        disabled={data?.length < limit}
      >{'>'}</button>
    </div>
  )
}

export default Pagination