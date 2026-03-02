import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import s5Img from "/assets/sharath2.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "TechProfiles",
    "Contact",
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo & Title */}
      <div className={styles.name}>
        <motion.img
          src={s5Img}
          alt="logo"
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
        />
        <a href="/" className={styles.title}>
          <span className={styles.nameHighlight}>Sharath</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className={styles.mobileMenuItems}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;