import React from 'react'
import "./division3.css"
import rec1 from '../images/Rectangle\ 1.jpg'
import Tophead1 from './TopHead1'

const Services1 = () => {
  return (
    <>
    <Tophead1/>
    <div className='main'>
      <div className='board'>Services</div>
      <div className='table'>
        <img src={rec1} alt="" />
      </div>
    </div>
    </>
  )
}

export default Services1