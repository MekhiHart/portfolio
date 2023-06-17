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
            <div className="project--component">
                <div className="project--information">
                    <h3 style={{marginLeft:"10px"}}>{project.projectName}</h3>

                    <div>
                        {techStack}
                    </div>

                    <div className="project--collaborators">
                        {collaboratorSize === 0 ? <b>Solo Project</b> : <><b>Collaborators: </b> {collaborators}</>}
                    </div>

                    <span style={{marginLeft:"10px", marginTop:"10px"}}>{project.description}</span>

                    {project.note !== "" && <em style={{marginLeft: "10px"}}>Note:  {project.note} </em>}

                    <div style={{display:"flex"}}>
                        {project.liveLink !== "" && <a className="project--source" target="_blank" href={project.liveLink}>See Live</a>}
                        <a className="project--source" target="_blank" href={project.sourceCodeLink}>Source Code</a>
                    </div>
                </div>

                <iframe allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" src="https://www.youtube.com/embed/8gwzAvs_lgU?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.danny-berger.dev&amp;widgetid=1" id="project--video" width="640" height="360" frameborder="0"></iframe>
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