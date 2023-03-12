import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import auth from '../../assets/images/auth.png';

import useAuth from '../../hooks/useAuth';

import Form from '../../components/Form';
import SubmitButton from '../../components/SubmitButton';

const Login = () => {
  const {
    loading,
    onLogin,
  } = useAuth()

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const fields = [
    {
      label: 'Email Address',
      value: data.email,
      type: 'email',
      setValue: (value) => setData({ ...data, email: value }),
      placeholder: 'loremipsum@gmail.com'
    },
    {
      label: 'Password',
      value: data.password,
      type: 'password',
      setValue: (value) => setData({ ...data, password: value }),
      placeholder: 'Enter your password'
    },
  ]

  return (
    <div className='d-flex flex-row' style={{ height: '100vh' }}>
      <div className='d-flex' style={{ flex: 1 }}>
        <img src={auth} style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <div className='d-flex flex-col align-items-center' style={{ flex: 2 }}>
        <div className='form-container' style={{ marginLeft: 115 }}>
          {/* Title */}
          <h1 className='auth-title'>Hi, Welcome</h1>
          <p className='auth-subtitle'>Sign in to use Toll Tracker</p>
          {/* Form */}
          <div><Form fields={fields} /></div>
          {/* Submit */}
          <SubmitButton
            onClick={() => onLogin(data.email, data.password)}
            title={'Login'}
            color={'primary'}
            loading={loading}
            style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}
          />
          {/* Navigation */}
          <div className='auth-navigation d-flex justify-content-center mt-5'>
            <span>Don't have an account?</span> &nbsp;&nbsp;
            <Link to={'/signup'} className='link'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login