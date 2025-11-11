import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Coursework', href: '#coursework' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur border-b transition-colors ${elevated ? 'bg-white/80 border-rose-100' : 'bg-white/60 border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">AI/ML Portfolio</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-rose-700 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-rose-50">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-rose-50">
            <Linkedin size={18} />
          </a>
          <a href="mailto:you@example.com" className="p-2 rounded hover:bg-rose-50">
            <Mail size={18} />
          </a>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-rose-50" onClick={() => setOpen(!open)}>
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white">
          <div className="px-4 py-2 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
