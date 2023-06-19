export default function Contact(props){
    const {formData, handleFormChange, submitForm} = props
    const {subject,name,email, message} = formData

//<input value={subject} placeholder="Subject" name="subject" type="radio" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
    return(
        <div className="contact--wrapper fullScreen" id="CONTACT" >
            <h1>Contact Me</h1>
            <form className="contact--form" onSubmit={(event) => submitForm(event)}>

                <select required name="subject" value={subject} onChange={(event) => handleFormChange(event)}>
                    <option value="1" hidden>Select a Subject</option>
                    <option value="General Message">Personal Message</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Feedback">Feedback or Suggestions</option>
                    <option value="Other">Other</option>
                </select>
                
                <input required value={name} placeholder="Name" type="text" name="name" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <input required value={email} placeholder="Email" type="text" name="email" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <textarea required value={message} placeholder="Message" type="text"name="message" className="contact--message" onChange={(event) => handleFormChange(event)}/>
                <input type="submit" />
            </form>
        </div>
    )

}