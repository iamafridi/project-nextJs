'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-4 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Hero Heading */}
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          SOFTWARE
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>ENGINEER</h1>
        </motion.div>
      </div>

      {/* Hero Image or Future Banner */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full -mt-[12px]"
      >
        {/* Optional image background or gradient */}
        {/* <img
          src="/portfolio.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[450px] object-cover rounded-tl-[140px] z-10 relative"
        /> */}

        {/* Call-to-scroll button */}
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/mouse.png"
              alt="scroll down"
              className="sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] object-contain rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
