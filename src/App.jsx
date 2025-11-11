import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Coursework from './components/Coursework'
import Contact from './components/Contact'
import CursorBlob from './components/CursorBlob'
import ParallaxBand from './components/ParallaxBand'

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Cursor-following accent (desktop only) */}
      <CursorBlob />
      <Navbar />
      <main>
        <Hero />
        <ParallaxBand />
        <Skills />
        <ParallaxBand intensity={60} />
        <Projects />
        <ParallaxBand intensity={50} />
        <Experience />
        <ParallaxBand intensity={40} />
        <Coursework />
        <ParallaxBand intensity={60} />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name — AI/ML Engineer
      </footer>
    </div>
  )
}
