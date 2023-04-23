
export default function NavBar(props){
    const {scrollToDiv, scrollDivs} = props
    const [heroDiv, skillsDiv] = scrollDivs
    console.log("scroll: ", scrollDivs)
    return(
        <nav id="nav">
            <a>Contact</a>
            <a>Projects</a>
            <a>Experience</a>
            <a onClick={() => scrollToDiv(skillsDiv)}>Skills</a>
        </nav>
    )
}