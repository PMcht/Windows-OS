import { useState } from 'react'
import './App.scss'
import Hero from './Sections/Hero'
import Shortcut from './Components/Shortcuts/Shortcut'
import Tracking from './Hooks/Draggable';

function App() {

  Tracking('TrackItem');

  return (
    <>
        <Hero />
        <Shortcut />
    </>
  )
}

export default App
