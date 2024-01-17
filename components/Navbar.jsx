/* eslint-disable jsx-quotes */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { GrThreeDEffects } from 'react-icons/gr';
import { FaMedium } from 'react-icons/fa6';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/favicon.gif"
        alt="search"
        className="w-[34px] h-[34px] object-contain"
      />
      <Link href='/'> <h2 className="font-extrabold text-[24px] leading-[30px] text-white">AFRIDI HERE</h2>
      </Link>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <p className="flex flex-col gap-5 text-center text-white items-start justify-start  ">
        <Link href={'https://www.linkedin.com/in/iamafridi/'} target='_blank'><CiLinkedin className="text-white text-2xl mb-1" /> LinkedIn</Link>
        <Link href={'https://github.com/iamafridi'} target='_blank'><FaGithub className="text-white text-2xl mb-1" />Github</Link>
        <Link href={'https://iamafridi-portfolio.netlify.app/'} target='_blank'><GrThreeDEffects className="text-white text-2xl mb-1" />3D Portfolio</Link>
        <Link href={'https://iamafridi.medium.com/'} target='_blank'><FaMedium className="text-white text-2xl mb-1" />Blog</Link>

      </p>
    </div>
  </motion.nav>
);

export default Navbar;
