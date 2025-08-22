import styles from "./CircularBadges.module.css"

export default function CircularBadges() {
  return (
    <div className={styles.circularBadges}>
      <div className={styles.badge1}>
        <img src="/placeholder.svg?height=40&width=40" alt="Coffee" />
      </div>
      <div className={styles.badge2}>
        <img src="/placeholder.svg?height=40&width=40" alt="Coffee" />
      </div>
      <div className={styles.badge3}>
        <img src="/placeholder.svg?height=40&width=40" alt="Coffee" />
      </div>
    </div>
  )
}
