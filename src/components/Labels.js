import React from 'react'

const Labels = ({ labels }) => {
    return (
        <div className='d-flex align-items-center justify-content-around mt-2'>
            {labels?.map((label, index) => <span key={index}><strong>{label}</strong></span>)}
        </div>
    )
}

export default Labels