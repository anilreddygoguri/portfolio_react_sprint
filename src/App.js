import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route element={<><Header /><Outlet /></>}>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
