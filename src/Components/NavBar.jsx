import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'
export default function NavBar(){
    return(
        <nav>
            <a href="" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            <a href="" target='_blank'><FontAwesomeIcon icon={faFile} size='2x'/></a>
        </nav>
    )
}