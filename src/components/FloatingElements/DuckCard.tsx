import styles from "./DuckCard.module.css"

export default function DuckCard() {
  return (
    <div className={styles.duckCard}>
      <img src="/placeholder.svg?height=80&width=80" alt="Rubber duck" className={styles.duckImage} />
    </div>
  )
}
