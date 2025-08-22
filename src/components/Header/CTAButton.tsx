import styles from "./CTAButton.module.css"

export default function CTAButton() {
  return (
    <button className={styles.ctaButton}>
      Start a project
      <span className={styles.arrow}>→</span>
    </button>
  )
}
