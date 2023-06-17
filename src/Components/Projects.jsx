import ProjectsData from "../Data/projects.json"
export default function Projects(){

    const projects = ProjectsData.map(project => {

        const techStack = project.techStack.map(technology => {
            return <span className="project--technology">{technology}</span>
        })

        // conditionally renders collaborator description depending on size
        const collaboratorSize = project.collaborators.length
        const collaborators = project.collaborators.map((collaborator, index) => index === collaboratorSize - 1 ? collaborator : collaborator + ", ")


        return (
            <div className="project--component" id="PROJECTS">
                <div className="project--information">
                    <u><h3 style={{paddingLeft:"10px"}}>{project.projectName}</h3></u>

                    <div>
                        {techStack}
                    </div>

                    <div className="project--collaborators">
                        {collaboratorSize === 0 ? <b>Solo Project</b> : <><b>Collaborators: </b> {collaborators}</>}
                    </div>

                    <span className="project--description">{project.description}</span>

                    {project.note !== "" && <em className="project--note" style={{marginLeft: "10px"}}>Note:  {project.note} </em>}

                    <div className="project--link--wrapper" style={{display:"flex"}}>
                        {project.liveLink !== "" && <a className="project--source" target="_blank" href={project.liveLink}>See Live</a>}
                        {project.sourceCodeLink !== "" && <a className="project--source" target="_blank" href={project.sourceCodeLink}>Source Code</a>}
                    </div>
                </div>

                {project.youtubeLink !== "" && <iframe allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" src={project.youtubeLink} id="project--video"  height="360" frameborder="0"></iframe> }
                
            </div>
        )

})


    return (
        <div className="projects--container" id="PROJECTS">
            <h1>Projects</h1>
            {projects}
        </div>
    )
}