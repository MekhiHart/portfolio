import LinkedIn from '../Assets/LinkedIn.png'
export default function Home(){
    return (

        <div className="home--container">
            <h1>Hello! I'm Mekhi Hart Dela Cruz</h1>
            <h2>I am a Full-Stack Developer based in Long Beach</h2>

            <div className="home--links">
                <a href="https://www.linkedin.com/in/mekhihart-delacruz/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/MekhiHart" target="_blank" rel="noreferrer"> <img src={LinkedIn}/></a>
            </div>
        </div>

    )
}