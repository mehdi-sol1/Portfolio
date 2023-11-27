import { useState } from 'react'
import Header from './components/Header'
import Body from './components/body'
import './index.css'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'


function App() {
  return (
    <div>      
        <Header/>    
        <Body/>
        <About/>
        <Skills/>
        <Projects />
    </div>
    
  )
}

export default App
