import Greeting from "./Greeting"
import Title from "./Title"
import ActionButtons from "./ActionButtons"
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Greeting />
      <Title />
      <ActionButtons />
    </div>
  )
}
