import React, { useEffect } from 'react'
import './Shortcuts.scss'
import Tracking from '../../Hooks/Draggable'

const Shortcut = () => {

  return (
    <div className='shortcut flex verticalCenter horizontalCenter column draggable'>

        <img src='\W11\Folder.png' className='icon ' />

        <p className='shortTitle text-white' >About</p>

    </div>
  )
}

export default Shortcut