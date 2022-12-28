import React,{useEffect,useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './dashboard1.css'
import profit1 from '../images/profit1.jpeg'; // with import
import Datatable from './Datatable';
import Todayprofit from './Todayprofit';


const Dashboard1 = () => {
  
  function createData(sno,amount, date,timeofentry, name) {
    return {sno,amount, date,timeofentry, name};
  }
  let initTodo;
  if(localStorage.getItem('rows')===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('rows'));
  }
  const [rows,setRows]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('rows',JSON.stringify(rows));
  },[rows])
  
  return (
    <div className='topp'>
        <div className="userlead">
            <span className="left">Hi,UserName</span>
            <span className="right">Leaderboard</span>
        </div>
      <div className="topheading">
        <span className='head'>Dashboard</span>
      </div>
      <div className="pic">
        <div className="p1">
            <img src={profit1} alt="opsf" />
        </div>
        <div className="p1">
            <img src={profit1} alt="opsf" />
        </div>
        <div className="p1">
            <img src={profit1} alt="opsf" />
        </div>
      </div>
      <Router>
      <div className="todayprofit">
      <Link to="/todayprofit">
        <span className="today">Enter Today's Profit</span>
      </Link>
      <Routes>
        <Route exact path='/todayprofit' element={<Todayprofit rows={rows} createData={createData} setRows={setRows}/>}></Route>
      </Routes>
      </div>
      </Router>

     <div className="lastfive">
        <span className="last">Last Five Entries</span>
      </div>
      <Datatable rows={rows}  className='tablee' />
    </div>
  )
}

export default Dashboard1
