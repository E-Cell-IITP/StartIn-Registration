import React from 'react'
import './navlog_sign_in.css'

const Navlog_sign_in = () => {
  return (
    <div className="headofnav">
       <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="log_sign">
         <span onClick={()=>{window.location='/login'}}  className="login">Login</span>
         <span onClick={()=>{window.location='/sign'}} className="sign">Sign-Up</span>
      </div>
    </div>
  )
}

export default Navlog_sign_in
