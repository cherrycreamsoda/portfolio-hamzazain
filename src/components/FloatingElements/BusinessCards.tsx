import styles from "./BusinessCards.module.css"

export default function BusinessCards() {
  return (
    <div className={styles.businessCards}>
      <div className={styles.businessCard}>
        <div className={styles.cardHeader}>STRESS HEADS</div>
        <div className={styles.cardSubtext}>CREATIVE STRESS SOLUTIONS</div>
      </div>
    </div>
  )
}
