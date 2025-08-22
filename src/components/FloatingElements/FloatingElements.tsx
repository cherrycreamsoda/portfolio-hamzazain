import PineappleCard from "./PineappleCard";
import DuckCard from "./DuckCard";
import PhoneMockup from "./PhoneMockup";
import CircularBadges from "./CircularBadges";
import ColorStack from "./ColorStack";
import VideoCard from "./VideoCard";
import ProfileCard from "./ProfileCard";
import YellowRectangle from "./YellowRectangle";
import BusinessCards from "./BusinessCards";
import styles from "./FloatingElements.module.css";

export default function FloatingElements() {
  return (
    <div className={styles.floatingElements}>
      <PineappleCard />
      <DuckCard />
      <PhoneMockup />
      <CircularBadges />
      <ColorStack />
      <VideoCard />
      <ProfileCard />
      <YellowRectangle />
      <BusinessCards />
    </div>
  );
}
