'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section id="blogs" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      {/* Blogs Text Section */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center items-start"
      >
        <TypingText title="| My Blogs" />
        <TitleText title={<>Feel free to read my Blogs</>} />

        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="knowMore"
          className="w-full max-w-[500px] sm:w-[90%] sm:h-[90%] h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
