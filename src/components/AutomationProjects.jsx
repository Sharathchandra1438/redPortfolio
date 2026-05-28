import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  CheckCircle2,
  ExternalLink,
  Play,
  Database,
  Code2,
  Image as ImageIcon,
  MessageSquare,
  Mail,
  ChevronRight,
  Terminal,
  GitBranch,
  X,
  Brain,
  FileText,
  GitMerge,
  Layers,
  Send,
  PlayCircle,
  Globe
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import s3img from "/assets/automation_workflow.png";
import emailImg from "/assets/email1.png";
import workflowImg from "/assets/firstwork.png";

/* ─────────────────────── TERMINAL LINES ─────────────────────── */
const TERMINAL_LINES = [
  { text: "$ n8n workflow triggered...", color: "#a8a8b3", delay: 0 },
  { text: "→ Reading Google Sheets data...", color: "#6ee7b7", delay: 0.5 },
  { text: "→ Processing student records: 38 found", color: "#6ee7b7", delay: 1.0 },
  { text: "", delay: 1.4 },
  { text: "Hello Ravi Kumar", color: "#f9fafb", delay: 1.6 },
  { text: "", delay: 1.9 },
  { text: "→ Generating student pass...", color: "#60a5fa", delay: 2.0 },
  { text: "  Image URL:", color: "#a8a8b3", delay: 2.6 },
  {
    text: "  https://hcti.io/v1/image/019e6d64-e91e-7bae-884b-b784458ee593",
    color: "#fbbf24",
    delay: 2.8,
  },
  { text: "", delay: 3.2 },
  { text: "✓ WhatsApp message sent successfully", color: "#4ade80", delay: 3.4 },
  { text: "✓ Email delivered successfully", color: "#4ade80", delay: 3.9 },
  { text: "", delay: 4.3 },
  { text: "──────────────────────────────────", color: "#374151", delay: 4.5 },
  { text: "Processed: 38 / 38 students  ✓ Complete", color: "#4ade80", delay: 4.7 },
];

/* ─────────────────────── FEATURES ─────────────────────── */
const FEATURES = [
  "Bulk student processing",
  "Dynamic pass generation",
  "Automated WhatsApp delivery",
  "Automated email notifications",
  "Google Sheets integration",
  "JavaScript data processing",
  "Image generation using HCTI.io",
  "Multi-channel communication workflow",
  "Fully automated using n8n",
];

/* ─────────────────────── TECH TAGS ─────────────────────── */
const TAGS = [
  "n8n",
  "WAHA API",
  "Gmail Automation",
  "HCTI.io",
  "Google Sheets",
  "JavaScript",
  "Workflow Automation",
];

/* ─────────────────────── ARCH FLOW ─────────────────────── */
const FLOW_STEPS = [
  { icon: Database, label: "Google Sheets", sublabel: "Student Data", color: "#34d399" },
  { icon: GitBranch, label: "n8n Workflow", sublabel: "Orchestration", color: "#f87171" },
  { icon: Code2, label: "JavaScript", sublabel: "Processing", color: "#fbbf24" },
  { icon: ImageIcon, label: "HCTI.io", sublabel: "Image Generation", color: "#a78bfa" },
  { icon: MessageSquare, label: "WAHA + Gmail", sublabel: "Delivery APIs", color: "#38bdf8" },
  { icon: Mail, label: "WhatsApp & Email", sublabel: "Student Delivery", color: "#4ade80" },
];

/* ─────────────────────── ANIMATIONS ─────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ─────────────────────── TERMINAL COMPONENT ─────────────────────── */
function TerminalBox({ inView }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    setVisibleLines([]);
    setShowCursor(false);

    TERMINAL_LINES.forEach((line, idx) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (idx === TERMINAL_LINES.length - 1) setShowCursor(true);
      }, line.delay * 1000);
    });
  }, [inView]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #111827 100%)",
        border: "1px solid rgba(239,68,68,0.3)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow:
          "0 0 30px rgba(239,68,68,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Terminal header dots */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
        {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: c,
              opacity: 0.85,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "auto",
            fontSize: "11px",
            color: "#4b5563",
            fontFamily: "monospace",
          }}
        >
          n8n-automation — bash
        </span>
      </div>

      {/* Lines */}
      <div style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: "12.5px", lineHeight: "1.8" }}>
        {visibleLines.map((line, i) =>
          line.text === "" ? (
            <div key={i} style={{ height: "8px" }} />
          ) : (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: line.color || "#d1d5db" }}
            >
              {line.text}
            </motion.div>
          )
        )}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            style={{ display: "inline-block", width: "8px", height: "15px", background: "#4ade80", verticalAlign: "text-bottom", borderRadius: "1px" }}
          />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────── ARCH FLOW COMPONENT ─────────────────────── */
function ArchFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      style={{ marginTop: "80px" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{
          display: "inline-block",
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.3)",
          color: "#f87171",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "6px 16px",
          borderRadius: "999px",
          marginBottom: "16px",
        }}>
          Workflow Architecture
        </span>
        <h3 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700 }}>
          How It Works
        </h3>
      </div>

      {/* Flow grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "0",
        alignItems: "center",
        position: "relative",
      }}>
        {FLOW_STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={i}>
              <motion.div
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.06, y: -4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 8px",
                  cursor: "default",
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 18px ${step.color}30`,
                  transition: "box-shadow 0.3s",
                }}>
                  <Icon size={22} color={step.color} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#f3f4f6", fontSize: "12.5px", fontWeight: 700 }}>{step.label}</div>
                  <div style={{ color: "#6b7280", fontSize: "11px", marginTop: "2px" }}>{step.sublabel}</div>
                </div>
              </motion.div>

              {/* Connector arrow — not after the last item */}
              {i < FLOW_STEPS.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <ChevronRight size={18} color="#ef4444" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─────────────────────── CUSTOM WORKFLOW COMPONENTS ─────────────────────── */
const WorkflowNode = ({ icon: Icon, label, sublabel, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: "14px",
      width: "120px",
      position: "relative",
      zIndex: 2
    }}
  >
    <div style={{
      width: "70px", height: "70px", borderRadius: "50%", 
      background: "#030303", border: `1px solid ${color}60`,
      display: "flex", justifyContent: "center", alignItems: "center",
      boxShadow: `0 0 20px ${color}30, inset 0 0 16px ${color}15`,
    }}>
      <Icon size={26} color={color} strokeWidth={1.5} />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ color: "#fff", fontSize: "13px", fontWeight: "700", marginBottom: "4px" }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ color: "#888", fontSize: "11px", fontWeight: "500" }}>
          {sublabel}
        </div>
      )}
    </div>
  </motion.div>
);

const WorkflowArrow = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: delay + 0.2, duration: 0.4 }}
    style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      padding: "0 6px", marginTop: "28px"
    }}
  >
    <ChevronRight size={14} color="#ef4444" style={{ filter: "drop-shadow(0 0 3px rgba(239,68,68,0.6))" }} opacity={0.8} />
  </motion.div>
);

const WorkflowContainer = ({ children }) => (
  <div style={{ 
    display: "flex", 
    alignItems: "flex-start", 
    justifyContent: "center", 
    gap: "10px", 
    padding: "60px 40px",
    flexWrap: "wrap",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    backgroundPosition: "0 0",
    backgroundColor: "#050505",
    borderRadius: "16px",
    width: "100%",
    minHeight: "400px"
  }}>
    {children}
  </div>
);

