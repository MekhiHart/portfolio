import { Route, Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav id="top">
            <h2>Mekhi Hart</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
                <li><Link to="/Contact">Contact Me</Link></li>
            </ul>
        </nav>
    )
    }