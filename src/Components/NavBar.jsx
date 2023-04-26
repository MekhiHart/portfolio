
export default function NavBar(props){
    const {scrollToDiv, scrollDivs} = props
    const [skillsDiv] = scrollDivs
    return(
        <nav id="nav">
            <a  className="button-30"onClick={() => scrollToDiv(skillsDiv)}>Skills</a>
            <a className="button-30">Experience</a>
            <a className="button-30">Projects</a>
            <a className="button-30">Contact</a>
        </nav>
    )
}