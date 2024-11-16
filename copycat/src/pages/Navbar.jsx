import React, { useState, useEffect } from 'react';
import '../css/Navbar.css'
//import HomeIcon from '@mui/icons-material/Home'; // Material-UI Home Icon

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://via.placeholder.com/100x40?text=Logo"
          alt="Logo"
        />
      </div>

      {/* Home Icon */}
      <div className="home">
        <span>Home</span>
      </div>

      {/* Dark Mode Button */}
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
