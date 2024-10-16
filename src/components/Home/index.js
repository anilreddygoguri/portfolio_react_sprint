import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Ensure you import js-cookie to use Cookies
import profileImage from '../../assets/images/profile.jpg';
import './home.css';

const Home = () => {
const token = Cookies.get('jwt_token');
if (!token) {
  return <Navigate to="/" />;
}
  return (
    <>
    <section id="home">
      <div className="hero-section">
        <div className="name-profile-container">
          <div className="hero-container">
            <img src={profileImage} className="hero-image" alt="profile_img" />
          </div>
          <div className="names-container">
            <h1 className="hero-text"><span className="hello-text">Hello</span> I'm</h1>
            <h1 className="hero-name">Anil Goguri</h1>
            <p className="role">----Full Stack Developer</p>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/anil-goguri/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin linkedin-icon"></i>
              </a>
              <a href="https://github.com/anilreddygoguri" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github github-icon"></i>
              </a>
            </div>
          </div>        
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
