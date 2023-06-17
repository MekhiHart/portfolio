import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function Footer(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv] = scrollDivs
    return(
        <div id="FOOTER">
            <FontAwesomeIcon onClick={() => scrollToDiv(heroDiv)} style={{color:"white"}} className="popUp--header--icon" icon={faArrowUp} size='2x'/>
        </div>
    )
}