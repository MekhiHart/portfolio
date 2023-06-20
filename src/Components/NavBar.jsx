
export default function NavBar(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv, aboutDiv, skillsDiv,projectsDiv,contactDiv] = scrollDivs
    return(
        <nav id="nav">
            <a  className=""onClick={() => scrollToDiv(aboutDiv)}><span>About</span></a>
            <a  className=""onClick={() => scrollToDiv(skillsDiv)}><span>Skills</span></a>
            <a className=""onClick={() => scrollToDiv(projectsDiv)}><span>Projects</span></a>
            <a className=""onClick={() => scrollToDiv(contactDiv)}><span>Contact</span></a>
        </nav>
    )
}