
export default function NavBar(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv,skillsDiv] = scrollDivs // * destructuring from an array
    return(
        <nav id="nav">
            <a  className="button-30"onClick={() => scrollToDiv(skillsDiv)}><span>Skills</span></a>
            <a className="button-30"><span>Projects</span></a>
            <a className="button-30"><span>Experience</span></a>
            <a className="button-30"><span>Contact</span></a>
        </nav>
    )
}