import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPython, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faLaptopCode,faArrowLeft, faArrowRight, faRotateRight, faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import profile from "../Assets/mekhi_profile.png"

import {faX} from '@fortawesome/free-solid-svg-icons'
import PNG from "../Assets/PNG/PNG"
import SVG from "../Assets/SVG/svg"
import Python from "../Assets/PNG/Python.png"
import { icon } from '@fortawesome/fontawesome-svg-core'


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
            buttonStyle = {backgroundColor:"#21252b", borderTopRightRadius:"10px", borderTopLeftRadius:"10px", color:"#EEEDE7" }
        }
        else{
            // buttonStyle = {backgroundColor:"green"}
        }
        return  <button className="popUp--tab" style={buttonStyle} onClick={() => handleButtonClick(name)}>
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
        
            default:
                src = PNG[skill]
        }

        return (
        <div className="svg--container">
            <img alt="PNG icon" className="svg--icon" src={src} />
            <h2 >{skill}</h2>
        </div>)
    })

    // return(
    //     <div className="popup--overlay">
    //         <div className="popUp--container">
    //             <div className="popUp--tabs">
    //                 {buttons}
    //                 <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='1x'/></button>
    //             </div>

    //             <div id="popUp--header">
    //                 <div className='popUp--header--left'>
    //                     <FontAwesomeIcon className="popUp--header--icon" style={{marginLeft:"10px", marginRight:"10px"}}  icon={faArrowLeft} size='1x'/>
    //                     <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"20px"}}  icon={faArrowRight} size='1x'/>
    //                     <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"15px"}} icon={faRotateRight} size='1x'/>
    //                     <FontAwesomeIcon className="popUp--header--icon" icon={faHouse} size='1x'/>
    //                 </div>
    //             </div> 

    //             <h1 id="popUp--name">{popUpData.name}</h1>

    //             <div id="popUp--icons--container" >
    //                 {icons}
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <div className="popUp--overlay">

            <div className="popUp--tabs">
                {buttons}
                <button onClick={() => setPopUp({isClicked:false})} id="closePopUp"><FontAwesomeIcon icon={faX} size='1x'/></button>
            </div>

            <div className="popUp--container"> 
                <div id="popUp--header">
                    <div className='popUp--header--left'>
                        <FontAwesomeIcon className="popUp--header--icon" style={{marginLeft:"10px", marginRight:"10px"}}  icon={faArrowLeft} size='1x'/>
                        <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"20px"}}  icon={faArrowRight} size='1x'/>
                        <FontAwesomeIcon className="popUp--header--icon" style={{marginRight:"15px"}} icon={faRotateRight} size='1x'/>
                        <FontAwesomeIcon className="popUp--header--icon" icon={faHouse} size='1x'/>
                    </div>

                    <div className='popUp--header--right'>
                        <div id="popUp--header--search">
                            <FontAwesomeIcon style={{marginTop:"6px", marginLeft:"5px"}} className="popUp--header--icon" icon={faCircleInfo} size='1x'/>
                            <span style={{marginTop:"7px", marginLeft:"5px"}}>www.MekhiHart_isCool.dev</span>
                        </div>
                        <img alt="Mekhi's profile" className="popUp--header--icon" src={profile} style={{minWidth:"30px", maxHeight:"30px", borderRadius:"100px", marginTop:"0px"}}></img>
                    </div>
                </div>

                <h1 id="popUp--name">{popUpData.name}</h1>

                

                <div id="popUp--icons--container">
                    {icons}
                </div>

            </div>
        </div>
    )

}