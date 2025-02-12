import Organizers from "./organizers";
import HeroCarousel from "./ui/main-hero";
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
