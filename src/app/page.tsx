import { About } from "./home/About";
import { Hero } from "./home/Hero";
import { Services } from "./home/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
