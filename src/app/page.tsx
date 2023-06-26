import { About } from "./home/About";
import { Hero } from "./home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
    </main>
  );
}
