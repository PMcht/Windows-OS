import React from 'react'
import Counter from '../Components/Counter/Counter'

const Hero = () => {
  return (
    <div id="hero" className='flex verticalCenter horizontalCenter column'>
        <h1 className='text-big text-white'>I AM A</h1>
        <h1 className='text-bigger text-white'>WEB-DEV*</h1>
        <Counter />
        <h1 className='text-big text-darkblue'>*KIND OF</h1>
    </div>
  )
}

export default Hero