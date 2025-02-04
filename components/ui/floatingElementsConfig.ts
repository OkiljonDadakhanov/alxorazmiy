// floatingElementsConfig.ts

export interface FloatingElement {
    content: string;
    left: string;
    top: string;
    fontSize: string;
    transform: string;
  }
  
  // Seed-based random number generator for consistent values
  class SeededRandom {
    private seed: number;
  
    constructor(seed: number) {
      this.seed = seed;
    }
  
    // Simple random number generator with seed
    random(): number {
      const x = Math.sin(this.seed++) * 10000;
      return x - Math.floor(x);
    }
  }
  
  // Fixed elements from the diff
  export const fixedFloatingElements: FloatingElement[] = [
    {
      content: "∑∫∂",
      left: "72.50856433377604%",
      top: "14.507968782098768%",
      fontSize: "23.554511533726128px",
      transform: "rotate(241.0124933195267deg)"
    },
    {
      content: "01",
      left: "12.040793627840607%",
      top: "75.39660410802959%",
      fontSize: "22.990029990513104px",
      transform: "rotate(104.85184960244169deg)"
    },
    {
      content: "∑∫∂",
      left: "30.413278738285896%",
      top: "58.71954445691583%",
      fontSize: "17.887155408865443px",
      transform: "rotate(192.4017396230972deg)"
    },
    {
      content: "∑∫∂",
      left: "46.418233573757895%",
      top: "7.794764476862759%",
      fontSize: "13.129163507158129px",
      transform: "rotate(66.1340081123464deg)"
    }
  ];
  
  // Pre-generate additional random elements
  const seededRandom = new SeededRandom(12345); // Fixed seed for consistency
  export const additionalElements: FloatingElement[] = Array.from({ length: 96 }, () => ({
    content: seededRandom.random() > 0.5 ? "01" : "∑∫∂",
    left: `${seededRandom.random() * 100}%`,
    top: `${seededRandom.random() * 100}%`,
    fontSize: `${seededRandom.random() * 20 + 10}px`,
    transform: `rotate(${seededRandom.random() * 360}deg)`
  }));