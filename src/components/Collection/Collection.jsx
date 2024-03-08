import React from 'react'
import Type from '../Navbar/Assets/Type'
import Coll from '../Coll/Coll'
import '../Collection/Collection.css'
 

const Collection = () => {
  return (
    <div className='collection'>
      <h1>POPULAR IN FEST</h1>
      <hr />
      <div className='collection-item'>
        {Type.map((item,i)=>{
          return<Coll key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_prize} />
        })}
      </div>

    </div>
  )
}

export default Collection