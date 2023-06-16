import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench, faLaptopCode} from '@fortawesome/free-solid-svg-icons'

export default function Skills(props){
    function handleButtonClick(value){
        setPopUp({isClicked:true})
        
        handlePopUpData(value) // changes what to render based on button clicked on the skills section
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
        const style = i > 2 ? {paddingTop:"40px"} : {} // * adds gap between first row and second row buttons
        style.margin = "0 auto"

        if (i === 1 || i === 3){ // for first buttons in the first columns
            style.paddingRight = "40px"
        }

        buttons.push(
            (

                <div style={style}>

                    <button onClick={() => handleButtonClick(names[i-1])} style={iconStyle}  className='button-30 skill--button'> <FontAwesomeIcon className="skill--icon" icon={icons[i -1]} size='5x'/></button>
                    <h2>{names[i - 1]}</h2>
                </div>
            )
        )
    }
    return(
        <div className="skills--container" id='SKILLS'>
            <h1>Technical Skills</h1>
            <div className="skills--grid">
                {buttons}
            </div>
        </div>
    )
}