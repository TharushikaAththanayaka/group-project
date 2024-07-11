import React from 'react'
import './ASidebar.css'
import user from '../Assests/user.png';
import home from '../Assests/home.png'
import query from '../Assests/report.png'
import history from '../Assests/folder.png'
import pwd from '../Assests/key.png'
import manage from '../Assests/user-profile.png'

export default function ASidebar() {
  return (
    <div className='all'>
        <div className="sidebar">
            <br/>
            <br/>
      <button className="sidebar-item">
      <img src={user} alt=""></img>
        My Profile</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item active">
      <img src={home} alt=""></img>
        Dashboard</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={query} alt=""></img>
        Add Query</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={history} alt=""></img>
         Complaints<br></br> History</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={manage} alt=""></img>
         Manage<br/> Users</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={pwd} alt=""></img>
        Change <br/>Password</button>
    </div>
    </div>
  )
}

  

