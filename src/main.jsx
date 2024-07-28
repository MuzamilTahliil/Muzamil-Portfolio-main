import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Project from './Pages/Project'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <About />
    <Skills />
    <Project />
    <Contact />
    
  </React.StrictMode>,
)
