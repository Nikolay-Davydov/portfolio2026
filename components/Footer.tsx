import styles from "./Footer.module.css";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerCopy}>© {profile.name}</span>
      <span className={styles.footerYear}>{new Date().getFullYear()}</span>
      {/* <div className={styles.footerLinks}>
        {profile.links?.github && (
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {profile.links?.linkedin && (
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        <a href="#">Telegram</a>
      </div> */}
    </footer>
  );
}
