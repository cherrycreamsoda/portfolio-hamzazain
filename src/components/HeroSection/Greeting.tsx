import styles from "./Greeting.module.css"

export default function Greeting() {
  return (
    <div className={styles.greeting}>
      <span className={styles.dot}>•</span>
      Hiya, we're Shape
      <span className={styles.wave}>👋</span>
    </div>
  )
}
