import styles from "./ColorStack.module.css"

const colors = ["#ffffff", "#00ffff", "#ff69b4", "#ffff00"]

export default function ColorStack() {
  return (
    <div className={styles.colorStack}>
      {colors.map((color, index) => (
        <div key={index} className={styles.colorBar} style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}
