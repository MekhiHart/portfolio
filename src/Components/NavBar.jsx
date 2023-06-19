
export default function NavBar(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv, aboutDiv, skillsDiv,projectsDiv,contactDiv] = scrollDivs
    return(
        <nav id="nav">
            <a  className="button-30"onClick={() => scrollToDiv(aboutDiv)}><span>About</span></a>
            <a  className="button-30"onClick={() => scrollToDiv(skillsDiv)}><span>Skills</span></a>
            <a className="button-30"onClick={() => scrollToDiv(projectsDiv)}><span>Projects</span></a>
            <a className="button-30"onClick={() => scrollToDiv(contactDiv)}><span>Contact</span></a>
        </nav>
    )
}