"use client";
import { useState } from "react";
import profile from "../data/profile";
import styles from "./page.module.css";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { techIcons } from "../data/techIcons";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <div className={styles.heroEyebrowLine} />
            <span className={styles.heroEyebrowText}>{profile.role}</span>
          </div>
          <h1 className={styles.heroName}>
            {first}
            <br />
            <span className={styles.heroNameItalic}>{last}</span>
          </h1>
          <p className={styles.heroRole}>{profile.summary}</p>
        </div>
      </section>

      <section
        id="about"
        className="container mx-auto px-6 py-12 md:px-16 md:py-16"
      >
        <h2 className="sectionTitle">About</h2>

        <div className="twoColAbout">
          {/* Левая колонка — текст */}
          <div
            style={{
              borderLeft: "2px solid var(--royal-mid)",
              paddingLeft: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "var(--text)",
                lineHeight: "2",
                letterSpacing: "0.02em",
                marginBottom: "20px",
                paddingRight: "24px",
              }}
            >
              I&apos;m a Frontend Developer with an engineering background and a
              passion for building clean, modern web interfaces. After years in
              technical fields, I transitioned into web development — completing
              a Full Stack program at Netology and contributing to real projects
              including Guider.pro, a web catalog for Costa Rica.
            </p>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: "2",
                letterSpacing: "0.02em",
                paddingRight: "24px",
              }}
            >
              I built this portfolio to showcase my skills and experience with
              modern frameworks. I enjoy turning ideas into functional,
              well-structured web applications.
            </p>
          </div>

          {/* Правая колонка — скилы */}
          <div style={{ padding: "0 12px" }}>
            <p
              style={{
                fontFamily: "Courier New, monospace",
                fontSize: "10px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--royal)",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Tech Stack
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                // padding: "0 24px",
              }}
            >
              {profile.skills.map((skill) => {
                const techData = techIcons[skill];
                if (!techData) return null;
                const Icon = techData.icon;
                return (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      padding: "16px 8px",
                      border: "1px solid var(--border)",
                      borderRadius: "13px",
                      background: "var(--surface)",
                    }}
                  >
                    <Icon size={32} color={techData.color} />
                    <span
                      style={{
                        fontSize: "9px",
                        color: "var(--muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New, monospace",
                        textAlign: "center",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto p-6">
        <h2 className="sectionTitle">Projects</h2>
        <div className="mt-8 projectsList">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="container mx-auto px-6 py-12 md:px-16 md:py-16"
      >
        <h2 className="sectionTitle">Contact</h2>

        <div className="twoCol">
          {/* Левая — Education */}
          <div>
            <p className="subTitle">Education</p>
            {profile.education.map((edu) => (
              <div
                key={edu.institution}
                style={{
                  borderLeft: "2px solid var(--border)",
                  paddingLeft: "20px",
                  marginBottom: "28px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "16px",
                    color: "var(--royal)",
                    marginBottom: "4px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "var(--royal-mid)",
                  }}
                >
                  {edu.institution} · {edu.period}
                </p>
              </div>
            ))}
          </div>

          {/* Правая — Contact + CV */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div>
              <p className="subTitle">Get in touch</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactLink"
                  >
                    <FaLinkedin size={18} color="#0A66C2" />
                    LinkedIn
                  </a>
                )}
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactLink"
                  >
                    <FaGithub size={18} color="var(--royal)" />
                    GitHub
                  </a>
                )}
                {profile.links.telegram && (
                  <a
                    href={profile.links.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactLink"
                  >
                    <FaTelegram size={18} color="#26A5E4" />
                    Telegram
                  </a>
                )}
                {profile.links.email && (
                  <button
                    onClick={handleCopyEmail}
                    className="contactLink"
                    style={{
                      cursor: "pointer",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <MdEmail size={18} color="var(--royal)" />
                    {copied ? "Copied! ✓" : profile.links.email}
                  </button>
                )}
              </div>
            </div>

            <div
              style={{
                padding: "20px",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                background: "var(--surface)",
              }}
            >
              <p className="subTitle">Download CV</p>
              <span
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "8px 20px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                PDF — Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
