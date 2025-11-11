import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Coursework from './components/Coursework'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Coursework />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name — AI/ML Engineer
      </footer>
    </div>
  )
}
