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
    <div className='d-flex flex-row'>
      <div class="row w-100">
        <div className='auth-image col-lg-4'>
          <img src={auth} style={{ width: '100%', objectFit: 'cover', height:'100vh'}} />
        </div>
        <div className='col-lg-8 col-md-12 d-flex flex-col justify-content-center align-items-center ' style={{height: '100vh'}}>
          <div className='form-container ms-5 me-5'>
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
    </div>
  )
}

export default Login