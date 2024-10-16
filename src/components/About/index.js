import AboutImage from '../../assets/images/about.jpg'
import './about.css'

const About=()=>(
<section id="about">
<div className="about-section">
    <div className="about-heading-container">
        <h1 className="about-heading-text">About</h1>
    </div>
    <div className="about-text-image-container">
        <div className='about-text-container'>
            <p className="about-description">Welcome to my portfolio! I am Anil Goguri, a passionate and detail-oriented Full-Stack Web Developer
            with extensive experience in both front-end and back-end technologies. My journey in web development began 
            with a curiosity for how websites work, which quickly turned into a fulfilling career.</p>
            <h1 className="mission-heading">My Mission:</h1>
            <p className="mission-description">My goal is to contribute to a dynamic team where I can utilize my problem-solving abilities,
            stay current with industry trends, and drive impactful projects that enhance user experience 
            and achieve business objectives.I am committed to continuous learning and strive to keep up-to-date
            with the latest advancements in web development.</p>
            <a href="/AnilResume.pdf" download="Anil_CV"><button className='download-button'>Download CV</button></a>
        </div>
        <div className="about-image-container">
            <img src={AboutImage} className="about-image"/>
        </div>
    </div>
</div>
</section>

)
export default About