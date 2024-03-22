import React from 'react'
import './style.css';




const Navbar = () => {

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-* ">
    <div class="container-fluid ml-auto">
      
      <div className='port'>Portfolio</div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <button className='btn'>Introduction</button>
        <button className='btn'>Work</button>
        <button className='btn'>Education</button>
        <button className='btn'>Acheivements</button>
        <button className='btn'>Contact</button>
         
        </div>
      </div>
    </div>
  </nav>
  
  </>
  
  );
}

export default Navbar
