import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './personal_register.css'
import fetchFoByDis from './Asyncc';

const Personal_Register = () => {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [Email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");

  async function funcc(){
    let item={FirstName,LastName,username,phone,Email,password};
    const body = JSON.stringify(item);
    let result=await fetch("http://localhost:4000/users/register",
   { method:'POST',
    body:body,
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }}
    )
    result=await result.json();
  }
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="loginbox">
            <div className="headinglogin">Register</div>
            <div className="FirstName sameone ">
                <label htmlFor="">First Name</label>
                <input value={FirstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='Enter your first name'/>
            </div>
            <div className="LastName sameone">
                <label htmlFor="">Last Name</label>
                <input value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Enter your last name'/>
            </div>
            <div className="LastName sameone">
                <label htmlFor="">UserName</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter a Username'/>
            </div>
            <div className="Email sameone">
                <label htmlFor="">Email</label>
                <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="tel"  placeholder='Enter your Email Id'/>
            </div>
            <div className="phone sameone">
                <label htmlFor="">Phone No.</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel"  placeholder='Enter your Phone no.'/>
            </div>
            <div className="passwordbox sameone">
                <label htmlFor="">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password'/>
            </div>
            <div className="passwordbox sameone">
                <label htmlFor="">Confirm Password</label>
                <input value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} type="password" placeholder='Confirm password'/>
            </div>
           
          <div  onClick={funcc} className="submitbutton">
            Register
          </div>
          <div  onClick={()=>{window.location='/login'}} className="alreadyAcc">
            Have account? Sign-In
          </div>
          
      </div>
    </div>
  )
}

export default Personal_Register
