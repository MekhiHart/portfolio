import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench, faLaptopCode, faA} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function Skills(props){
    function handleButtonClick(value){
        setPopUp({isClicked:true})
        handlePopUpData(value)
        handleTabButtons(value)
    }
    const {setPopUp, handlePopUpData, handleTabButtons} = props
    const buttons = []
    const names = ["Languages", "Frameworks", "Databases","Tools"]
    const icons = [faLaptopCode, faReact, faDatabase, faScrewdriverWrench]
    const iconStyle ={
        padding: "30px"
    }

    for (let i=1; i<5; i++){
        const style = i > 2 ? {paddingTop:"30px"} : {} // * adds gap between first row and second row buttons
        style.margin = "0 auto"
        buttons.push(
            (
                <div style={style}>
                    <button onClick={() => handleButtonClick(names[i-1])} style={iconStyle}  className='button-30'> <FontAwesomeIcon icon={icons[i -1]} size='5x'/></button>
                    <h2>{names[i - 1]}</h2>
                </div>
            )
        )
    }
    return(
        <div className="skills--container" id='SKILLS'>
            <h1>Technical Skills</h1>
            <h4 style={{fontWeight:"normal", marginTop:"-10px"}}>* <i>Click on an Icon :)</i></h4>

            <div className="skills--grid">
                {buttons}
            </div>
        </div>
    )
}