import styles from "./PhoneMockup.module.css"

export default function PhoneMockup() {
  return (
    <div className={styles.phoneMockup}>
      <div className={styles.phoneScreen}>
        <img src="/placeholder.svg?height=120&width=60" alt="Pineapple app" />
      </div>
    </div>
  )
}
