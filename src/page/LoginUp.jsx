import React from 'react'
import './CSS/LoginUp.css'
const LoginUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>
        <div className='loginsignup-field'>
          <input type='text'placeholder='Your Name'/>
          <input type='email'placeholder='Email Id'/>
          <input type='password'placeholder='Password'/>
        </div>
        <button>continue</button>
        <p className='loginsigup-login'>Already have an account?<span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id=''/>
          <p>By agree this, i accepct these all terms and policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginUp