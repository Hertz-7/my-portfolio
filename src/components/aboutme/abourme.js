
import './aboutme.css';
import React from 'react';
import Me from './me.jpg';
import Resume from './my_cv.pdf'
import { Button } from 'react-bootstrap';
// import { colorify } from 'lottie-colorify';
// import Lottie from 'lottie-react';
// import SomeAnimation from './animation_lk882kc6.json';
import Wave from 'react-wavify';
// import ScrollAnimation from 'react-animate-on-scroll';
function Aboutme() {

//<Lottie className='animation'  animationData={colorify([ '#1b1b1d',[27, 27, 29],'#1b1b1d'], SomeAnimation)}></Lottie>
  return (
    <>
    <div  className="Aboutme">
      <div id='aboutme' className='aboutme-body'>
     
          <div div="display-img">
        <img className='aboutme-img' src={Me} alt='myimg'></img></div>
   
        <div className='aboutme-text'>
            <h1 className='heading' >Hi, I'm Aosaf</h1>
            <p>I'm a Frontend Developer based in Islamabad, Pakistan.</p>
            <p>I have a serious passion for creating intuitive, dynamic user experiences.</p>
            <p>I'm a Well-organised person, problem solver, independent employee with high attention to detail.</p><p>I am a Fan of MMA, outdoor activities, TV series and, of course, coding.</p>
            <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
         
        </div>
        
          <a href={Resume} download='Resume'>
          <Button variant='Dark' className='download-btn' type="button" >Download my Resume</Button>
          </a>
       
      </div>
      
    </div>
    <Wave mask="url(#mask)" fill="#1b1b1d" className='wave' >
        <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
            </mask>
           
        </defs>
    </Wave>
    
    </>
  );
}

export default Aboutme;
