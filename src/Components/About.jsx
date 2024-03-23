import Profile from "../Assets/animatedProfile.png"

export default function About(){

    return(
        <>

            <div className="about--container fullScreen" id="ABOUT">

                <div id="about--container--wrapper">
                    <img id="about--container--profile" src={Profile} />

                    <span id="about--container--description">
                        <b style={{fontSize:"24px", fontWeight:"600"}}>About Me:</b> <br></br> Hello! I'm Mekhi Hart. I'm a first-generation immigrant and student. I immigrated from the Philippines when I was 13 for better opportunities. Bringing my ideas to life is what inspired me to pursue Computer Science.
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