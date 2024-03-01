import {} from "@/components/ui/animation/google-gemini-effect";
import { Gemini } from "./components/gemini";
import Feature from "./components/feature";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main>
      <Gemini />
      <Intro />
      <Feature
        logoRight={false}
        title="Physics Olympiad"
        imageUrl="/images/oly.png"
      />
      <Feature
        logoRight={true}
        title="Astronomy"
        imageUrl="/images/astronomy.png"
      />
      <Feature
        logoRight={false}
        title="Bio Physics"
        imageUrl="/images/bio.png"
      />
      <Feature
        logoRight={true}
        title="Basic Electronic"
        imageUrl="/images/cpu.png"
      />
      <Feature
        logoRight={false}
        title="Coding Camp"
        imageUrl="/images/code.png"
      />
    </main>
  );
}
