import React from "react";
import Carousel from "./ui/carousel";
import { EmblaOptionsType } from "embla-carousel";

import "../styles/embla.css";
import "../styles/embla-base.css";
import WelcomeMessage from "./welcome-message";

export default function Hero() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <WelcomeMessage />
    </section>
  );
}
