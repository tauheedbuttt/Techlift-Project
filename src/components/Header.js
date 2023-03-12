import React from 'react'
import { useSelector } from 'react-redux'

// Assets
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import google from '../assets/images/google.png'

// Components
import useAuth from '../features/auth/useAuth';
import SubmitButton from './SubmitButton';

const Header = () => {
  const {loading, onGoogleLogin, onLogout} = useAuth();
  const {token} = useSelector(state => state.auth);

  const onClick = !token ? onGoogleLogin : onLogout;

  return (
    <div className='d-flex flex-row align-items-center justify-content-between pt-2 pb-3' style={{background: 'white'}}>
      <div>
        <img src={logo} alt='logo' style={{height: 50, width: 50}}/>
      </div>
      {!token ? null : <span>Welcome <b>{token.name}</b></span>}
      <div className='d-flex flex-row align-items-center gap-2'>
        <SubmitButton
          color={'outline-primary'}
          title={token ? 'Logout' : 'Sign in With Google'}
          onClick={onClick}
          loading={loading}
          icon={token ? null : google}
        />
        <img src={token ? token.imageURL : avatar} alt='profile' style={{height: 50, width: 50, borderRadius: '50%'}} />
      </div>
    </div>
  )
}

export default Header;