'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto border border-slate-100 p-6 rounded-xl ${styles.flexCenter} flex-col`}
    >
      {/* Section Title */}
      <TypingText title="| About Me" textStyles="text-center" />

      {/* About Content */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-4 font-normal text-[16px] sm:text-[18px] leading-relaxed text-center text-slate-50 max-w-3xl"
      >
        I am a <span className="font-semibold text-white">Software Engineer</span>
        with hands-on experience in <span className="font-semibold text-white">Full-stack(MERN) development</span>,
        responsive design, and AI-powered applications. My journey began with
        <span className="font-semibold text-white"> C/C++</span>, building a strong foundation in
        <span className="font-semibold text-white"> problem-solving, OOP, and data structures</span>,
        before moving into modern web technologies.
        <br /><br />
        I’ve worked as a <span className="font-semibold text-white">Frontend Developer at Growwr</span>,
        building responsive, user-friendly websites, and as a
        <span className="font-semibold text-white"> MERN Stack Developer at TNL Esports</span>,
        where I created systems for project management, recruitment, and scheduling.
        Most recently, I completed a <span className="font-semibold text-white">Software Engineering Fellowship
          at Headstarter AI</span>, where I delivered high-quality AI-driven projects and
        contributed to open source.
        <br /><br />
        My technical expertise spans <span className="font-semibold text-white">React, Next.js, Node.js,
          Express, MongoDB, Tailwind CSS, and Framer Motion</span>, with additional
        experience in <span className="font-semibold text-white">Firebase, Stripe, and AI/NLP integrations</span>.
        I am passionate about solving real-world problems, continuously learning, and
        building applications that blend <span className="italic">functionality with creativity</span>.
        <br /><br />
        <span className="italic text-slate-300">Let’s build something impactful 🚀</span>
      </motion.p>

      {/* Scroll Arrow */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-4 h-6 sm:w-5 sm:h-7 object-contain mt-6 opacity-80 hover:opacity-100 transition"
      />
    </motion.div>
  </section>
);

export default About;
