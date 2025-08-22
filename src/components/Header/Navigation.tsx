import styles from "./Navigation.module.css"

const navigationItems = [
  { label: "Services", badge: "13" },
  { label: "Work" },
  { label: "About" },
  { label: "Blog" },
  { label: "Contact" },
]

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {navigationItems.map((item) => (
        <a key={item.label} href="#" className={styles.navLink}>
          {item.label}
          {item.badge && <span className={styles.badge}>{item.badge}</span>}
        </a>
      ))}
    </nav>
  )
}
