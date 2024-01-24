import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' 
import "../Styles/Login.css"
import toast from 'react-hot-toast'

const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASE_URL}/`,
    {
      email,
      password
    })
    .then(result => {
      console.log(result)
      if(result.data=="EXISTS")
      {
        navigate('/homePage')
        toast.success("Successfully Logged in")
      }
      else{
        toast.error("Please Sign Up first !!")
        setEmail('');
        setPassword('');
      }
    })
    .catch(err => toast.error(err));
  }

  return (
    <div className='loginFormContainer'>
      <h1>Welcome! <br/> Please login to continue</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='email' 
          name='email' 
          placeholder='Email address' 
          onChange={(e)=>{setEmail(e.target.value)}} 
          value={email} 
          required
        />
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          onChange={(e)=>{setPassword(e.target.value)}} 
          value={password} 
          required
        />
        <button type='submit'>Log In</button>
      </form>
      <p>or <br/> New user? <Link to='/signup'>Register here</Link></p>
    </div>
  )
}

export default Login