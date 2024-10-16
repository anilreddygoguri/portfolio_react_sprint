import './projectcard.css'

const ProjectCard=(props)=>{
const {projectDetails}=props;
const {name, technologies_used, url, git,hostedUrl,id }=projectDetails;
return(
   <li className="project-card-container" key={id}>
    <img src={url} alt="project_img" className="project-image"/>
    <div className="text-container">
    <h4 className="project-heading">{name}</h4>
    <ul className="tech-li-container">
      {technologies_used.map((eachTech)=>(
         <li className="tech-item" key={eachTech}>{eachTech}</li>
      ))}
    </ul>
    <div className="buttons-container">
    <a href={hostedUrl} rel="noreferrer"  target="_blank"><button className="visit-button">View</button></a>
    <a href={git} rel="noreferrer"  target="_blank"  ><button className="code-button">Code</button></a>
    </div>
    </div>
   </li>
)
}


export default ProjectCard;