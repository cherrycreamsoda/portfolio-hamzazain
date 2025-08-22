import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import FloatingElements from "@/components/FloatingElements/FloatingElements"
import SVGClipPaths from "@/components/SVGClipPaths/SVGClipPaths"
import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <FloatingElements />
      </main>
      <SVGClipPaths />
    </div>
  )
}
