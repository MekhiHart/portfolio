import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

export default function Hero(){
    return(
    <div className="hero--container fullScreen" id='HERO'>
        <div className="hero--intro">
            <h1 style={{marginBottom: "-20px" , fontWeight:"bold"}}>Mekhi Hart Dela Cruz</h1>
            <h2> <em> Software Engineer </em></h2>
            <h3 style={{marginBottom: "-20px"}}>California State University Long Beach</h3>
            <h4>B.S. in <i>Computer Science</i> | August 2020 - May 2024</h4>
        </div>

        <div className="hero--links">
            <a href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            <a id="resume" href="https://drive.google.com/file/d/12Kqr3mP8Z75CRPphWRdP-PGQisb6zUsJ/view?usp=sharing" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} >Resume</span></a>
        </div>



    </div>
    )
}