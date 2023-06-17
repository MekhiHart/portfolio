import ProjectsData from "../Data/projects.json"
export default function Projects(){

    const projects = ProjectsData.map(project => (
        <h1>Hello</h1>
    ))



    return (
        <div className="projects--container" id="PROJECTS">
            <h1>Projects</h1>
        </div>
    )
}