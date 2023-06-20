import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export default function Hero(){
    return(

        <div className="hero--container fullScreen" id='HERO'>
            <div className="hero--intro">
                <h1 style={{marginBottom: "-20px"}}>Mekhi Hart Dela Cruz</h1>
                <h2> <em> Software Engineer </em></h2>
                <h3 style={{marginBottom: "-20px"}}>California State University Long Beach</h3>
                <h4>B.S. in <i>Computer Science</i> | August 2020 - May 2024</h4>
            </div>

            <div className="hero--links">
                <a href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                <Link to="/Resume" id="resume"><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} >Resume</span></Link>
            </div>
        </div>


    )
}