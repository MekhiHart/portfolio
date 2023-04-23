import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faTerminal, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { useEffect } from 'react'

export default function Skills(){
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
                    <div style={iconStyle}  className='button-30'> <a  href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={icons[i -1]} size='5x'/></a></div>
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