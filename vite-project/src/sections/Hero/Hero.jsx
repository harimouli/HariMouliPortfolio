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
import leetcode from "../../assets/leetcode.svg";
import { useTheme } from '../../common/ThemeContext';




function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id = "hero" className = {styles.container}>
        <div className = {styles.colorModeContainer}>
            <img className={styles.hero} src={officialProfile} alt="Profile picture of Hari Mouli" />
            <img 
            className= {styles.colorMode} 
            src = {themeIcon} 
            alt = "Color mode icon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
                  <h1>
                    Hari Mouli
                    <br />
                    Muthyala 
                  </h1>
                  <h2>
                    Full Stack Developer
                  </h2>

                  <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/muthyalaharimouli/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://leetcode.com/u/MuthyalaHariMouli/" target="_blank">
            <img src={leetcode} alt="leetcode icon" />
          </a>
        </span>
        <p className={styles.description}>

        Full-Stack Developer with expertise in scalable web applications, strong in Data Structures and Algorithms, now exploring AI/ML to build intelligent, data-driven solutions.
        </p>
        <a href = {resume} download={true}> 
            <button className="hover">
                    Resume
            </button>
        </a>
        </div>
    </section>
  )
}
export default Hero;