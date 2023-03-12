import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, logout } from '../features/auth/slice';
import api from '../app/api';

export default () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const { token } = useSelector(state => state.auth);

  const onLogin = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.post('/login', { email, password });
      const { token } = res.data;
      // store in redux
      dispatch(login(token))
      navigate('/home')
      setLoading(false);
    } catch (err) {
      const message = err.response ? err.response.data.message : err;
      setLoading(false);
      alert(message);
    }
  }
  const onSignup = async (data) => {
    setLoading(true);
    try {
      if (!data.name) return alert('Kindly enter your name');
      if (!data.email) return alert('Kindly enter your email');
      if (!data.password) return alert('Kindly enter your password');
      if (!data.confirmPassword) return alert('Kindly enter your confirm password');
      if (data.confirmPassword != data.password) return alert(`Password and Confirm Password don't match`);

      const res = await api.post('/signup', data);
      const { token } = res.data;

      // store in redux
      dispatch(login(token))
      navigate('/home')
      setLoading(false);
    } catch (err) {
      const message = err.response ? err.response.data.message : err;
      setLoading(false);
      alert(message);
    }
  }
  const onLogout = async () => {
    try {
      setLoading(true);
      dispatch(logout())
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  }

  return {
    loading,
    onLogin,
    onSignup,
    onLogout,
  }
}