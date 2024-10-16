
import './skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const Skills = () => (
  <section id="skills">
    <div className="skills-section">
      <div className="skills-heading-container">
        <h1 className="skills-heading-text">Skills</h1>
      </div>
      <div className="skills-container">
        <h1 className="skills-name-text">Front End Technologies</h1>
        <ul className="skills-icons-container">
          <li className="skill-icon">
            <FaHtml5 className="html" aria-hidden="true" size={40} />
            <p className="skill-name">HTML5</p>
          </li>
          <li className="skill-icon">
            <FaCss3Alt className="css" aria-hidden="true" size={40} />
            <p className="skill-name">CSS3</p>
          </li>
          <li className="skill-icon">
            <FaBootstrap className="bs" aria-hidden="true" size={40} />
            <p className="skill-name">Bootstrap</p>
          </li>
          <li className="skill-icon">
            <FaJs className="js" aria-hidden="true" size={40} />
            <p className="skill-name">JavaScript</p>
          </li>
          <li className="skill-icon">
            <FaReact className="react" aria-hidden="true" size={40} />
            <p className="skill-name">React</p>
          </li>
        </ul>
      </div>

      <div className="skills-container">
        <h1 className="skills-name-text">Back End Technologies</h1>
        <ul className="skills-icons-container">
          <li className="skill-icon">
            <FaPython className="py" aria-hidden="true" size={40} />
            <p className="skill-name">Python</p>
          </li>
          <li className="skill-icon">
            <FaNodeJs className="node" aria-hidden="true" size={40} />
            <p className="skill-name">Node</p>
          </li>
          <li className="skill-icon">
            <FaDatabase className="sql" aria-hidden="true" size={40} />
            <p className="skill-name">SQL</p>
          </li>
        </ul>
      </div>

      <div className="skills-container">
        <h1 className="skills-name-text">Tools</h1>
        <ul className="skills-icons-container">
          <li className="skill-icon">
            <FaGithub className="github" aria-hidden="true" size={40} />
            <p className="skill-name">GitHub</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
 
);

export default Skills;
