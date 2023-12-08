import { useState } from 'react'
import Header from './components/Header'
import Body from './components/body'
import './index.css'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contactme from './components/Contactme'


function App() {
  return (
    <div className='scroll-smooth'>      
        <Header/>    
        <Body/>
        <About/>
        <Skills/>
        <Projects />
        <Contactme />
    </div>
    
  )
}

export default App