const WorkflowVisualizer = ({ projectId }) => {
  if (projectId === 1) {
    return (
      <WorkflowContainer>
        <WorkflowNode icon={Mail} label="Gmail Trigger" sublabel="Email Received" color="#10b981" delay={0} />
        <WorkflowArrow delay={0.2} />
        <WorkflowNode icon={Brain} label="Google Gemini" sublabel="AI Analysis" color="#8b5cf6" delay={0.4} />
        <WorkflowArrow delay={0.6} />
        <WorkflowNode icon={FileText} label="Code Summary" sublabel="Documentation" color="#3b82f6" delay={0.8} />
        <WorkflowArrow delay={1.0} />
        <WorkflowNode icon={GitMerge} label="Merge" sublabel="Combine Data" color="#f59e0b" delay={1.2} />
        <WorkflowArrow delay={1.4} />
        <WorkflowNode icon={Layers} label="Aggregate" sublabel="Data Aggregation" color="#a855f7" delay={1.6} />
        <WorkflowArrow delay={1.8} />
        <WorkflowNode icon={Send} label="Send Message" sublabel="Notify Team" color="#06b6d4" delay={2.0} />
      </WorkflowContainer>
    );
  }
  
  if (projectId === 2) {
    return (
      <WorkflowContainer>
        <WorkflowNode icon={FileText} label="Form Submission" sublabel="Trigger" color="#a855f7" delay={0} />
        <WorkflowArrow delay={0.2} />
        <WorkflowNode icon={GitBranch} label="IF Condition" sublabel="Routing" color="#eab308" delay={0.4} />
        <WorkflowArrow delay={0.6} />
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "-10px" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <WorkflowNode icon={CheckCircle2} label="Discount Yes" sublabel="True branch" color="#22c55e" delay={0.8} />
            <WorkflowArrow delay={1.0} />
            <WorkflowNode icon={Database} label="Append Row" sublabel="Google Sheets" color="#10b981" delay={1.2} />
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <WorkflowNode icon={X} label="Discount No" sublabel="False branch" color="#ef4444" delay={0.8} />
            <WorkflowArrow delay={1.0} />
            <WorkflowNode icon={Database} label="Append Row" sublabel="Google Sheets" color="#10b981" delay={1.2} />
          </div>
        </div>
      </WorkflowContainer>
    );
  }
  
  if (projectId === 3) {
    return (
      <WorkflowContainer>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto auto auto auto auto", rowGap: "40px", columnGap: "4px", alignItems: "start" }}>
          {/* Row 1 */}
          <WorkflowNode icon={Database} label="Google Sheets" sublabel="Student Data" color="#10b981" delay={0} />
          <WorkflowArrow delay={0.2} />
          <WorkflowNode icon={GitBranch} label="n8n Workflow" sublabel="Orchestration" color="#ef4444" delay={0.4} />
          <WorkflowArrow delay={0.6} />
          <WorkflowNode icon={Code2} label="JavaScript" sublabel="Processing" color="#f59e0b" delay={0.8} />
          <WorkflowArrow delay={1.0} />
          <WorkflowNode icon={ImageIcon} label="HCTI.io" sublabel="Image Generation" color="#8b5cf6" delay={1.2} />
          <WorkflowArrow delay={1.4} />
          <WorkflowNode icon={MessageSquare} label="WAHA + Gmail" sublabel="Delivery APIs" color="#06b6d4" delay={1.6} />

          {/* Row 2 */}
          <div />
          <WorkflowArrow delay={0.4} />
          <WorkflowNode icon={Mail} label="WhatsApp & Email" sublabel="Student Delivery" color="#10b981" delay={0.6} />
        </div>
      </WorkflowContainer>
    );
  }
  
  return null;
};

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
const AutomationProjects = () => {
  const [lightbox, setLightbox] = useState({ open: false, type: null, src: null, title: null, meta: null });
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);
  const terminalInView = useInView(terminalRef, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && lightbox.open) setLightbox({ open: false, type: null, src: null, title: null, meta: null });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section
      id="automation"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#000",
        padding: "100px 5%",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ── Floating background blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-15%", left: "-10%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220,38,38,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", bottom: "5%", right: "-8%",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: "inline-block",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.35)",
              color: "#f87171",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
            }}
          >
            🤖 n8n · Workflow Automation · APIs
          </motion.span>

          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #fff 30%, #f87171 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "16px",
            lineHeight: 1.15,
          }}>
            Automation
          </h2>

          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: "760px", margin: "0 auto" }}>
            Experienced in creating scalable automation systems using n8n, AI integrations, Google services, APIs, and workflow orchestration for productivity, customer handling, and intelligent process automation.
          </p>

          {/* Red underline decoration */}
          <div style={{
            width: "100px", height: "4px",
            background: "linear-gradient(90deg, #ef4444, transparent)",
            borderRadius: "4px",
            margin: "24px auto 0",
          }} />
        </motion.div>

        {/* ── Projects Grid ── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          style={{ marginTop: 8 }}
        >
          {/* Cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "16px",
          }}>

            {[
              {
                id: 1,
                image: emailImg,
                title: "AI Email Code Review Automation",
                badge: "Workflow Automation",
                description:
                  "An AI-powered Gmail automation workflow built with n8n that automatically reads code-related emails, summarizes the code using Google Gemini AI, generates review comments, merges outputs, and sends automated responses.",
                features: [
                  "Gmail Trigger Integration",
                  "AI Code Summarization",
                  "Automated Review Generation",
                  "Parallel Workflow Processing",
                  "Email Automation",
                ],
                tech: ["n8n", "Gmail API", "Google Gemini AI", "JavaScript"],
                used: ["n8n", "Gmail API", "Google Gemini AI", "JavaScript"],
                github: "https://github.com/Sharathchandra1438/n8n-workflows/blob/main/code%20summarizer.json",
              },
              {
                id: 2,
                image: workflowImg,
                title: "Customer Feedback Discount Automation",
                badge: "Workflow Automation",
                description:
                  "An automated workflow system that processes customer form submissions, evaluates feedback conditions, automatically assigns discounts for positive responses, and stores customer records in Google Sheets.",
                features: [
                  "Form Automation",
                  "Conditional Logic",
                  "Discount Processing",
                  "Google Sheets Integration",
                  "Customer Workflow Management",
                ],
                tech: ["n8n", "Google Sheets", "Workflow Automation"],
                used: ["n8n", "Google Forms", "Google Sheets"],
                github: "https://github.com/Sharathchandra1438/n8n-workflows/blob/main/First%20workflow.json",
              },
              {
                id: 3,
                image: s3img,
                title: "Automated Image Generation & Messaging Workflow",
                badge: "Workflow Automation",
                description:
                  "A workflow automation pipeline that fetches data from Google Sheets, processes data using JavaScript, generates images through external APIs, and automatically sends messages/emails with generated outputs.",
                features: [
                  "Sheet Data Processing",
                  "JavaScript Logic",
                  "HTTP API Integration",
                  "Automated Image Generation",
                  "Messaging Automation",
                ],
                tech: ["n8n", "JavaScript", "HTTP APIs", "Google Sheets"],
                used: ["n8n", "HCTI.io (image API)", "WAHA API", "Gmail"],
                github: "https://github.com/Sharathchandra1438/n8n-workflows/blob/main/bootcamp.json",
              },
            ].map((p, idx) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -6, boxShadow: "0 18px 50px rgba(0,0,0,0.6), 0 6px 18px rgba(239,68,68,0.06)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.15 * idx } }}
                style={{
                  background: "linear-gradient(180deg, #0b0b0b, #0f0f10)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    onClick={() => setLightbox({ open: true, type: "image", src: p.image, title: p.title, meta: p })}
                    style={{ cursor: "pointer", width: "100%", height: "190px", objectFit: "cover", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}
                  />
                  <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(239,68,68,0.12)", color: "#fca5a5", padding: "6px 10px", borderRadius: "999px", fontWeight: 700, fontSize: "12px" }}>{p.badge}</span>
                </div>

                <div style={{ padding: "6px 4px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: 0, color: "#fff", fontSize: "1.05rem", fontWeight: 800 }}>{p.title}</h3>
                  <p style={{ margin: 0, color: "#9ca3af", fontSize: "0.92rem", lineHeight: 1.5 }}>{p.description}</p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                    {p.tech.map((t) => (
                      <span key={t} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)", color: "#e5e7eb", padding: "6px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 700 }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "12px" }}>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d1d5db", fontSize: "13px" }}>
                        <CheckCircle2 size={14} color="#4ade80" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#e5e7eb", padding: "8px 12px", borderRadius: "10px", textDecoration: "none", fontWeight: 700 }}>
                      <FaGithub /> GitHub
                    </a>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setLightbox({ open: true, type: "workflow", src: null, title: p.title, meta: p });
                      }}
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(90deg, rgba(59,130,246,0.14), rgba(59,130,246,0.06))", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", padding: "8px 12px", borderRadius: "10px", cursor: "pointer", fontWeight: 700 }}
                    >
                      <Play size={14} /> View Workflow
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* ── Workflow Architecture Flow ── */}
        {/* <ArchFlow /> */}

      </div>

      {/* Responsive CSS for the two-column grid */}
      <style>{`
        .automation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 820px) {
          .automation-grid {
            grid-template-columns: 1fr !important;
          }
          .automation-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(239,68,68,0.12);
          }
        }
      `}</style>

      {/* Lightbox / Workflow Modal */}
      {lightbox.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(2,6,23,0.85)",
            backdropFilter: "blur(12px)",
            padding: "20px",
          }}
          onClick={() => setLightbox({ open: false, src: null, title: null, type: null, meta: null })}
        >
          <motion.div
            initial={{ y: 20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            style={{ 
              position: "relative",
              maxWidth: "1200px", 
              width: "100%", 
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px", 
              overflow: "hidden", 
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 40px rgba(59,130,246,0.05)" 
            }}
          >
            <button
              onClick={() => setLightbox({ open: false, src: null, title: null, type: null, meta: null })}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#fff",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(239,68,68,0.8)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <X size={20} />
            </button>

            {lightbox.type === "workflow" && (
              <div style={{ padding: "0px", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WorkflowVisualizer projectId={lightbox.meta?.id} />
              </div>
            )}

            {lightbox.type === "image" && (
              <div style={{ position: "relative" }}>
                 <div style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", background: "#050505", padding: "40px", paddingTop: "50px" }}>
                   <img
                     src={lightbox.src}
                     alt={lightbox.title}
                     style={{ 
                       maxWidth: "100%", 
                       maxHeight: "80vh", 
                       display: "block", 
                       objectFit: "contain",
                       transition: "transform 0.3s ease",
                       cursor: "zoom-in",
                       borderRadius: "12px",
                       boxShadow: "0 0 40px rgba(0,0,0,0.5)"
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                     onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                     onClick={() => window.open(lightbox.src, "_blank")}
                   />
                 </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AutomationProjects;
