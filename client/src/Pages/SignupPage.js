import React from 'react'
import Signup from "../Components/Signup"
import Loginbg from "../Assets/Loginbg.png"
import "../Styles/Login.css"

const SignupPage = () => {
  return (
    <div className='loginContainer'>
        <img src={Loginbg} style={{height:'90vh', width:'fit-content'}}/>
        <div className='loginFormWrapper'><Signup /></div>
    </div>
  )
}

export default SignupPage