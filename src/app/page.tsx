import HeroScroll from "@/components/HeroScroll";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/30 selection:text-white pb-6">
      <HeroScroll />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-6 mt-10 border-t border-white/5 text-center bg-[#121212] max-w-7xl mx-auto w-full">
        <p className="text-zinc-600 text-xs md:text-sm tracking-wide">
          © {new Date().getFullYear()} Arjun Singh. Custom Scrollytelling Experience.
        </p>
      </footer>
    </main>
  );
}
