import styles from "./ActionButtons.module.css"

export default function ActionButtons() {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>
        View our work
        <span className={styles.arrow}>→</span>
      </button>
      <button className={styles.button}>
        Meet the team
        <span className={styles.arrow}>→</span>
      </button>
    </div>
  )
}
