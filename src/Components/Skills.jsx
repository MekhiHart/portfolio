import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'

export default function Skills(){
    const buttons = []
    const names = ["Languages", "Frameworks", "Databases","Tools"]

    for (let i=1; i<5; i++){
        const style = i > 2 ? {paddingTop:"30px"} : {} // * adds gap between first row and second row buttons
        if(i > 2) console.log("style")
        buttons.push(
            (
                <div style={style}>
                    <a  href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
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