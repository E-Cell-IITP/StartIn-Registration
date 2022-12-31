import React from 'react'
import './signUp1.css'

const SignUp1 = () => {
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="loginbox">
            <div className="headinglogin">Sign-Up</div>
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
          
      </div>
    </div>
  )
}

export default SignUp1
