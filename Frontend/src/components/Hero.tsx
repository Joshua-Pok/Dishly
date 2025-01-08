import React from 'react'
import hero from '../assets/foodbanner.jpg';
const Hero = () => {
  return (
    <div>
        <img src={hero} className='w-full max-h-[600px] object-cover' alt="Banner for Dishly" />
    </div>
  )
}

export default Hero