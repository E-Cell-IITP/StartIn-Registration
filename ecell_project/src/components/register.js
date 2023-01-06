import React, { useState , useEffect} from 'react'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './register.css'
// import AddMember from './AddMember'
// import fetchFoByDis from './Asyncc';

const Register = () => {
  // const mem = []
  const [member, setmember] = useState([])
  const [ct,setct]=useState(3)
  const deleteitem=(itemId)=> {
    console.log(itemId)
    setct(ct-1);
    setmember((current) =>
    current.filter((member) =>  member.number!== itemId)
  );}
  return (
    <div className='loginhead'>
      <div className="loginbox">
            <div className="headinglogin"> Team Register</div>
            <div className="firstname">
                <label htmlFor="">Team Name</label>
                <input type="text" placeholder='Enter your Team name'/>
            </div>
            <div className="lastname">
                <label htmlFor="">username</label>
                <input type="text" placeholder={`member 1`}/>
            </div>
            <div className="lastname">
                <label htmlFor="">username</label>
                <input type="text" placeholder={`member 2`}/>
            </div>
            <div className="lastname">
                <label htmlFor="">username</label>
                <input type="text" placeholder={`member 3`}/>
            </div>
            {
            member.map((elm) =>{
              console.log(elm.number)
              let y = elm.number+4;
              let x = `member ${y}`;
              return(
                <div className="lastname">
                <label htmlFor="">username</label>
                <div className='container'>
                <input type="text" placeholder={x}/>
                <i className="far fa-trash-alt add-btn btn-delete" onClick={()=>{
                        deleteitem(elm.number);
                    }}></i>
                </div>
            </div>
              )
            })
          }
            <div className='btn-add' onClick={()=>{
              if(ct<7){
                const new_mem = {
                  number:ct-3
                }
                setct(ct+1)
                setmember([...member,new_mem])
              }
            }}>Add Member</div>
            <div className='description'>
              <label htmlFor="">Description</label>
              <textarea placeholder='give description about your shop'></textarea>
            </div>
          <div   className="submitbutton">
            Register
          </div>
      </div>
    </div>
  )
}

export default Register
