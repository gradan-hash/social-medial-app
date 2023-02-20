import React from 'react';
import "./login.css";

const Login = () => {
  return (
    <div className='login'>
      <div className='loginwrapper'>
        <div className='loginleft'>
          <h3 className='loginlogo'>Corneliusocial</h3>
          <span className='logindescp'>
            connect with friends and the world around you on Corneliusocial
          </span>
        </div>
        <div className='loginright'>
          <div className='loginbox'>
            <input className='logininput'placeholder='email' />
            <input className='logininput'placeholder='password' />
            <button className='loginbutton'>Log in</button>
            <span className='loginforgot'>Forgot Password</span>
            <button className='loginregisterbutton'> Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login