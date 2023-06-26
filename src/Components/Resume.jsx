import { Link } from "react-router-dom"
import pdfFile from "../Assets/Software Engineer Resume.pdf"
export default function Resume(){
    const pdfLink = "https://drive.google.com/file/d/1YwB6NeqqyBizR8VyxQnYp7giN8ufp2LK/view"
    const embedLink = "https://drive.google.com/file/d/1YwB6NeqqyBizR8VyxQnYp7giN8ufp2LK/preview"
    return(
        <div className="resume--wrapper">
            <h1>Resume</h1>
            <iframe id="resume--pdf" src={embedLink}/>
            <div>
                <Link className="button-30 project--source" to="/">Back</Link>
                <a className="button-30 project--source" target="_blank" href={pdfLink}>Download Resume</a>
            </div>
        </div>
    )

}