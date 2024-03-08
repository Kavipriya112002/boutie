import React from 'react'
import '../Coll/Coll.css'

const Coll = (props) => {
  return (
    <div>
       <div className='coll'>
    <img src={props.image} alt="" />
    <p>{props.name}</p>
  
    </div> 
    </div>
  )
}

export default Coll