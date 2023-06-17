import Profile from "../Assets/ProfilePic.png"

export default function About(){

    return(
        <>
            <div className="about--container fullScreen" id="ABOUT">
                <h2>
                    About Me
                </h2>
                <div id="about--container--wrapper">
                    <img id="about--container--profile" src={Profile} />
                    <span>I am a first-generation student that immigrated in the United States from the Philippines.<br/><br/>
                    Adapting into a new country developed my tenacity to 
                    solve challenging problems that supports my skills as a Software Engineering.
                    <br/><br/> However when I'm not working on a project, I love cooking trending recipies that I find in Instagram 
                    with my partner.
                    </span>
    
                </div>
            </div>

            <div class="shape--divider--1 divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </>

    )
}