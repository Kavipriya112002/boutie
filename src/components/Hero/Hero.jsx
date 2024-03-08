import React from 'react'
import './Hero.css'
import image10 from '../Navbar/Assets/image10.jpg';
import image2 from '../Navbar/Assets/image2.jpg';
const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero_left'>
         <h2>New Arrivals Only</h2>
        <div>
          <div className='hero-hand-icon>'>
             <p>new</p>
             <img src={image10} alt=""/>
          </div>
          <p>collections</p>
          <p>for evryoone</p>
        </div>
       </div>

     
     <div className='hero_right'>
         <img src={image2} alt="" />
     </div>
    </div>
  )
}
export default Hero
