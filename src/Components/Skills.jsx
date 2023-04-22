import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase,faScrewdriverWrench,faTerminal} from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'


export default function Skills(){
    const buttons = []
    const names = ["Languages", "Frameworks", "Databases","Tools"]
    const icons = [faTerminal, faReact, faDatabase, faScrewdriverWrench]
    const iconStyle ={
        border:"solid",
        
        
    }

    for (let i=1; i<5; i++){
        const style = i > 2 ? {paddingTop:"30px"} : {} // * adds gap between first row and second row buttons
        style.margin = "0 auto"
        if(i > 2) console.log("style")
        buttons.push(
            (
                <div style={style}>
                    <div style={iconStyle}> <a  href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={icons[i -1]} size='5x'/></a></div>
                    <h2>{names[i - 1]}</h2>
                </div>
            )
        )
    }
    return(
        <div className="skills--container">
            <h1>Technical Skills</h1>
            <div className="skills--grid">
                {buttons}
            </div>
        </div>
    )
}