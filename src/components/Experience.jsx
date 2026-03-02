import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>

        {/* INTERN - LEFT */}
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.content}>
            <h3>AI / ML Intern</h3>
            <p className={styles.company}>Tech Mecha Torque</p>
            <span className={styles.date}>Jan 2025 – Present</span>

            <ul>
              <li>Developed AI & ML models on real-world datasets</li>
              <li>Built LLM applications using LangChain & Ollama</li>
              <li>Created APIs using FastAPI</li>
              <li>Worked on NLP-based intelligent systems</li>
              <li>Performed preprocessing & feature engineering</li>
            </ul>
          </div>
        </div>

        {/* PERSONAL PROJECTS - RIGHT */}
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.content}>
            <h3>Personal AI & Full Stack Projects</h3>
            <p className={styles.company}>Self-Initiated</p>
            <span className={styles.date}>2024 – Present</span>

            <ul>
              <li>Built AI-powered web apps using Flask & FastAPI</li>
              <li>Developed ML dashboards with Streamlit</li>
              <li>Integrated backend APIs with React frontend</li>
              <li>Implemented model deployment workflows</li>
              <li>Worked on end-to-end AI solutions</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;