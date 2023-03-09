import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route,useLocation, BrowserRouter} from "react-router-dom"
import './App.css'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add( faLinkedin, faGithub)

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
