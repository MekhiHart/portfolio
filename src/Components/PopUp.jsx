import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode,faArrowLeft, faArrowRight, faRotateRight, faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import profile from "../Assets/mekhi_profile.png"
import { useState, useEffect } from 'react'

import {faX} from '@fortawesome/free-solid-svg-icons'
import SVG from "../Assets/SVG/svg"


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
            buttonStyle = {backgroundColor:"#21252b", borderTopRightRadius:"10px", borderTopLeftRadius:"10px", color:"#EEEDE7" }
        }
        else{
            // buttonStyle = {backgroundColor:"green"}
        }
        return  <button className="popUp--tab" style={buttonStyle} onClick={() => handleButtonClick(name)}>
            {<FontAwesomeIcon icon={buttonIcons[index]} size='1x'/>} {name}
            </button>
    })

    const icons = popUpData.skills.map((skill) => {
        let src

        switch (skill) {
            case ("C++"):
                src = SVG["CPlusPlus"]
                break;

            case ("C#"):
                src = SVG["CSharp"]
                break;

                case ("Firebase"):
                    src = SVG["Firestore"]
                    break;
        
            default:
                src = SVG[skill]
        }

        return (<div>
            <img className="svg--icon" src={src} />
            <h2 style={{marginTop:"-30px"}}>{skill}</h2>
        </div>)
    })


    return(
        <div className="popup--overlay">
            <div className="popUp--container">
                <div className="popUp--tabs">
                    {buttons}
                    <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='1x'/></button>
                </div>

                <div id="popUp--header">
                    <FontAwesomeIcon className="popUp--header--icon" style={{marginLeft:"10px", marginRight:"10px"}}  icon={faArrowLeft} size='1x'/>
                    <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"20px"}}  icon={faArrowRight} size='1x'/>
                    <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"15px"}} icon={faRotateRight} size='1x'/>
                    <FontAwesomeIcon className="popUp--header--icon" icon={faHouse} size='1x'/>
                    
                    <div id="popUp--header--search">
                        <FontAwesomeIcon style={{marginTop:"5px"}} className="popUp--header--icon" icon={faCircleInfo} size='1x'/>
                        <span style={{marginTop:"7px", marginLeft:"5px"}}>www.MekhiHart.isCool.com</span>
                    </div>

                    <img className="popUp--header--icon" src={profile} style={{minWidth:"30px", maxHeight:"30px", borderRadius:"100px", marginTop:"0px"}}></img>
                </div>

                <h1>{popUpData.name}</h1>

                <div style={{display: "flex", justifyContent:"center", flexWrap:"wrap", alignSelf:"center"}}>
                    {icons}
                </div>
                
                
            </div>
        </div>
    )

}