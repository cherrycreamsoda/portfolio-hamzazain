"use client";
import styles from "./Header.module.css";
import { useScrollOpacity } from "../hooks/useScrollOpacity";

export default function Header() {
  const headerOpacity = useScrollOpacity(300);

  return (
    <header className={styles.header} style={{ opacity: headerOpacity }}>
      <nav className={styles.nav}>
        <a href="#work" className={styles.navLink} aria-label="Browse My Work">
          Work
        </a>
        <a href="#contact" className={styles.navLink} aria-label="Contact Me">
          Contact
        </a>
        <a href="#about" className={styles.navLink} aria-label="Know About Me">
          About
        </a>
        <a href="#services" className={styles.navLink} aria-label="My Services">
          Services
        </a>
        <a href="#blog" className={styles.navLink} aria-label="Read My Blog">
          Blog
        </a>
      </nav>
    </header>
  );
}
