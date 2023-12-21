import { useState } from 'react'
import './App.scss'
import Tracking from './Hooks/Draggable';
import Shortcuts from './Components/Shortcuts/Shortcut';
import About from './Sections/About/About';
import Counter from './Components/Counter/Counter';

function App() {

  Tracking('TrackItem');

  return (
    <div id="hero" className='flex verticalCenter horizontalCenter column'>

        <h1 className='text-big text-white'>I AM A</h1>
        <h1 className='text-bigger text-white'>WEB-DEV*</h1>
        <Counter />
        <h1 className='text-big text-darkblue'>*KIND OF</h1>



            <Shortcuts />
            <About />


            
    </div>
  )
}

export default App
