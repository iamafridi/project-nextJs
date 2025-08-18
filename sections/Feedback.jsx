'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      {/* Feedback Text */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 lg:max-w-[400px] flex flex-col justify-end bg-gradient-to-br from-purple-600 via-indigo-500 to-pink-500 sm:p-8 p-4 rounded-2xl border border-gray-700 relative"
      >
        <div className="feedback-gradient absolute inset-0 rounded-2xl opacity-20 pointer-events-none" />
        <div>
          <h4 className="font-bold text-white sm:text-[32px] text-[24px] leading-tight sm:leading-[40px]">
            Afridi
          </h4>
          <p className="mt-2 font-normal text-white sm:text-[18px] text-[14px] sm:leading-[22px] leading-[18px]">
            MERN Stack Developer | Undergrad Computer Science
          </p>
        </div>
        <p className="mt-6 font-normal text-white sm:text-[20px] text-[16px] sm:leading-[28px] leading-[22px]">
          Hello Good People, I am Afridi — a MERN Stack developer from Bangladesh. Currently pursuing my B.Sc in Computer Science and Engineering. Beyond coding, I channel my passion for technology into writing engaging blogs and sharing insights from my journey in web development.
          <br /><br />
          Let's Connect and build something exciting.<br />
          Happy Coding<br /><br />
          Afridi 😊⭐
        </p>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src="/dp.jpg"
          alt="MyImage"
          className="w-full max-w-[500px] lg:h-[610px] h-auto min-h-[250px] object-cover rounded-2xl"
        />
      </motion.div>

      {/* Decorative Mouse Image */}
      <motion.div
        variants={zoomIn(0, 4, 1)}
        className="hidden lg:block absolute -left-10 top-3"
      >
        <img
          src="/mouse.png"
          alt="directionStamp"
          className="w-[120px] lg:w-[155px] h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
