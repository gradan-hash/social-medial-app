import React from 'react';
import "./register.css";

const Register = () => {
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
          <input className='logininput'placeholder='username' />
            <input className='logininput'placeholder='email' />
            <input className='logininput'placeholder='password' />
            <input className='logininput'placeholder='password again' />
            <button className='loginbutton'>Sign Up</button>
          
            <button className='loginregisterbutton'> Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;