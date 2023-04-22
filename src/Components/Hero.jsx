import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

export default function Hero(){
    return(
    <div className="hero--body fullScreen">
        <div className="hero--intro">
            <h1 style={{marginBottom: "-20px" , fontWeight:"bold"}}>Mekhi Hart Dela Cruz</h1>
            <h2>Full-Stack Software Developer</h2>
            <h3 style={{marginBottom: "-20px"}}>California State University Long Beach</h3>
            <h4>B.S. in <i>Computer Science</i> | August 2020 - May 2024</h4>
        </div>

        <div className="hero--links" style={{marginTop:"50px"}}>
            <a href="" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            <a href="" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/></a>
        </div>

    </div>
    )
}