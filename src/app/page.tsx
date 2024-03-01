import {} from "@/components/ui/animation/google-gemini-effect";
import { Gemini } from "./components/gemini";
import Feature from "./components/feature";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main>
      <Gemini />
      <Intro />
      <Feature logoRight={false} />
      <Feature logoRight={true} />
      <Feature logoRight={false} />
    </main>
  );
}
