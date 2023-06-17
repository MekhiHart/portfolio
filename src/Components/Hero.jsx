import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

export default function Hero(){
    return(
    <>
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
                <a id="resume" href="https://drive.google.com/file/d/12Kqr3mP8Z75CRPphWRdP-PGQisb6zUsJ/view?usp=sharing" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} >Resume</span></a>
            </div>
        </div>

        <div class="custom-shape-divider-bottom-1686966252">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    </>
    )
}