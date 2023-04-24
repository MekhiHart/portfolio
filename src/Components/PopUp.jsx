import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import {faX} from '@fortawesome/free-solid-svg-icons'

export default function PopUp(props){
    const {setPopUp, popUpData, handlePopUpData, handleTabButtons, tabButtons} = props
    const buttonIcons = [faLaptopCode, faReact, faDatabase, faScrewdriverWrench]
    function handleButtonClick(value){
        handlePopUpData(value)
        handleTabButtons(value)
    }
    

    const buttons = tabButtons.map((buttonObj, index) =>{
        const {isClicked, name} = buttonObj
        let buttonStyle = {}
        console.log("status: ", isClicked)

        if (isClicked){
            console.log("here")
            buttonStyle = {backgroundColor:"white", borderTopRightRadius:"10px", borderTopLeftRadius:"10px" }
        }
        else{
            // buttonStyle = {backgroundColor:"green"}
        }
        return  <button className="popUp--tab" style={buttonStyle} onClick={() => handleButtonClick(name)}>
            {<FontAwesomeIcon icon={buttonIcons[index]} size='1x'/>} {name}
            </button>
    })

    // * seperators
    const seperator = <div id="tab--seperator"></div>
    buttons.splice(1,0, seperator)
    buttons.splice(3,0, seperator)
    buttons.splice(5,0, seperator)
    buttons.splice(7,0, seperator)
    

    return(
        <div className="popup--overlay">
            <div className="popUp--container">
                <div className="popUp--tabs">
                    {buttons}
                    <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='2x'/></button>
                </div>
                <h1>{popUpData.name}</h1>
                <h2>This is Mekhi</h2>
            </div>
        </div>
    )

}