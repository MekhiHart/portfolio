import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

export default function Hero(){
    return(
    <div className="hero--container fullScreen" id='HERO'>
        <div className="hero--left">
            <div className="hero--left--container">
                <h1 style={{marginBottom: "-20px" , fontWeight:"bold"}}>Mekhi Hart Dela Cruz</h1>
                <h2>Full-Stack Software Developer</h2>
                <h3 style={{marginBottom: "-20px"}}>California State University Long Beach</h3>
                <h4>B.S. in <i>Computer Science</i> | August 2020 - May 2024</h4>
            </div>

            <div className="hero--links" style={{marginTop:"50px"}}>
                <a href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                <a id="resume" href="https://drive.google.com/file/d/12Kqr3mP8Z75CRPphWRdP-PGQisb6zUsJ/view?usp=sharing" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} >Resume</span></a>
            </div>
        </div>

        <div className="hero--right">
            <div className="hero--right--container">
                <h2>About Me</h2>
                <p style={{marginTop:"-10px"}}>
                    I am a first-generation student that immigrated from the Philippines when I was 13 with my mom and two siblings. 
                    It was a struggle to fit in at first due the language barriers and the 
                    overwhelming new environment. However, the challenge of adapting to a new 
                    country as an immigrant shaped me to a curious-minded person that essentially made
                    me love trying out new things I was not familiar with.
                    </p>
            </div>
        </div>
    </div>
    )
}