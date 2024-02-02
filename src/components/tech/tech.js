
import './tech.css';
// import { colorify } from 'lottie-colorify';
import Lottie from 'lottie-react';
import cssAnimation from './css.json';    
import htmlAnimation from './html.json';
import jsAnimation from './js.json';
import reactAnimation from './react.json';
import Bootstrap from './icons8-bootstrap-logo-96.png';
import Wave from 'react-wavify';
import ScrollAnimation from 'react-animate-on-scroll';
function Tech() {
  return (
    <>
    <div id='tech' className="technologies">
    <ScrollAnimation animateIn="animate__fadeIn">
        <h1  className='tech-heading'>Technologies</h1>
    </ScrollAnimation>
        <div className='tech-container'>
            <ScrollAnimation animateIn="animate__fadeIn">
            <div className='tech-item'>
                <Lottie animationData={htmlAnimation} style={{width: 150, height: 150}}/>
                <h4>HTML</h4>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn">
            <div className='tech-item'>
                <Lottie animationData={cssAnimation} style={{width: 150, height: 150}}/>
                <h4>CSS</h4>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn">
            <div className='tech-item'>
                <Lottie className='js' animationData={jsAnimation} loop={false} style={{width: 100, height: 100}}/>
                <h4>JavaScript</h4>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn">
            <div className='tech-item'>
                <img className='bootstrap' src={Bootstrap} style={{width: 100, height: 100}} alt='bootstrap'/>
                <h4>Bootstrap</h4>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn">
            <div className='tech-item'>
                <Lottie animationData={reactAnimation} style={{width: 100, height: 100}}/>
                <h4>React</h4>
            </div>
            </ScrollAnimation>    
        </div>
        
    </div>
    <div>
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
    </div>
    </>
  );
}

export default Tech;
