export default function Skills(props:any){

    console.log("Skikksss: ", props.skills.frontEnd)

    const createSkills = (skills: Array<String>) => {
        const skillsDiv = []
        for(let skill of skills){
            console.log("Skills: ", skill)
            skillsDiv.push(
                <li>{skill}</li>
            )
        }
        return <ul>{skillsDiv}</ul>
    }

    // console.log("Creating SkillllsslslslL: ",createSkills(props.skills))
    return(
        <>
            {createSkills(props.skills.frontEnd)}
            {createSkills(props.skills.backEnd)}
            {createSkills(props.skills.software)}
        </>
    )
}