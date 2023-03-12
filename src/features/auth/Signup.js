import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import auth from '../../assets/images/auth.png';

import useAuth from '../../hooks/useAuth';

import Form from '../../components/Form';
import SubmitButton from '../../components/SubmitButton';

const Signup = () => {
  const {
    loading,
    onSignup,
  } = useAuth()

  const [terms, setTerms] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const fields = [
    {
      data: [
        {
          label: 'Name',
          value: data.name,
          type: 'text',
          setValue: (value) => setData({ ...data, name: value }),
          placeholder: 'John Doe'
        },
        {
          label: 'Email Address',
          value: data.email,
          type: 'email',
          setValue: (value) => setData({ ...data, email: value }),
          placeholder: 'loremipsum@gmail.com'
        },
      ]
    },
    {
      label: 'Password',
      value: data.password,
      type: 'password',
      setValue: (value) => setData({ ...data, password: value }),
      placeholder: 'Enter your password'
    },
    {
      label: 'Confirm Password',
      value: data.confirmPassword,
      type: 'password',
      setValue: (value) => setData({ ...data, confirmPassword: value }),
      placeholder: 'Enter Password Again'
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
          <h1 className='auth-title'>Create Account</h1>
          <p className='auth-subtitle'>Sign up to use Toll Tracker</p>
          {/* Form */}
          <div><Form fields={fields} /></div>
          {/* Terms */}
          <div className='d-flex align-items-center w-100 mb-5 gap-2'>
            <input className="form-check-input" type="checkbox" value={terms} onChange={() => setTerms(!terms)} />
            <span>I agree to all terms and conditions</span>
          </div>
          {/* Submit */}
          <SubmitButton
            onClick={() => onSignup(data)}
            title={'Signup'}
            color={'primary'}
            disabled={!terms}
            loading={loading}
            style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}
          />
          {/* Navigation */}
          <div className='auth-navigation d-flex justify-content-center'>
            <span>Already have an account?</span> &nbsp;&nbsp;
            <Link to={'/login'} className='link'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup