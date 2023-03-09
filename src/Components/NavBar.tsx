import { Route, Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav id="top">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
    }