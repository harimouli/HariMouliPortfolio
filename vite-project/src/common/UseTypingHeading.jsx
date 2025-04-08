 
 import { useEffect, useState } from 'react';
 import {motion} from "framer-motion"
 import styles from "../sections/Hero/HeroStyles.module.css"
 export const UseTypingHeading = ({text, speed}) => {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(()=> {
        let index = 0;
        const interval = setInterval(()=> {
          if(index < text.length){
            setDisplayedText(prev => prev + text.charAt(index))
            index++;
          }
          else{
            clearInterval(interval);
          }
        
        }, speed);
        return ()=> clearInterval(interval);
    }, [text])
  
  
    return (
      <motion.p 
      className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
      </motion.p>
    )
  }