import ProjectCard from '../ProjectCard'
import './projects.css'

const projectsList=[

{
    id:1,
    url:'https://res.cloudinary.com/dlbmlvnw6/image/upload/v1725010863/Screenshot_2024-08-30_150046_s7y3ne.png',
    name:'Wikipedia Search Application',
    technologies_used:['HTML','CSS','JS'],
    git:'https://github.com/anilreddygoguri/Wikipedia-Search-Application',
    hostedUrl:'https://goguriwikipedia.ccbp.tech'
},
{
    id:2,
    url:'https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png',
    name:'Emoji Game',
    technologies_used:['React Js'],
    git:'https://github.com/anilreddygoguri/react-emojigame-app',
    hostedUrl:'https://anilemojigame.ccbp.tech/'
},
{
    id:3,
    url:'https://res.cloudinary.com/dlbmlvnw6/image/upload/v1725012624/Screenshot_2024-08-30_153930_vgxeye.png',
    name:'Generative AI',
    technologies_used:['Google Colab','Open AI','LangChain','Gradiao','PlayHT','Hugging Face'],
    git:'https://anilaichatbot.ccbp.tech/',
    hostedUrl:'https://anilaichatbot.ccbp.tech/',
},
{
    id:4,
    url:'https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747898/tigedepwdsf49rqgg4i0.png',
    name:'Netflix Clone',
    technologies_used:['React Js'],
    git:'https://github.com/anilreddygoguri/Netflix-Clone',
    hostedUrl:'https://anilgoguri07moviesclone.netlify.app'
},

]

const Projects=()=>(
<section id="projects">
    <div className="projects-section">
    <div className="Projects-heading-container">
        <h1 className="project-heading-text">Projects</h1>
    </div>
    <div className="projects-container">
        <ul className="projects-ul-container">
            {projectsList.map((eachProject)=>(
                <ProjectCard projectDetails={eachProject} key={eachProject.id} />
            ))}
        </ul>
    </div>
    </div>
</section>
)

export default Projects