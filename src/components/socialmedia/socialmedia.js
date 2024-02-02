import { BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { TbBrandFiverr } from 'react-icons/tb'
import './socialmedia.css'
const SocialMediaIcons = () => {
    const icons = [
      {
        icon: <BsLinkedin fontSize="2rem"/>,
        url: 'https://www.linkedin.com/in/mohammad-aosaf/',
      },
      {
        icon:<BsGithub fontSize="2rem"/>,
        url: 'https://github.com/Hertz-7',
      },
      {
        icon:<TbBrandFiverr fontSize="2rem"/>,
        url: 'https://www.fiverr.com/mohammad_aosaf',
      }
     
    ];
  
    return (
      <div className='social-icons'>
        {icons.map((icon) => (
            <a href={icon.url} className="social-icon">{icon.icon} </a>
        ))}
      </div>
    );
  };

  export default SocialMediaIcons