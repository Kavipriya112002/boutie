import React from 'react'
import './Offers.css'
import off1 from '../Navbar/Assets/off1.jpg'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>EXCLUCIVE OFFER</h1>
            <p>ONLY FROM BEST PRODUCTS</p>
            <button>Check it</button>
        </div>
        <div className='offers-right'>
             <img src={off1} alt="" />
        </div>

    </div>
  )
}

export default Offers