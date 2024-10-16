import { useState, useEffect } from 'react'; // Add useEffect for initial theme setup
import { FaTimes, FaBars, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa'; // Import theme icons
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useState('light'); // Default to light theme
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  const handleLogout = () => {
    Cookies.remove('jwt_token'); // Remove JWT token from cookies
    navigate('/'); // Navigate to home page
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to local storage
    document.body.className = newTheme; // Apply theme to body
  };

  useEffect(() => {
    // Load theme from local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; // Apply saved theme
  }, []);

  return (
    <header>
      <nav>
        <Link to="/home">
          <div className="logo">A.</div>
        </Link>
        <div className={`sidebar ${clicked ? 'nav active' : 'nav'}`}>
          <button onClick={handleClick} className="icons-button fa-times-icon">
            <FaTimes size={24} color="white" />
          </button>
          <ul className="nav-items-container">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <Link to={`/${item}`} key={item} onClick={handleClick}>
                <li className={location.pathname === `/${item}` ? 'active' : ''}>
                  {item.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="icons">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        <div className="mobile-view">
          <button onClick={handleClick} className="icons-button">
            <FaBars size={22} color="black" />
          </button>
          <button onClick={handleLogout} className="mobile-logout-button">
            <FaSignOutAlt size={22} color="black" />
          </button>
        </div>
          {/* Theme toggle button */}
          <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? <FaMoon size={22} color="black" /> : <FaSun size={22} color="black" />}
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
