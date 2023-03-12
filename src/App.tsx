import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route,useLocation, BrowserRouter} from "react-router-dom"
import './App.css'

import NavBar from './Components/NavBar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add( faLinkedin, faGithub, faEnvelope)

// JSON Data
import data from "./Data/data.json"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home icons={[faEnvelope,faLinkedin,faGithub]} skills={data.skills} />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
