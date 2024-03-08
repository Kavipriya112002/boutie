import React from 'react'
import '../Acc/Acc.css'

const Acc = (props) => {
  return (
    <div className='access'>
    <img src={props.image} alt="" />
    <p>{props.name}</p>
  
    </div>
  )
}

export default Acc