import Logo from "./Logo"
import Navigation from "./Navigation"
import HeaderActions from "./HeaderActions"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <HeaderActions />
    </header>
  )
}
