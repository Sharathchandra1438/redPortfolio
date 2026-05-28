import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {

  const skills = {
    "Core Development": [
      "Git & GitHub",
      "VS Code",
      "OOP",
      "Data Structures & Algorithms",
      "Problem Solving"
    ],

    "Frontend Development": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "REST API Integration"
    ],

    "Backend Development": [
      "Java",
      "Spring Boot",
      "REST API Design",
      "FastAPI",
      "Flask",
      "Microservices Basics"
    ],

    "Databases": [
      "MySQL",
      "MongoDB",
      "SQL",
      "Database Design"
    ],

    "AI / Machine Learning": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "LangChain",
      "Ollama",
      "Model Deployment",
      "Feature Engineering"
    ],

    "Automation & Orchestration": [
      "n8n",
      "Workflow Automation",
      "AI Automation"
    ],

    "Data Science & Visualization": [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Jupyter Notebook"
    ]
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.container} id="skills">
      <div className={styles.headings}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills & Toolkit
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Full Stack Development • AI/ML Systems • Data Science • Modern Backend Architecture
        </motion.p>
      </div>

      <motion.div
        className={styles.skillsContainer}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            className={styles.skillCategory}
            variants={item}
          >
            <h3 className={styles.categoryTitle}>{category}</h3>

            <div className={styles.skillsGrid}>
              {items.map((skill) => (
                <div key={skill} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;