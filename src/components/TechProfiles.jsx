import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechProfiles.module.css';

const TechProfiles = () => {

  const profiles = [
    {
      name: 'GeeksforGeeks',
      iconClass: 'fas fa-laptop-code',
      link: 'https://www.geeksforgeeks.org/profile/sharathchaslot',
    },
    {
      name: 'Codeforces',
      iconClass: 'fas fa-trophy',
      link: 'https://codeforces.com/profile/sharathchandra6',
    },
    {
      name: 'Kaggle',
      iconClass: 'fas fa-database',
      link: 'https://www.kaggle.com/rekhsharathchandra',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="techprofiles" className={styles.profilesSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical & Competitive Profiles
        </motion.h2>

        <motion.div
          className={styles.profilesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileCard}
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${profile.iconClass} ${styles.profileIcon}`}></i>
              <h3 className={styles.profileName}>{profile.name}</h3>
              <span className={styles.visitLink}>View Profile →</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechProfiles;