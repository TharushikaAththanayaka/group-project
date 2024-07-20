import React from 'react'
import Updatebtn from './Updatebtn'
import "./update.css"


export default function Update() {
  return (
    <div className='update'>
        <span className='label'>Update Password</span>
        <form action="" method="POST">
             <div className='text1'>
                <label for="oldPassword" className='label1'>Old Password:</label>
                <input type="password" className="oldPassword" name="oldPassword" placeholder='Enter old password' required></input>
            </div>
            <div className='text2'>
                <label for="newPassword" className='label2'>New Password:</label>
                <input type="password" className="newPassword" name="newPassword" placeholder='Enter new password' required></input>
            </div>
            <div className='text3'>
                <label for="confirmPassword" className='label3'>Confirm Password:</label>
                <input type="password" className="confirmPassword" name="confirmPassword" placeholder='Comfirm password' required></input>
            </div>
            <div className="btn">
            <Updatebtn/>
            </div>
           
        </form>
    </div>
  )
}


