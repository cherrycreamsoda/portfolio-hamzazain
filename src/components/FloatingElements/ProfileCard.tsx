import styles from "./ProfileCard.module.css"

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileContent}>
        <img src="/placeholder.svg?height=50&width=50" alt="Andy" className={styles.profileImage} />
        <div className={styles.profileText}>
          <div className={styles.profileName}>Hear from Andy</div>
          <div className={styles.profileTitle}>Co-Founder of Shape</div>
        </div>
      </div>
    </div>
  )
}
