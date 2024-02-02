
import './App.css';
import Aboutme from './components/aboutme/abourme';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/project';
import Tech from './components/tech/tech';
import Contact from './components/contact/contact';
import Blogs from './components/blogs/blogs';
import SocialMediaIcons from './components/socialmedia/socialmedia';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
function App() {
  const options = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#45474b"]
      },
      shape: {
        type: "triangle"
      },
      opacity: {
        value: 0.7
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Particles options={options} init={particlesInit} />
      <SocialMediaIcons/>
      <Aboutme/>
      <Tech/>
      <Projects/>
      <Blogs/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
