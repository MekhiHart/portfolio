export default function Contact(props){

    return(
        <div className="contact--wrapper" id="CONTACT" >
            <h1>Contact Me</h1>
            <form className="contact--form">
                <input placeholder="Subject" type="text" className="contact--heading"></input>
                <input placeholder="Name" type="text" className="contact--heading"></input>
                <input placeholder="Email" type="text" className="contact--heading"></input>
                <textarea placeholder="Message" type="text" className="contact--message"></textarea>
            </form>
        </div>
    )

}