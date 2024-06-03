// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import './components/Navbar.css';
import './components/Sidebar.css';
import './components/MainContent.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${mode}`}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Sidebar mode={mode} />
      <MainContent />
    </div>
  );
}

export default App;
