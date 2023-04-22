
export default function NavBar(props){
    
    
    return(
        <nav id="nav">
            <a>Contact</a>
            <a>About</a>
            <a>Projects</a>
            <a>Experience</a>
            <a>Skills</a>
            {props.setNavBarIsRendered(true)}
        </nav>
    )
}