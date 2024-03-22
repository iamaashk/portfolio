import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js'; // Update the file name to match the actual file name
import Intro from './components/Introduction.js'; // Update the file name to match the actual file name

function App() {
  return (
    <>

      {/* Profile container*/}
      <div className="container-profile .example::-webkit-scrollbar">
        <Navbar/>
        <Intro></Intro>
      </div>

      {/* Projects container */}
      <div className="container-projects .example::-webkit-scrollbar">
      </div>
    </>
  );
}

export default App;
