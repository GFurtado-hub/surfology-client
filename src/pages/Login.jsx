import React, { useState } from 'react';
import axios from 'axios'; 

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');

  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    const payload = { email, password };
    if (currentState === 'Sign Up') {
      payload.firstName = firstName;  
    }

    try {
      const url = currentState === 'Sign Up'
        ? `${import.meta.env.VITE_API_URL}/auth/signup`
        : `${import.meta.env.VITE_API_URL}/auth/login`;
      
      
      const response = await axios.post(url, payload);
      
      if (response.status === 200) {
        
        localStorage.setItem('authToken', response.data.token);  
        
        window.location.href = '/';  
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
      </div>
      
      
      {currentState === 'Login' ? '' : <input 
        type='text' 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='First Name' 
        required 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      />}
      
 
      <input 
        type='email' 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Email' 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type='password' 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Password' 
        required 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create new account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>

      
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;

