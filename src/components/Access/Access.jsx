import React from 'react'
import '../Access/Access.css'
import  Data from'../Navbar/Assets/Data.js'
import  Acc from'../Acc/Acc.jsx'


const Access = () => {
  return (
    <div className='acc'>
      <h1><center>TRENDING ACCESSORIES</center></h1>
      <p> FROM OUR BOUTIQUE WE PROVIDE A HAND MADE ACCESSORIES FOR MATCHING CLOTHES WITH SPECIAL OFFER .AND WE PROVIDE A HERBAL ACCESSORIES ALSO .ACCESSORIES FOR BABIES ALSO AVAILABLE HERE </p>
      <hr />
      <div className='acc-item'>
        {Data.map((item,i)=>{
          return<Acc key={i} id={item.id} name={item.name} image={item.image}  />
        })}
      </div>

    </div>

    
  )
}

export default Access