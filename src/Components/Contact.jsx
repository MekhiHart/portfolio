export default function Contact(props){
    const {formData, handleFormChange, submitForm} = props
    const {subject,name,email, message} = formData


    return(
        <div className="contact--wrapper fullScreen" id="CONTACT" >
            <h1>Contact Me</h1>
            <form className="contact--form" onSubmit={(event) => submitForm(event)}>
                <input value={subject} placeholder="Subject" name="subject" type="text" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <input value={name} placeholder="Name" type="text" name="name" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <input value={email} placeholder="Email" type="text" name="email" className="contact--heading" onChange={(event) => handleFormChange(event)}/>
                <textarea value={message} placeholder="Message" type="text"name="message" className="contact--message" onChange={(event) => handleFormChange(event)}/>
                <input type="submit" />
            </form>
        </div>
    )

}