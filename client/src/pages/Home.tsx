import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Journey } from "@/components/sections/Journey";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Testimonials />
        <Journey />
        <Events />
      </main>

      <Footer />
    </div>
  );
}
