import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home(){
    return (

        <div className="home--container">
            <h1>Hello! I'm Mekhi Hart Dela Cruz</h1>
            <h2>I am a Full-Stack Developer based in Long Beach</h2>

            <div className="home--links">
                
                <a className="home--icon" href="https://www.linkedin.com/in/mekhihart-delacruz/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/> </a>
                <a className="home--icon" href="https://github.com/MekhiHart" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>

    )
}