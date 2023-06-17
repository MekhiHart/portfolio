import Profile from "../Assets/ProfilePic.png"

export default function About(){

    return(
        <div className="about--container">
            <h2>
                About Me
            </h2>
            <div id="about--container--wrapper">
                <img id="about--container--profile" src={Profile} />
                <span>I am a first-generation student that immigrated in the United States from the Philippines.<br/><br/>
                 Going through the struggle of adapting into a new country developed my tenacity to 
                 solve challenging problems that compliments my skills as a Software Engineering
                 <br/><br/> However when I'm not working on a project, I love cooking food that I find in Instagram 
                 with my partner
                  </span>
  
            </div>
        </div>

    )
}