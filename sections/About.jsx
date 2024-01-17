'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[16px] text-center text-secondary-white"
      >
        Hello! I'm Afridi, a driven Computer Science undergrad with a knack for
        <span className="font-extrabold text-white"> MERN (MongoDB, Express.js, React.js, Node.js) stack development.
        </span>
        With a deep enthusiasm for crafting efficient and user-centric web applications, I've honed my skills through hands-on projects and coursework.
        <br />
        🚀 Currently expanding my expertise in modern web technologies while pursuing my degree, I thrive on embracing new challenges and leveraging my coding prowess to create seamless, scalable, and visually captivating web experiences.
        <br />
        📝 Beyond coding, I channel my passion for technology into writing engaging blogs, sharing insights, tips, and experiences from my journey in the world of web development. Through my writing, I aim to inspire and educate others in the tech community.
        <br />
        🌐 Looking for opportunities to apply my skills, contribute to impactful projects, and collaborate with like-minded professionals in the field of web development. Let's connect and explore how we can innovate together!

        Happy Coding
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
