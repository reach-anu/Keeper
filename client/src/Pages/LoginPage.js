import React from 'react'
import Login from "../Components/Login"
import Loginbg from "../Assets/Loginbg.png"
import "../Styles/Login.css"

const LoginPage = () => {
  return (
    <div className='loginContainer'>
        <img src={Loginbg} style={{height:'90vh', width:'fit-content'}}/>
        <div className='loginFormWrapper'><Login /></div>
    </div>
  )
}

export default LoginPage