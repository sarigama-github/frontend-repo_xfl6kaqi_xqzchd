import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Coursework from './components/Coursework'
import Contact from './components/Contact'
import CursorBlob from './components/CursorBlob'
import ParallaxBand from './components/ParallaxBand'
import SectionReveal from './components/SectionReveal'

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Cursor-following accent (desktop only) */}
      <CursorBlob maxOpacity={0.3} />
      <Navbar />
      <main>
        <SectionReveal>
          <Hero />
        </SectionReveal>

        <ParallaxBand mobileIntensity={12} intensity={36} />

        <SectionReveal delay={0.05}>
          <Skills />
        </SectionReveal>

        <ParallaxBand mobileIntensity={14} intensity={50} />

        <SectionReveal delay={0.07}>
          <Projects />
        </SectionReveal>

        <ParallaxBand mobileIntensity={12} intensity={44} />

        <SectionReveal delay={0.06}>
          <Experience />
        </SectionReveal>

        <ParallaxBand mobileIntensity={14} intensity={48} />

        <SectionReveal delay={0.05}>
          <Coursework />
        </SectionReveal>

        <ParallaxBand mobileIntensity={12} intensity={40} />

        <SectionReveal delay={0.05}>
          <Contact />
        </SectionReveal>
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name — AI/ML Engineer
      </footer>
    </div>
  )
}
