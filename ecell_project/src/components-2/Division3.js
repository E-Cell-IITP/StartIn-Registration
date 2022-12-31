import React from 'react'
import "./division3.css"

import Tophead1 from './TopHead1'
import Food1 from './Food1';
import Services1 from './Services1';
import Others1 from './Others1';
import foodimg from '../images/Rectangle\ 6.jpg';
import serviceimg from "../images/business-people-casual-meeting_53876-101882\ 1.jpg";
import otherimg from "../images/4p-marketing-concept-product-manufacturing-strategy-modern-marketing-theory-products-distribution-locations-selling-prices-public-relations_48954-484\ 1.jpg";
import {
    BrowserRouter as Router,
    Routes,
    NavLink,
    Route,
    Link
  } from 'react-router-dom';
 
const Division3 = () => {
  // render(){
    return (
      <>
        <Tophead1/>
      <div className="threebox">
      {/* <Link className='linkk' to="/food1"> */}
      <div onClick={()=>{window.location='food1'}} className="box1 boxo">
          <img src={foodimg} alt="" />
          <div className="textt">Food</div>
      </div>
      {/* </Link> */}
      {/* <Link className='linkk' to="/services1"> */}
      <div onClick={()=>{window.location='services1'}} className="box2 boxo">
        <img src={serviceimg} alt="" />
        <div className="textt">Services</div>
      </div>
      {/* </Link> */}
      {/* <Link className='linkk' to="/others1"> */}
      <div onClick={()=>{window.location='others1'}} className="box3 boxo">
        <img src={otherimg} alt="" />
        <div className="textt">Others</div>
      </div>
      {/* </Link> */}
      </div>
    </>
  );
// }
}


export default Division3
