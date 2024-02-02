import Wave from 'react-wavify';
import './projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from '../card/card';
import Arabic from './arabic.png';
import Weather from './weather.png';
import Pos from './pos.png';
import Movies from './movies.png';
function Projects() {
  const projects=[
    {
      title:'Arabic Guides',
      description:'A website that provides guides for Arabic language learners.',
      img:Arabic,
      link:'https://arabicguidedemo.web.app/'
    },
    {
      title:'Get Movies',
      description:'A website that allows you to search for movies ',
      img:Movies,
      link:'https://getmoviesdemo.web.app/'
    },
    {
      title:'Weather App',
      description:'A website where you can check the weather of any city and save it to your favorites.',
      img:Weather,
      link:'https://wheathercheck-fc0ae.web.app/'

    },
    {
      title:'Point of Sale',
      description:"A website that allows you to manage your store's cash register. \nlogin: admin \n password: admin",
      img:Pos,
      link:'https://pointofsaledemo-6e0d2.web.app/'
    } 


  ]
  return (
    <>
    <div id='projects' className="project-section">
      <ScrollAnimation animateIn="animate__fadeIn">
          <h1  className='prj-heading'>Projects</h1>
      </ScrollAnimation>
      <div className='prj-card-container d-flex justify-content-center'>
      { projects.map((project)=>{
          return(
            <ScrollAnimation animateIn="animate__fadeIn">
              <Card img={project.img} title={project.title} description={project.description} link={project.link}    />
            </ScrollAnimation>
          )
        })}
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

export default Projects;
