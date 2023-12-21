import React from 'react'
import './windows.scss'
import { ShortcutList } from '../Shortcuts/ShortcutList'

const Windows = () => {

    const allWindows = ShortcutList.map((window) => 
        <div id={window.title} key={window.title} className='wrap draggable'>
            <div className='content'>

                <div className='dragTrigger headerExplorer flex horizontalCenter verticalCenter '>
                    <div className='flex horizontalCenter verticalCenter dots'>
                        <div className='dot close' data-close={window.title} />
                        <div className='dot close' data-close={window.title} />
                        <div className='dot' />
                    </div>
                    <p className='explorerTitle'>{window.title}</p>
                </div>

                <div className='contentInWindow'>
                    {window.component}
                    
                </div>

                <div className='extend' />
                

            </div>
        </div>
    )

  return (
    <>
        {allWindows}
    </>
  )
}

export default Windows