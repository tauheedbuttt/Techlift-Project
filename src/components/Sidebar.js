import React from 'react'
import { useSelector } from 'react-redux'

// Assets
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import google from '../assets/images/google.png';
import trash from '../assets/svgs/delete.svg';
import arrow from '../assets/svgs/arrow-up.svg';

// Components
import useAuth from '../features/auth/useAuth';
import SubmitButton from './SubmitButton';
import useChat from '../features/chat/useChat';
import Button from './Button';

const Sidebar = () => {
  const {loading, onGoogleLogin, onLogout} = useAuth();
  const {deleteMessages} = useChat();
  const {token} = useSelector(state => state.auth);


  const settings = [
    !token ? null :{
      title: 'Clear Chat',
      icon: trash,
      onClick: deleteMessages
    },
    {
      title: token ? 'Logout' : 'Sign in With Google',
      icon: token ? arrow : google,
      onClick: !token ? onGoogleLogin : onLogout
    },
  ].filter(btn=>btn)

  return (
    <div className='d-flex flex-column justify-content-around' style={{flex:1, background: 'white'}}>
      <div className='d-flex flex-row align-items-center justify-content-between w-100 p-3' style={{background: '#343541', color: 'white' }}>
        <h4>{token ? token.name : 'Junbo AI'}</h4>
        <img src={token ? token.imageURL : logo} alt='logo' style={{height: 50, width: 50}}/>
      </div>
      <div className='d-flex flex-column justify-content-between' style={{flex:1}}>
        <div></div>
        <div></div>
        <div className='d-flex flex-column gap-0 pb-2'>
          <div className='button-list'>
            {
              settings?.map((button,index)=>{
                return <Button key={index} button={button} className={index!=0 ? 'button-border' : ''} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar