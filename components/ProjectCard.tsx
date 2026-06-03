import Image from "next/image";
import { Project } from "../data/projects";
import { techIcons } from "../data/techIcons";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={260}
            height={160}
            className={styles.image}
          />
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
        {project.bullets && (
          <ul
            style={{
              margin: "8px 0 0 0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {project.bullets.map((bullet, i) => (
              <li
                key={i}
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: "1.7",
                  paddingLeft: "16px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--royal-mid)",
                  }}
                >
                  •
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {/* Стек технологий с иконками */}
        <div className={styles.techStack}>
          {project.techStack.map((tech) => {
            const techData = techIcons[tech];
            if (techData) {
              const Icon = techData.icon;
              return (
                <span key={tech} className={styles.tech} title={tech}>
                  <Icon size={20} color={techData.color} />
                </span>
              );
            }
            // если иконки нет — показываем текст как раньше
            return (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            );
          })}
        </div>

        <div className={styles.links}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Live →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub →
            </a>
          )}
          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
