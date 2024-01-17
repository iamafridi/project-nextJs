'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="|Hire Me" textStyles="text-center" />
      <TitleText title={(
        <>
          Let's Connect and Build something amazing together
        </>
      )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-30 left-[45%] w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 right-[45%] w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-04.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-28 left-[65%] w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-24 left-[15%] w-[70px] h-[70ppx] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
