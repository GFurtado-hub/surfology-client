import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backEndUrl } = useContext(ShopContext);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let response;
      if (currentState === 'Sign Up') {
        response = await axios.post(`${backEndUrl}/auth/signup`, { firstName, email, password });
      } else {
        response = await axios.post(`${backEndUrl}/auth/login`, { email, password });
      }

      if (response.data.authToken) {
        setToken(response.data.authToken);
        localStorage.setItem('authToken', response.data.authToken);
      } else {
        setError('Unexpected response from server');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Sign Up' && (
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="First Name"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="w-full flex justify-between text-sm">
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create new account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login here</p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;



