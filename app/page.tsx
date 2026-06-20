import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
