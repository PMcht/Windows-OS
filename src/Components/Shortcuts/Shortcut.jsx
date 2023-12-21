import React, { useEffect } from 'react'
import './Shortcuts.scss'
import Tracking from '../../Hooks/Draggable'
import { ShortcutList } from './ShortcutList'

const Shortcut = () => {

  const allShortcuts = ShortcutList.map((shortcut) =>
      <div key={shortcut.id} data-open='About' className='shortcut flex verticalCenter horizontalCenter column draggable dragTrigger open'>

        <img src={shortcut.img} className='icon' />

        <p className='shortTitle text-white' >{shortcut.title}</p>

      </div>
  )

  return (

      <div id="shortcutsContainer">
        {allShortcuts}
      </div>
    
  )
}

export default Shortcut