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

                </div>
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