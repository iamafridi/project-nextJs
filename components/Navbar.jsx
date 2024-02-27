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
    <div className={`${styles.innerWidth}  mx-auto flex justify-between gap-8`}>
      <img
        src="/favicon.gif"
        alt="search"
        className="w-[34px] h-[34px] object-contain hidden lg:flex"
      />
      <Link href="/"> <h2 className="font-extrabold text-[24px] leading-[30px] text-white  text-center">AFRIDI HERE</h2>
      </Link>
      <img
        src="/335424269_1850020715365747_153488791497726809_n-removebg-preview-removebg-preview.png"
        alt="search"
        className="w-[34px] h-[34px] object-contain lg:hidden"
      />
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <p className="lg:flex lg:flex-col hidden  md:items-center text-xs flex-row gap-3 text-center text-white justify-start md:flex-row">
        <div className="text-xs font-medium italic flex flex-row gap-6 items-center">
          <p>Email : afridiakbarifty@gmail.com </p>
          <p>Contact : 01788933203</p>
        </div>
        <div className="flex flex-row gap-5 mb-2">
          <div className="flex flex-row gap-8 items-center">
            <Link href="https://www.linkedin.com/in/iamafridi/" target="_blank"><CiLinkedin className="text-white text-2xl mb-1" /> LinkedIn</Link>
            <Link href="https://github.com/iamafridi" target="_blank"><FaGithub className="text-white text-2xl mb-1" />Github</Link>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Link href="https://iamafridi-portfolio.netlify.app/" target="_blank"><GrThreeDEffects className="text-white text-2xl mb-1" />3D Portfolio</Link>
            <Link href="https://iamafridi.medium.com/" target="_blank"><FaMedium className="text-white text-2xl" />Blog</Link>
          </div>
        </div>
      </p>
    </div>
  </motion.nav>
);

export default Navbar;
