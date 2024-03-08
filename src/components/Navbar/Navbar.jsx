import React, { useState } from 'react'
import './Navbar.css'
import Logo from "./Assets/Logo.jpg"
import cart from "./Assets/cart.jpg"
import {Link} from "react-router-dom";




const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={Logo} alt=''/>
        <p>FASHIONATE BOUTIQUE</p>
      </div>
      <ul className='nav_menu'>
        <li onClick={()=>{setMenu("express")}}><Link  style={{textDecoration:'none'}}to='/'>EXPRESS</Link>{menu==="express"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("collection")}}><Link style={{textDecoration:'none'}} to='/collection'>COLLECTION</Link> {menu==="collection"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}} to='accessories'>ACCESSORIES</Link> {menu==="accessories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}to='/about'> ABOUT</Link> {menu==="about"?<hr/>:<></>}</li>
      </ul>
      <div className='nav_login_cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt=''/></Link>
        <div className='nav_cart_count'>0</div>
      </div>

    </div>
  )
}

export default Navbar