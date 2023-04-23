import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

export default function PopUp(){
    return(
        <div className="popup--overlay">
            <div className="popUp--container">
                <div className="popUp--tabs">
                    <button>Skills</button>
                    <button>Skills</button>
                    <button>Skills</button>
                    <button>Skills</button>
                    <button id="closePopUp"><FontAwesomeIcon icon={faX} size='2x'/></button>
                </div>
                <h1>Hello</h1>
                <h2>This is Mekhi</h2>
            </div>
        </div>
    )

}