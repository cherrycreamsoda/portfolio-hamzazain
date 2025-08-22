import styles from "./VideoCard.module.css"

export default function VideoCard() {
  return (
    <div className={styles.videoCard}>
      <img src="/placeholder.svg?height=120&width=200" alt="Pineapples video" className={styles.videoThumbnail} />
      <div className={styles.videoText}>
        PINEAPPLES,
        <br />
        WTF?
      </div>
    </div>
  )
}
