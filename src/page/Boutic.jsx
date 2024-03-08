import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Popular from '../components/Popular/Popular.jsx'
import Offers from '../components/Offers/Offers.js'
import Api from './Api/Api.jsx'

const Boutic = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers />
        <Api />
    </div>
  )
  
}

export default Boutic