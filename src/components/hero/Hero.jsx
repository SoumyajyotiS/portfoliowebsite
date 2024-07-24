import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Welcome to my Portfolio</motion.h2>
          <motion.h1 variants={textVariants}>
            I am Soumyajyoti Sarkar
          </motion.h1>
          <motion.h2 variants={textVariants}>An aspiring <motion.b whileInView={{color:"white"}}>UI/UX enthusiast</motion.b> and <motion.b whileInView={{color:"white"}}>Graphic Designer</motion.b>,  based off India</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://docs.google.com/document/d/1u1T1-3jx00KJUjYp6-uRKXnHX2ljEE1SwyUu2kyoFaE/edit?usp=sharing" target="_blank">
              Checkout my Resume!
              </a>
            </motion.button>
          </motion.div>
          <motion.text className="scrolldown">Scroll down to explore my portfolio </motion.text>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{ pointerEvents: 'none' }}
      >
        UI/UX Graphics Designer 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
