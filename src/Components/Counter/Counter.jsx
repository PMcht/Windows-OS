import React from 'react'
import './Counter.scss'

const Counter = () => {
  return (
    <div id="counter" className='flex verticalCenter horizontalCenter column'>

      <div id="numberContainer" className='flex verticalCenter'>

        <p className='number size3 text-white bold'>1</p>
        <p className='number text-white bold'>5</p>
        <p className='number text-white bold'>6</p>
        <p className='number text-white bold'>0</p>
        <p className='number text-white bold'>3</p>
        <p className='number text-white bold'>3</p>

        <span className='crossed' />

      </div>

      <p className='text-white bold size2'>Lines Of Code Written <span className='text-purple'>since Jun 01, 2023</span></p>

    </div>
  )
}

export default Counter