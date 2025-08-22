import ThemeToggle from "./ThemeToggle"
import CTAButton from "./CTAButton"
import styles from "./HeaderActions.module.css"

export default function HeaderActions() {
  return (
    <div className={styles.headerActions}>
      <ThemeToggle />
      <CTAButton />
    </div>
  )
}
