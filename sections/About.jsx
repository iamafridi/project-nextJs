'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings}  relative z-10`}>
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
        className="mt-4 tracking-wider font-medium lg:text-[18px] text-[10px] leading-relaxed text-center text-slate-50 max-w-5xl"
      >
        I am a passionate <span className="font-semibold text-white">Software Engineer</span> currently pursuing my
        <span className="font-semibold text-white"> Bachelor's in Computer Science and Engineering</span> at East Delta University,
        with expertise in <span className="font-semibold text-white">Full-stack (MERN) development</span> and
        modern web technologies. My foundation in <span className="font-semibold text-white">Java, C/C++, OOP,
          and Data Structures</span> has shaped my problem-solving approach and technical thinking.
        <br /><br />
        I've gained valuable industry experience as a <span className="font-semibold text-white">Frontend Developer
          at Growwr (USA)</span>, where I developed and optimized React + TypeScript web pages with smooth animations
        and responsive design. I also completed a <span className="font-semibold text-white">Software Engineering
          Fellowship at Headstarter AI</span>, building interactive 3D portfolios and demonstrating rapid prototyping
        skills under tight deadlines.
        <br /><br />
        My technical arsenal includes <span className="font-semibold text-white">React.js, Next.js, TypeScript,
          Node.js, Express.js, MongoDB, and Tailwind CSS </span>, complemented by experience with
        <span className="font-semibold text-white"> Three.js, Framer Motion, Firebase, Stripe payments, and
          JWT authentication</span>. I've successfully delivered projects like
        <span className="font-semibold text-white"> Elara Travels</span> (a full-stack travel solution) and
        <span className="font-semibold text-white"> Phero-Arena</span> (a gaming platform), showcasing my ability
        to build secure, scalable applications.
        <br /><br />
        Beyond development, I'm a <span className="font-semibold text-white">two-time award winner</span> at
        EDU Engineering Days for AI applications and innovative presentations. I believe in continuous learning,
        creative problem-solving, and building applications that make a real impact.
        <br /><br />
        <span className="italic text-slate-300">Ready to turn ideas into exceptional digital experiences 🚀</span>
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