'use client';

import { motion } from 'framer-motion';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, logo, title, index, link, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`
      relative 
      ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
      flex items-center justify-center 
      min-w-[150px] sm:min-w-[170px] 
      h-[400px] sm:h-[500px] lg:h-[700px] 
      transition-[flex] duration-[0.7s] ease-out-flex 
      cursor-pointer
    `}
    onClick={() => handleClick(id)}
  >
    {/* Background Image */}
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {/* Inactive State */}
    {active !== id ? (
      <h3 className="font-semibold text-white absolute z-0 bottom-12 lg:bottom-20 sm:text-[22px] text-[16px] lg:text-[26px] lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 w-full p-4 sm:p-6 md:p-8 flex flex-col justify-start bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-12 sm:w-14 h-12 sm:h-14 rounded-[24px] glassmorphism mb-4 sm:mb-6 text-xl sm:text-2xl text-white`}>
          {logo}
        </div>
        <a href={link} rel="noreferrer" target="_blank">
          <p className="font-normal flex gap-2 sm:gap-4 items-center text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-white uppercase">
            <span className="font-bold underline">Visit the website</span>
            <BsFillArrowUpRightCircleFill className="text-xl sm:text-2xl" />
          </p>
        </a>
        <h2 className="mt-4 sm:mt-6 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div >
);

export default ExploreCard;
