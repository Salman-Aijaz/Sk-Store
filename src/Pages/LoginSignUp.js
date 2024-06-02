import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Enter Your Name' />
        <input type="email" placeholder='Enter Your E-Mail Address' />
        <input type="password" placeholder='Enter Your Password' />
      <button>Continue</button>
      </div>
      <p className="loginsignup-login">Already have an account <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
    </div>
    </div>
  )
}

export default LoginSignUp