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

const Login = () => {
  const {
    loading,
    socialLoading,
    onGoogleLogin,
    onFacebookLogin,
    onLogin,
    onForgot,
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
    <Loader loading={socialLoading} overlay>
      <div className='d-flex flex-row' style={{ height: '100vh' }}>
        <div className='d-flex' style={{ flex: 1 }}>
          <img src={auth} style={{ width: '100%', objectFit: 'cover' }} />
        </div>
        <div className='d-flex flex-col align-items-center' style={{ flex: 2 }}>
          <div className='form-container' style={{ marginLeft: 115 }}>
            {/* Title */}
            <h1 className='auth-title'>Hi, Welcome</h1>
            <p className='auth-subtitle'>Sign in to use Jumbo AI</p>
            {/* Form */}
            <div><Form fields={fields} /></div>
            {/* Forgot */}
            <div className='d-flex justify-content-end w-100 mb-5'>
              <span onClick={() => onForgot(data.email)} style={{ cursor: 'pointer', color: 'red', textDecoration: 'underline' }}>Forgot Password?</span>
            </div>
            {/* Submit */}
            <SubmitButton
              onClick={() => onLogin(data.email, data.password)}
              title={'Login'}
              color={'primary'}
              loading={loading}
              style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}
            />
            {/* Border Line */}
            <div className='d-flex align-items-center mt-4 mb-4'>
              <div className='full-width-border' style={{ flex: 1 }} />
              <div style={{ flex: 0.5, textAlign: 'center' }}>Or Sign in With</div>
              <div className='full-width-border' style={{ flex: 1 }} />
            </div>
            {/* Socials */}
            <div className='d-flex align-items-center gap-3'>
              <Button
                button={{
                  title: 'Google',
                  icon: google,
                  onClick: onGoogleLogin
                }}
                className={'button-full-border'}
                style={{ width: '100%' }}
              />
              <Button
                button={{
                  title: 'Facebook',
                  icon: facebook,
                  onClick: onFacebookLogin
                }}
                className={'button-full-border'}
                style={{ width: '100%' }}
              />
            </div>
            {/* Navigation */}
            <div className='auth-navigation d-flex justify-content-center'>
              <span>Don't have an account?</span> &nbsp;&nbsp;
              <Link to={'/signup'} className='link'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </Loader>
  )
}

export default Login