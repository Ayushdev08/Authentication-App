import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm.tsx';  
import LoginForm from './components/LoginForm.tsx';  
import './App.css';

const Navigation: React.FC = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li>
        <Link to="/signup" className="navbar-link">Sign Up</Link>
      </li>
      <li>
        <Link to="/login" className="navbar-link">Login</Link>
      </li>
    </ul>
  </nav>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">React Authentication</h1>
        </header>

        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
