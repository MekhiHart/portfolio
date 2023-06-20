import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faFile} from '@fortawesome/free-solid-svg-icons'
import starShark from "../Assets/Star_Shark.png"
import loadingShark from "../Assets/loadingShark.png"
import { Link } from "react-router-dom"

export default function Contact(props){
    const availableFormStates = ["Not Sent", "Sending","Successful","Failure"]
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv] = scrollDivs
    const {formData, handleFormChange, submitForm} = props
    const {subject,name,email, message} = formData
    const [isInvalidSubject, setIsInvalidSubject] = useState(false)
    const [formState,setFormState] = useState("Not Sent")

    const invalidMessage = (
        <div id="contact--invalidMessage">
            Please fill out this field.
        </div>
    )

    const formComponent = (
        <>
            <h1 style={{color:"white", fontWeight:"600"}}>Contact Me</h1>
            <form className="contact--form" onSubmit={(event) => submitForm(event,setIsInvalidSubject, formState, setFormState)}>
                <select id="contact--subject" required name="subject" value={subject} onChange={(event) => handleFormChange(event,setIsInvalidSubject)}>
                    <option value="1" hidden>Select a Subject</option>
                    <option value="General Message">Personal Message</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Feedback">Feedback or Suggestions</option>
                    <option value="Other">Other</option>
                </select>
                {isInvalidSubject && invalidMessage}

                <input required value={name} placeholder="Name" type="text" name="name" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <input required value={email} placeholder="Email" type="text" name="email" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <textarea required value={message} placeholder="Message" type="text"name="message" className="contact--message" onChange={(event) => handleFormChange(event)}/>

                <input type="submit" id="contact--submit" className="button-30 project--source" value="Submit Message" />
            </form>
        </>
    )

    const loadingDiv = (
        
        <>
            <img className="shark--asset" src={loadingShark} style={{width:"160px", height:"140px"}} />
                <h2 className="form--state">
                    Loading 
                    <span class="dot1">.</span>
                    <span class="dot2">.</span>
                    <span class="dot3">.</span>
                </h2>
                
        
        </>


    )

    const successfulDiv = (
        <>
            <img className="shark--asset afterSendingForm" src={starShark} style={{width:"140px", height:"160px"}}/>
            <h2 className="form--state" style={{color:"white"}}>Message was successfully sent to Mekhi!</h2>
        </>

    )

    const unsuccsessfulDiv = (
        <div>Email Not Sent</div>
    )

//<input value={subject} placeholder="Subject" name="subject" type="radio" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
    return(
            <div className="contact--wrapper" id="CONTACT" >
                {formState === "Not Sent" && formComponent }
                {formState === "Sending" && loadingDiv}
                {formState === "Successful" && successfulDiv }
                {formState === "Unsuccsessful" &&  unsuccsessfulDiv}

                <div id="FOOTER">
                    <FontAwesomeIcon onClick={() => scrollToDiv(heroDiv)} style={{color:"white"}} className="popUp--header--icon" icon={faAngleUp} size='2x'/>

                    <div className="hero--links">
                        <a href="https://github.com/MekhiHart" target='_blank'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                        <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                        <Link to="/Resume" id="resume"><FontAwesomeIcon icon={faFile} size='2x'/><span style={{marginLeft:"3px"}} ></span></Link>
                    </div>
                </div>
            </div>

        

    )

}