import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import auth from '../../assets/images/auth.png';
import google from '../../assets/svgs/google.svg';
import facebook from '../../assets/svgs/facebook.svg';

import useAuth from '../../hooks/useAuth';

import Form from '../../components/Form';
import SubmitButton from '../../components/SubmitButton';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const Signup = () => {
  const {
    loading,
    socialLoading,
    onGoogleLogin,
    onFacebookLogin,
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
    <Loader loading={socialLoading} overlay>
      <div className='d-flex flex-row' style={{ height: '100vh' }}>
        <div className='d-flex' style={{ flex: 1 }}>
          <img src={auth} style={{ width: '100%', objectFit: 'cover' }} />
        </div>
        <div className='d-flex flex-col align-items-center' style={{ flex: 2 }}>
          <div className='form-container' style={{ marginLeft: 115 }}>
            {/* Title */}
            <h1 className='auth-title'>Create Account</h1>
            <p className='auth-subtitle'>Sign up to use Jumbo AI</p>
            {/* Form */}
            <div><Form fields={fields} /></div>
            {/* Forgot */}
            <div className='d-flex align-items-center w-100 mb-5 gap-2'>
              <input class="form-check-input" type="checkbox" value={terms} id="flexCheckDefault" onChange={() => setTerms(!terms)} />
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
            {/* Border Line */}
            <div className='d-flex align-items-center mt-4 mb-4'>
              <div className='full-width-border' style={{ flex: 1 }} />
              <div style={{ flex: 0.5, textAlign: 'center' }}>Or Continue With</div>
              <div className='full-width-border' style={{ flex: 1 }} />
            </div>
            {/* Socials */}
            <div className='d-flex align-items-center gap-3'>
              <Button
                button={{
                  title: 'Google',
                  icon: google,
                  onClick: onGoogleLogin,
                  disabled: !terms,
                  disableMessage: 'Kindly agree to terms and conditions'
                }}
                className={'button-full-border'}
                style={{ width: '100%' }}
              />
              <Button
                button={{
                  title: 'Facebook',
                  icon: facebook,
                  onClick: onFacebookLogin,
                  disabled: !terms,
                  disableMessage: 'Kindly agree to terms and conditions'
                }}
                className={'button-full-border'}
                style={{ width: '100%' }}
              />
            </div>
            {/* Navigation */}
            <div className='auth-navigation d-flex justify-content-center'>
              <span>Already have an account?</span> &nbsp;&nbsp;
              <Link to={'/login'} className='link'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </Loader>
  )
}

export default Signup