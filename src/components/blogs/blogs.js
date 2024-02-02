import Wave from 'react-wavify';
import './blogs.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from '../card/card';
import Hadoop from './hadoop.png';

function Blogs() {
  const Blogs=[
    {
      title:'How to install hadoop on ubuntu',
      description:'Learn how to install hadoop on ubuntu.',
      img:Hadoop,
      link:'https://howtohadoop2.wordpress.com/'
    },
    {
      title:'How to run you first mapreduce job',
      description:'Learn how to run you first mapreduce job.',
      img:Hadoop,
      link:'https://hadoop6.wordpress.com/'

    }

  ]
  return (
    <>
    <div id='blogs' className="blog-section">
      <ScrollAnimation animateIn="animate__fadeIn">
          <h1  className='blog-heading'>Blogs</h1>
      </ScrollAnimation>
      <div className='blog-card-container d-flex justify-content-center'>
      { Blogs.map((project)=>{
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

export default Blogs;
