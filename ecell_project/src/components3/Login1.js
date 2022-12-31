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
      <div className="loginbox">
            <div className="headinglogin">Login</div>
            <div className="emailbox">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email id'/>
            </div>
            <div className="passwordbox">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter password'/>
            </div>
            <div className="checkbox1">
            <input
              type="checkbox"
              className="checkbox1-input"
              id="customCheck1"
            />
            <label  htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          <div  className="submitbutton">
            Submit
          </div>
          <p className="forgot-password">
            Forgot <a href="#">password?</a>
        </p>
      </div>
    </div>
  )
}

export default Login1
