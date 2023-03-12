import React, { useState } from 'react'

import send from '../assets/images/send.png';

import SubmitButton from './SubmitButton'
import useChat from '../features/chat/useChat'
import { useSelector } from 'react-redux';

const Footer = () => {
  const [message, setMessage] = useState('')
  const {token} = useSelector(state => state.auth)
  const {messages} = useSelector(state => state.chat)
  const dimension = useSelector(state => state.dimension);

  const {loading, sendMessage, gptResponse, deleteMessages} = useChat();

  const isMobile = dimension?.width <= 768;

  const onSend = async () => {
    try{
      const data = await sendMessage(message);
      gptResponse([...messages, data])
      setMessage('');
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className='d-flex flex-row gap-2' style={{marginTop: 10}}>
      <input 
        className="form-control input-lg"
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}
        placeholder='Type your message here'
      />
      {
        !isMobile || !token ? null :
        <SubmitButton
          title={"Clear Chat"}
          color={'danger'}
          onClick={deleteMessages}
          width={80}
        />
      }
      <SubmitButton
        disabled = {!message}
        title={'Send'}
        color={'primary btn-lg'}
        onClick={onSend}
        loading={loading}
      />
    </div>
  )
}

export default Footer