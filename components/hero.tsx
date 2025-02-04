import Organizers from "./organizers";
import HeroCarousel from "./ui/carousel";
import WelcomeMessage from "./welcome-message";

export default function HeroPage() {
  return (
    <section>
      <HeroCarousel />

      <WelcomeMessage />
      <Organizers />
    </section>
  );
}
