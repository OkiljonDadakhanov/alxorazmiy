import Organizers from "./organizers";
import HeroCarousel from "./ui/main-hero";
import VideoStreamingResult from "./video-streaming-result";
import WelcomeMessage from "./welcome-message";

export default function HeroPage() {
  return (
    <section>
      <HeroCarousel />
      <VideoStreamingResult />
      <WelcomeMessage />
      <Organizers />
    </section>
  );
}
