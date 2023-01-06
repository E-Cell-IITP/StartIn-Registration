import React from 'react'
import './login1.css'

const Login1 = () => {
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="_loginbox">
            <div className="_headinglogin">Sign In</div>
            <div className="_emailbox">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email id'/>
            </div>
            <div className="_passwordbox">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter password'/>
            </div>
          
          <div onClick={()=>{window.location='/Navlogin_register'}} className="_submitbutton">
            Sign In
          </div>   
          <p className="_forgot-password">
            Forgot <a href="#">password?</a>
        </p>
        <div onClick={()=>{window.location='/personal_register'}} className="_Donthave">
           Don't have Account? Register
          </div>
      </div>
    </div>
  )
}

export default Login1
