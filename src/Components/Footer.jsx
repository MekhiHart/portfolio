import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'
export default function Footer(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv] = scrollDivs
    return(

        <div id="FOOTER">
            <FontAwesomeIcon onClick={() => scrollToDiv(heroDiv)} style={{color:"white"}} className="popUp--header--icon" icon={faAngleUp} size='2x'/>

            <div className="hero--links">
                <a href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                <a id="resume" href="https://drive.google.com/file/d/12Kqr3mP8Z75CRPphWRdP-PGQisb6zUsJ/view?usp=sharing" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} ></span></a>
            </div>
        </div>
    )
}