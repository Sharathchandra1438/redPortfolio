import React from "react";
import styles from "./Projects.module.css";
import job from "/assets/job.png";
import hotel from "/assets/hotel.png";
import dealdrop from "/assets/dealdrop.png";
import crop from "/assets/cropgenius.png";
import snake from "/assets/sankeai.png";
import med from "/assets/med.png";
import croprecom from "/assets/croprecom.png";
import movie from "/assets/movie.png";
import aes from "/assets/aes.png";
import sp from "/assets/sp.png";
import yuga from "/assets/yuga.png";
import cshub from "/assets/cshub.png";

const Projects = () => {
const projects = [
    // ================= AI PROJECTS =================
    {
        id: 1,
        title: "AI Smart Assignment Evaluator",
        description:
        "AI-powered system that evaluates assignments using NLP and LLM models.",
        image: aes,
        live: "https://smartassignmentevaluator-5.onrender.com",
        github: "https://github.com/Sharathchandra1438/SmartAssignmentEvaluator",
        category: "AI"
    },
    {
        id: 2,
        title: "Job Recommendation Assistant",
        description:
        "Recommends personalized jobs based on resume and skills using ML.",
        image: job,
        live: "https://jobrecom-sh.streamlit.app",
        github: "https://github.com/Sharathchandra1438/jobRecom",
        category: "AI"
    },
    {
        id: 3,
        title: "Study Planner AI",
        description:
        "Smart study planner that generates schedules using AI productivity logic.",
        image: sp,
        live: "https://studyplanner-gzlk.onrender.com",
        github: "https://github.com/Sharathchandra1438/studyPlanner",
        category: "AI"
    },
    {
        id: 4,
        title: "Medical Chat Bot",
        description:
        "Healthcare assistant chatbot using LLM and prompt engineering.",
        image: med,
        live: "https://medicalchatbot-3-uklx.onrender.com",
        github: "https://github.com/Sharathchandra1438/medicalChatbot",
        category: "AI"
    },
    {
        id: 5,
        title: "Snake AI Game",
        description:
        "AI-powered Snake game using reinforcement learning.",
        image: snake,
        live: "https://snakeai.onrender.com",
        github: "https://github.com/Sharathchandra1438/snakeai",
        category: "AI"
    },

    // ================= WEB DEVELOPMENT =================
    {
        id: 6,
        title: "CS Hub - College Club",
        description:
        "Official club website for CS department with event and member management.",
        image: cshub,
        live: "https://cshubinfo2.netlify.app",
        github: "https://github.com/Sharathchandra1438/Cshub",
        category: "Web"
    },
    {
        id: 7,
        title: "Hotel Management System",
        description:
        "Full-featured hotel booking and management platform.",
        image: hotel,
        live: "https://hotelmanagement6.netlify.app",
        github: "https://github.com/Sharathchandra1438/hotel-management",
        category: "Web"
    },
    {
        id: 8,
        title: "College Fest Yuga",
        description:
        "Event management website for annual college fest.",
        image: yuga,
        live: "https://yuga2026.online",
        github: "https://github.com/Sharathchandra1438/yuga",
        category: "Web"
    },

    // ================= PREVIOUS PROJECTS =================
    {
        id: 9,
        title: "DealDrop (E-Commerce Platform)",
        description:
        "Full-stack reselling platform connecting buyers and sellers.",
        image: dealdrop,
        live: "https://ecom-frontend-deal-drop.netlify.app",
        github: "https://github.com/Sharathchandra1438/deal-drop-render",
        category: "Web"
    },
    {
        id: 10,
        title: "CropGenius (Agricultural Assistant)",
        description:
        "Web app helping farmers with insights and weather predictions.",
        image: crop,
        live: "https://cropgeniushackthon.netlify.app",
        github: "#",
        category: "Web"
    },
    {
        id: 11,
        title: "Smart Crop Recommender",
        description:
        "Recommends suitable crops based on soil parameters using ML.",
        image: croprecom,
        live: "https://croprecom-6.streamlit.app",
        github: "https://github.com/Sharathchandra1438/crop_recom",
        category: "AI"
    },
    {
        id: 12,
        title: "Movie Recommendation System",
        description:
        "NLP-based recommendation engine using cosine similarity.",
        image: movie,
        live: "https://movierecommendition-sh6.streamlit.app",
        github: "https://github.com/Sharathchandra1438/movieRecommendition",
        category: "AI"
    }
];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>

      <div className={styles.projectsWrapper}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>

            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} />
              <span className={styles.categoryBadge}>
                {project.category}
              </span>
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div> */}

              <div className={styles.buttons}>
                <a href={project.live} target="_blank" rel="noreferrer" className={styles.liveBtn}>
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.codeBtn}>
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;