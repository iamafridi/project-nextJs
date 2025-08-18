'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { GrThreeDEffects } from 'react-icons/gr';
import { FaMedium } from 'react-icons/fa6';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} mt-2 py-4 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-4`}>
        {/* Logo */}
        <Link href="/">
          <h2 className="font-extrabold border-b-2 border-white px-6 py-2 rounded-full text-lg md:text-2xl text-white">
            AFRIDI
          </h2>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 text-white">
          <li><Link className="border border-slate-50 rounded-full px-3 py-1" href="/#about">About</Link></li>
          <li><Link className="border border-slate-50 rounded-full px-3 py-1" href="#contact">Contact</Link></li>
          <li><Link className="border border-slate-50 rounded-full px-3 py-1" href="#projects">Projects</Link></li>
          <li><Link className="border border-slate-50 rounded-full px-3 py-1" href="#skills">Skills</Link></li>
          <li><Link className="border border-slate-50 rounded-full px-3 py-1" href="#blogs">Blogs</Link></li>
        </ul>

        {/* Desktop Socials */}
        <div className="hidden lg:flex flex-row gap-8 items-center text-white text-sm">
          <Link href="https://www.linkedin.com/in/iamafridi/" target="_blank" className="flex items-center gap-1">
            <CiLinkedin className="text-xl" /> LinkedIn
          </Link>
          <Link href="https://github.com/iamafridi" target="_blank" className="flex items-center gap-1">
            <FaGithub className="text-xl" /> GitHub
          </Link>
          <Link href="https://iamafridi-portfolio.netlify.app/" target="_blank" className="flex items-center gap-1">
            <GrThreeDEffects className="text-xl" /> 3D Portfolio
          </Link>
          <Link href="https://iamafridi.medium.com/" target="_blank" className="flex items-center gap-1">
            <FaMedium className="text-xl" /> Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-inherit backdrop-blur-md rounded-lg p-4 space-y-4 text-center text-white">
          <ul className="flex flex-col gap-3">
            <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          </ul>
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            <Link href="https://www.linkedin.com/in/iamafridi/" target="_blank"><CiLinkedin className="text-2xl" /></Link>
            <Link href="https://github.com/iamafridi" target="_blank"><FaGithub className="text-2xl" /></Link>
            <Link href="https://iamafridi-portfolio.netlify.app/" target="_blank"><GrThreeDEffects className="text-2xl" /></Link>
            <Link href="https://iamafridi.medium.com/" target="_blank"><FaMedium className="text-2xl" /></Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
