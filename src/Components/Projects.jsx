import ProjectsData from "../Data/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonDigging} from '@fortawesome/free-solid-svg-icons'

export default function Projects(){

    const projects = ProjectsData.map(project => {

        const isConfidential = project.isConfidential
        const techStack = project.techStack.map(technology => {
            const style = isConfidential ? {backgroundColor: "#E32636"} : {}
            return <span style={style} className="project--technology">{technology}</span>
        })

        // conditionally renders collaborator description depending on size
        const collaboratorSize = project.collaborators.length
        const collaborators = project.collaborators.map((collaborator, index) => index === collaboratorSize - 1 ?" and " + collaborator : collaborator + ", ")

        const constructionDiv = (
            <div id="project--video" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                <FontAwesomeIcon icon={faPersonDigging} size='2x'/>
                <h2>In Development</h2>
            </div>
        )


        return (
            <div className="project--component" id="PROJECTS">
                <div className="project--information">
                    <h3 style={{paddingLeft:"10px", fontSize:"24px"}}><u>{project.projectName}</u></h3>

                    <h3 style={{marginLeft:"12px"}}>Tech Stack:</h3>
                    <div style={{display:"flex", flexWrap:"wrap"}}>
                        {techStack}
                    </div>

                    <div className="project--collaborators">
                        {collaboratorSize === 0 ? <b>Solo Project</b> : <><b>Collaborators: </b> {collaborators}</>}
                    </div>

                    <span className="project--description">{project.description}</span>

                    {project.note !== "" && <em className="project--note" style={{marginLeft: "10px"}}>Note:  {project.note} </em>}

                    <div className="project--link--wrapper" style={{display:"flex"}}>
                        {project.liveLink !== "" && <a className="project--source button-30" target="_blank" href={project.liveLink}>See Live</a>}
                        {project.sourceCodeLink !== "" && <a className="project--source button-30" target="_blank" href={project.sourceCodeLink}>Source Code</a>}
                        {project.liveLink === "" && <a className="project--source button-30" target="_blank" href={project.companyWebsite}>Company Website</a>} 

                    </div>
                </div>

                {project.youtubeLink === "" ? constructionDiv : <iframe allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" src={project.youtubeLink} id="project--video"   frameborder="0"></iframe> }
                
            </div>
        )

})


    return (
        <>

            <div class="shape--divider--2 divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className="projects--container" id="PROJECTS">
                <h1>Featured Projects</h1>
                {projects}
            </div>
        
        </>
    )
}