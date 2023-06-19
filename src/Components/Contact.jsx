export default function Contact(props){
    const {formData, handleFormChange, submitForm} = props
    const {subject,name,email, message} = formData

//<input value={subject} placeholder="Subject" name="subject" type="radio" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
    return(
        <div className="contact--wrapper fullScreen" id="CONTACT" >
            <h1>Contact Me</h1>
            <form className="contact--form" onSubmit={(event) => submitForm(event)}>

                <select name="subject" value={subject} onChange={(event) => handleFormChange(event)}>
                    <option value="1" hidden>Select a Subject</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Personal Message">Personal Message</option>
                </select>
                
                <input value={name} placeholder="Name" type="text" name="name" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <input value={email} placeholder="Email" type="text" name="email" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <textarea value={message} placeholder="Message" type="text"name="message" className="contact--message" onChange={(event) => handleFormChange(event)}/>
                <input type="submit" />
            </form>
        </div>
    )

}