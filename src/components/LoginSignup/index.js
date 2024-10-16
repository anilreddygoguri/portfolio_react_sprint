import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';


import './loginsignup.css'

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  // Separate error and success states for login and registration
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [registerErrorMsg, setRegisterErrorMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Separate error display control for login and registration
  const [showLoginError, setShowLoginError] = useState(false);
  const [showRegisterError, setShowRegisterError] = useState(false);
  
  // State to control checkbox
  const [showCheckBox, setShowCheckBox] = useState(false);


  useEffect(() => {
    // Check if the user is already logged in
    const token = Cookies.get('jwt_token');
    if (token) {
      navigate('/home'); // Redirect to home if logged in
    }
  }, [navigate]);

  const registerLink = () => {
    setAction('active');
    setLoginErrorMsg('');
  };

  const loginLink = () => {
    setAction('');
    setRegisterErrorMsg('');
    setSuccessMessage('');
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const resetLoginForm = () => {
    setLoginData({ username: '', password: '' });
  };

  // Reset registration form, including checkbox
  const resetRegisterForm = () => {
    setRegisterData({ username: '', email: '', password: '' });
    setShowCheckBox(false); // Reset checkbox to unchecked
  };

  const onLoginSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    });
    navigate('/home', { replace: true });
    setShowLoginError(false); // Reset login error state on success
  };

  const onLoginSubmitFailure = (errorMessage) => {
    setLoginErrorMsg(errorMessage);
    setShowLoginError(true);
  };

  const onRegisterSubmitFailure = (errorMessage) => {
    setRegisterErrorMsg(errorMessage);
    setShowRegisterError(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    const userDetails = { username, password };

    try {
      const url = 'https://register-login-apis.onrender.com/api/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        onLoginSubmitSuccess(data.jwt_token);
      } else {
        onLoginSubmitFailure(data.login_msg);
      }
    } catch (error) {
      onLoginSubmitFailure('An error occurred during login. Please try again.');
    }

    resetLoginForm(); // Clear login form
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = registerData;
    const userDetails = { username, email, password };

    try {
      const response = await fetch('https://register-login-apis.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.register_msg); // Display success message
        setShowRegisterError(false); // Hide error message
      } else {
        onRegisterSubmitFailure(result.register_msg);
      }
    } catch (error) {
      onRegisterSubmitFailure('An error occurred during registration. Please try again.');
    }

    resetRegisterForm(); // Reset form, including checkbox
  };

  // Handle checkbox state change
  const handleCheckBoxChange = () => {
    setShowCheckBox(!showCheckBox); // Toggle checkbox state
  };

  return (
    <div className="wrapper">
      <div className={`container ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            {showLoginError && <p className="error-message">{loginErrorMsg}</p>}
            <div className="register-link">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); registerLink(); }}>
               Register
                </a>

              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={registerData.username}
                onChange={handleRegisterChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input 
                  type="checkbox" 
                  required 
                  checked={showCheckBox} 
                  onChange={handleCheckBoxChange} 
                /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {showRegisterError && <p className="error-message">{registerErrorMsg}</p>}
            <div className="register-link">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); loginLink(); }}>
                    Login
                </a>

              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
