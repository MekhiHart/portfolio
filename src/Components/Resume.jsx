import { Link } from "react-router-dom"
import pdfFile from "../Assets/Software Engineer Resume.pdf"
export default function Resume(){
    return(
        <div className="resume--wrapper">
            <h1>Resume</h1>
            <iframe id="resume--pdf" src={pdfFile}/>
            <div>
                <Link className="button-30 project--source" to="/">Back</Link>
                <a className="button-30 project--source" target="_blank" href="https://drive.google.com/file/d/12Kqr3mP8Z75CRPphWRdP-PGQisb6zUsJ/view">Download Resume</a>
            </div>
        </div>
    )

}