import styles from "./PineappleCard.module.css";

export default function PineappleCard() {
  return (
    <div className={styles.pineappleCard}>
      <div className={styles.cardContent}>
        <img
          src="/placeholder.svg?height=200&width=150"
          alt="Pineapple design"
          className={styles.pineappleImage}
        />
        <div className={styles.profileCircle}>
          <img src="/placeholder.svg?height=60&width=60" alt="Team member" />
        </div>
        <div className={styles.cardText}>
          <div className={styles.boldText}>SUP?</div>
          <div className={styles.boldText}>MY NAME</div>
          <div className={styles.boldText}>IS ASHLEY.</div>
        </div>
      </div>
    </div>
  );
}
