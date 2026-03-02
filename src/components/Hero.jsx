import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import sharathImg2 from "/assets/sharath2.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className={styles.imageWrapper}>
          <img
            src={sharathImg2}
            alt="Sharath Chandra"
            className={styles.heroImg}
          />
        </div>

        {/* Name */}
        <h1 className={styles.name}>
          R. Sharath Chandra
        </h1>

        {/* Roles */}
        <h2 className={styles.roles}>
          AI Engineer • ML Engineer • Full Stack Developer
        </h2>

        {/* Description */}
        <p className={styles.description}>
          I build intelligent AI-powered systems and scalable full-stack
          applications. Passionate about Artificial Intelligence,
          Machine Learning, and solving real-world problems with
          cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;