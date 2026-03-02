import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import sharathImg from "/assets/sharath.jpg";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className={styles.content}>
        {/* Image Section */}
        {/* <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={sharathImg}
            alt="Sharath Chandra"
            className={styles.aboutImage}
          />
        </motion.div> */}

        {/* Text Section */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.card}>
            <p>
              I am a passionate <span>AI & ML Engineer</span> and
              <span> Full Stack Developer</span> currently pursuing my
              B.Tech at <span>JNTUH College of Engineering, Sultanpur</span>.
            </p>

            <p>
              My core interest lies in Artificial Intelligence — building
              intelligent systems, training machine learning models,
              and integrating AI solutions into real-world applications.
            </p>

            <p>
              Alongside AI, I develop scalable full-stack applications
              using React, Spring Boot, MongoDB, and Python — transforming
              ideas into production-ready systems.
            </p>

            <p>
              I am continuously exploring Deep Learning, Data Science,
              AI-driven automation, and building projects that bridge
              the gap between intelligent algorithms and impactful user
              experiences.
            </p>
          </div>

          {/* Extra Info Section */}
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h4>🎓 Education</h4>
              <p>B.Tech – JNTUH College of Engineering, Sultanpur</p>
            </div>

            <div className={styles.infoBox}>
              <h4>🤖 Focus Areas</h4>
              <p>AI, Machine Learning, Deep Learning, Full Stack Development</p>
            </div>

            <div className={styles.infoBox}>
              <h4>🚀 Interests</h4>
              <p>Building AI products, Smart Systems, Scalable Web Apps</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;