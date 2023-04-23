import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import {faX} from '@fortawesome/free-solid-svg-icons'

export default function PopUp(props){
    const {setPopUp, popUpData} = props
    

    return(
        <div className="popup--overlay">
            <div className="popUp--container">
                <div className="popUp--tabs">
                    <button value="Languages">{<FontAwesomeIcon icon={faLaptopCode} size='1x'/>} Languages</button>
                    <button value="Frameworks" >{<FontAwesomeIcon icon={faReact} size='1x'/>} Frameworks</button>
                    <button value="Databases">{<FontAwesomeIcon icon={faDatabase} size='1x'/>} Databases</button>
                    <button value="Tools">{<FontAwesomeIcon icon={faScrewdriverWrench} size='1x'/>} Tools</button>
                    <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='2x'/></button>
                </div>
                <h1>{popUpData.name}</h1>
                <h2>This is Mekhi</h2>
            </div>
        </div>
    )

}