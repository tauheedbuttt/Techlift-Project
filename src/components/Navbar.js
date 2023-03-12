import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';

import useAuth from '../features/auth/useAuth';
import FormModal from './FormModal';

const Navbar = () => {
  const location = useLocation();

  const {token} = useSelector(state => state.auth);
  const {onLogout, onUpdateProfilePhoto} = useAuth();

  // states
  const [show, setShow] = useState();
  const [image, setImage] = useState()

  const fields = [
    {
      value: image,
      setValue: (value) => setImage(value),
      required: true,
      type: "file",
    },
  ];

  const pages = [
    {title: 'Home', to: '/home'},
    {title: 'History', to: '/history'},
    {title: 'Contact Us', to: '/contact'},
    {title: 'About Us', to: '/about'},
  ]

  return (
    <div className='navbar-container d-flex w-100 align-items-end justify-content-between ps-5 pe-5 pt-4 gap-5'>
      {/* Title */}
      <div style={{flex:1}} className='d-flex'>
        <span className='navbar-title'>Junbo AI</span>
      </div>
      {/* Pages */}
      <div className='d-flex gap-5'>
        {
          pages?.map((item,index) => (
            <Link 
              key={index}
              to={item.to} 
              className={`navbar-pages pb-2 ${item.to == location.pathname ? 'navbar-selected' : ''}`}
            >
              {item.title}
            </Link>
          ))
        }
      </div>
      {/* Profile */}
      <div className='d-flex pb-2 gap-4'>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={ <img className='navbar-profile' src={token?.imageURL} />}
          menuVariant="dark"
        >
          <NavDropdown.Item href='/chat'>Chat</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>setShow(true)}>Upload Image</NavDropdown.Item>
          <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
      <FormModal
        show={show}
        fields={fields}
        title={'Upload Image'}
        handleClose={() => setShow(false)}
        submit={() => onUpdateProfilePhoto(image)
          .then(()=>setImage(undefined))
          .catch(()=>setImage(undefined))
        }
      />
    </div>
  )
}

export default Navbar