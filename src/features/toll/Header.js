import React from 'react'

import logo from '../../assets/images/logo.png';

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { onLogout } = useAuth(0)
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center gap-5'>
                <img src={logo} style={{ width: 100, height: 100 }} />
                <h2 className='text-success'>Toll Tracker</h2>
            </div>
            <button className='btn btn-outline-danger btn-lg ' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Header