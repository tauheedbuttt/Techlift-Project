import React from 'react'

import logo from '../../assets/images/logo.png';

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { onLogout } = useAuth(0)
    return (
        <div className='d-flex justify-content-between align-items-center shadow bg-white ps-3 pe-3 pt-2 pb-2'>
            <div className='d-flex justify-content-between align-items-center gap-5'>
                <img src={logo} style={{ width: 80, height: 80 }} />
                <h2 className='page-title'>Toll Tracker</h2>
            </div>
            <button className='btn btn-outline-danger btn ' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Header