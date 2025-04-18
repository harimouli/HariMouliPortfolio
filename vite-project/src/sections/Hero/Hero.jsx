import { UseTypingHeading } from '../../common/UseTypingHeading';
import styles from './HeroStyles.module.css';
import officialProfile from "../../assets/officialProfile.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from "../../assets/resume.pdf";

import { useTheme } from '../../common/ThemeContext';
import leetcodeDark from "../../assets/leetcode-dark.svg"
import leetcodeLight from "../../assets/leetcode.svg"
import { heroDescription } from '../../common/infoText';




function Hero() {

  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === 'dark' ? leetcodeDark : leetcodeLight
  
  return (
    <section id = "hero" className = {styles.container}>
        <div className = {styles.colorModeContainer}>
        <img 
            className= {styles.colorMode} 
            src = {themeIcon} 
            alt = "Color mode icon"
            onClick={toggleTheme}
            />  
            <img className={styles.hero} src={officialProfile} alt="Profile picture of Hari Mouli"  />
        </div>
        <div className={styles.info}>
                  <h1 className = {styles.heroname}>
                    Hari Mouli
                  
                    Muthyala 
                  </h1>
                  
                  <h2 className= {`${styles.rolename} font-bold hover:shadow` }>
                    Full Stack 
                     Developer
                  </h2>
         
          <span className='mt-1 mb-2' >
          <a  href="https://x.com/MouliTheEagle" target="_blank" className="transition-all duration-200 hover:scale-180">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank" className="transition-all duration-200 hover:scale-180">
            <img src={githubIcon} alt="Github icon"  />
          </a>
          <a href="https://www.linkedin.com/in/muthyalaharimouli/" target="_blank" className="transition-all duration-200 hover:scale-180 hover:shadow-amber-100">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://leetcode.com/u/MuthyalaHariMouli/" target="_blank" className="transition-all duration-200 hover:scale-180 ">
            <img src={leetcodeIcon} alt="leetcode icon" />
        
          </a>
         
        </span>
      
          <UseTypingHeading text={heroDescription} speed={90}/>
        <a href = {resume} download={true} className="transition-all duration-100 hover:scale-120  hover:shadow-white"> 
            <button>
                    Resume
            </button>
        </a>
       </div>
    </section>
  )
}
export default Hero;