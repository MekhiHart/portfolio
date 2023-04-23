import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import skills from "../Data/skills.json"
import { useState } from 'react'

import {faX} from '@fortawesome/free-solid-svg-icons'

export default function PopUp(props){
    const {setPopUp} = props
    return(
        <div className="popup--overlay">
            <div className="popUp--container">
                <div className="popUp--tabs">
                    <button value="languages">{<FontAwesomeIcon icon={faLaptopCode} size='1x'/>} Languages</button>
                    <button value="frameworks">{<FontAwesomeIcon icon={faReact} size='1x'/>} Frameworks</button>
                    <button value="databases">{<FontAwesomeIcon icon={faDatabase} size='1x'/>} Databases</button>
                    <button value="tools">{<FontAwesomeIcon icon={faScrewdriverWrench} size='1x'/>} Tools</button>
                    <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='2x'/></button>
                </div>
                <h1>Hello</h1>
                <h2>This is Mekhi</h2>
            </div>
        </div>
    )

}