import React from 'react';
import logo from '../images/logo.png';
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.header
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="logo"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
         <a href="/">       <img src={logo} alt="Logo" /></a>
            </motion.div>

            <motion.nav
                className="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="/">Home</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="/Genres">Genres</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="/Toprated">Top Rated</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="/contact">Merchandise</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="/About">About</a></motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}><a href="/Contact">Contact</a></motion.li>
                </ul>
            </motion.nav>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.1 }}
                transition={{ duration: 0.2 }}
            >
                Sign In / Join
            </motion.button>
        </motion.header>
    );
}

export default Header;
