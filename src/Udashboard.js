import React from 'react'
import './Udashboard.css'
import user from './img/user.png'
import home from './img/home.png'
import query from './img/report.png'
import history from './img/folder.png'
import pwd from './img/key.png'

export default function Udashboard() {
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
      <img src={pwd} alt=""></img>
        Change <br/>Password</button>
    </div>
    
   
    <div className="dashboard">
    
            
       
<div className="line"></div>
     
      <div className="dashboard-item dark-red">Total Complaints</div>
      <div className="dashboard-item light-yellow">Pending Complaints</div>
      <div className="dashboard-item dark-yellow">Inprocess Complaints</div>
      <div className="dashboard-item dark-red">Closed Complaints</div>
      
    </div>
    
    </div>
    
  )
}
