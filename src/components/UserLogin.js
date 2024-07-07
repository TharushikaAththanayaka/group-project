import React from 'react'
import './UserLogin.css'
import Button from './Button';

function UserLogin() {
  return (
    <div className='userlogin'>
      
      <div className='login'>

        <span className='text1'>User Login</span>

        <form action=''>
          <label className='text2'>Email</label><br/>
          <input type='text' className='email' placeholder='Enter email' required/><br/>

          <label className='text3'>Password</label><br/>
          <input type='password' className='password' placeholder='Enter password' required/><br/>

          <div className='remember'>
            <input type='checkbox' className='remember'/>
            <span className='text4'>Remember Me</span>
          </div>

          <Button/>

          <span className='text5'>Forgot Password ?</span>
          
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
