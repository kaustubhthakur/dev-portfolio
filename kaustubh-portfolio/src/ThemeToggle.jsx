import React, { useState } from 'react';
import './ThemeToggle.css'; // Make sure to include any specific styles for the toggle button

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'light-blue' : 'light';
    setTheme(newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Light Blue' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
