import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPython, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode,faArrowLeft, faArrowRight, faRotateRight, faHouse, faCircleInfo, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import profile from "../Assets/animatedProfile.png"

import {faX} from '@fortawesome/free-solid-svg-icons'
import PNG from "../Assets/PNG/PNG"
import { text } from '@fortawesome/fontawesome-svg-core'

export default function PopUp(props){
    function closeModal(){
        const modal = document.getElementById("modal")
        const modalOverlay = document.getElementById("modal--overlay")
        modal.setAttribute("closing", "")
        modalOverlay.setAttribute("closing",'')
        
        modal.addEventListener("animationend", () => setPopUp({isClicked:false}))
    }
    function handleButtonClick(value){
        // changes what to render when tab is clicked
        handlePopUpData(value)
        handleTabButtons(value)
    }
    const [isLightMode,setIsLightMode] = useState(true)
    const {setPopUp, popUpData, handlePopUpData, handleTabButtons, tabButtons} = props
    const buttonIcons = [faLaptopCode, faReact, faDatabase, faScrewdriverWrench]

    const tabSelectedColor = isLightMode ? "rgb(238, 237, 231)" : "#21252b"
    const tabColor = isLightMode ? "#DCD2CC" : "#333842"
    const textColor = isLightMode ? "black" : "white"
    const hoverColor = isLightMode ? "#fdf4e3" : "#545c6d"

    const searchHeaderColor = isLightMode ? " #F9F9FB" : "#6a768a"
    const tabHeader = searchHeaderColor
    const mainColor = isLightMode ? "rgb(238, 237, 231)" : "#21252b"
    const icon = isLightMode ? faSun : faMoon

    const buttons = tabButtons.map((buttonObj, index) =>{
        const {isClicked, name} = buttonObj
        let buttonStyle = {}

        if (isClicked){
            buttonStyle = {backgroundColor:tabSelectedColor, borderTopRightRadius:"10px", borderTopLeftRadius:"10px", color:textColor, borderColor:textColor}
        }
        else{
            buttonStyle = {backgroundColor:tabColor, color:textColor}
        }
        return  <button  className="popUp--tab" style={buttonStyle} onClick={() => handleButtonClick(name)}>
            {<FontAwesomeIcon icon={buttonIcons[index]} size='1x'/>} <span className="popUp--tab--name">{name}</span>
            </button>
    })

    const icons = popUpData.skills.map((skill) => {
        let src
        switch (skill) {
            case ("C++"):
                src = PNG["CPlusPlus"]
                break;

            case ("C#"):
                src = PNG["CSharp"]
                break;

            case ("Firebase"):
                src = PNG["Firestore"]
                break;

            case("ReactNative"):
                src = PNG["ReactNative"]
                skill = "React Native"
                break

            case("Microsoft_Net"):
                src = PNG["MicrosoftNet"]
                skill = ".NET"
                break
        
            default:
                src = PNG[skill]
        }
        return (
        <div className="svg--container">
            <img alt="PNG icon" className="svg--icon" src={src} />
            <h2 >{skill}</h2>
        </div>)
    })

    return(
        <div className="popUp--overlay" id="modal--overlay">
            <div className='modal' id='modal'>
                <div className="popUp--tabs" style={{backgroundColor:tabHeader}} >
                    {buttons}
                    <button style={{backgroundColor:searchHeaderColor, color:textColor}} onClick={closeModal} id="closePopUp"><FontAwesomeIcon icon={faX} size='1x'/></button>
                </div>

                <div style={{backgroundColor:mainColor, color:textColor}}  className="popUp--container"> 
                    <div  id="popUp--header">
                        <div className='popUp--header--left'>
                            <FontAwesomeIcon className="popUp--header--icon" style={{marginLeft:"10px", marginRight:"10px"}}  icon={faArrowLeft} size='1x'/>
                            <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"20px"}}  icon={faArrowRight} size='1x'/>
                            <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"15px"}} icon={faRotateRight} size='1x'/>
                            <FontAwesomeIcon onClick={() => setIsLightMode(prevState => !prevState)} id="switch--mode" className="popUp--header--icon" icon={icon} size='1x'/>
                        </div>

                        <div className='popUp--header--right'>
                            <div style={{backgroundColor:searchHeaderColor}} id="popUp--header--search">
                                <FontAwesomeIcon id="popUp--header--search--icon" className="popUp--header--icon" icon={faCircleInfo} size='1x'/>
                                <span id="popUp--header--search--url">www.MekhiHart_isCool.com</span>
                            </div>
                            <img alt="Mekhi's profile" className="popUp--header--icon" src={profile} style={{minWidth:"30px", maxHeight:"30px", borderRadius:"100px", marginTop:"0px"}}></img>                        </div>
                    </div>

                    <h1 id="popUp--name">{popUpData.name}</h1>

                    <div className="skills--icon--container">
                        {icons}
                    </div>

                </div>
            </div>
        </div>
    )

}