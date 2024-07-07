import React from 'react'
import UserLogin from '../components/UserLogin'
import './UserLoginPage.css'



function UserLoginPage() {
  return (
    <div className='userloginpage'>
      <span className='text'>
        Complaint Management System
      </span>
      <hr/>
      <div className='login'>
        <UserLogin/>
      </div>
    </div>
  )
}

export default UserLoginPage;
