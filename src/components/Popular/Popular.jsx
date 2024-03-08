import React from 'react'
import './Popular.css'
import all_product from '../Navbar/Assets/all_product'
import Items from '../Items/Items.jsx'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN FEST</h1>
      <hr />
      <div className='popular-item'>
        {all_product.map((item,i)=>{
          return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_prize} />
        })}
      </div>

    </div>
  )
}

export default Popular