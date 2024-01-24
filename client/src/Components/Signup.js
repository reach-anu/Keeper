import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../Styles/Signup.css"

const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate= useNavigate();

   const handleSubmit = async (e) =>{
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, 
    { name, 
      email, 
      password
    })
    .then(result => {
      if(result.data=="EXISTS")
      {
        alert("This Email already exists !!");
        setName('');
        setEmail('');
        setPassword('');
      }
      else{
        navigate('/homePage')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='loginFormContainer'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        name='name' 
        placeholder='Name'
        onChange={(e)=>{setName(e.target.value)}}
        value={name}
        required
        />
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
      <button type='submit'>Sign up</button>
      </form>
      {/* <p>or</p>
      <button type='submit'><Link to='/' className='Loginbutton'>Login</Link></button> */}
    </div>
  )
}

export default Signup