import { ArrowRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Spline Animation - full viewport */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) for smoother readability on a light scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_60%)]" />

      {/* Content overlay */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-rose-700/90 bg-white/70 ring-1 ring-rose-200/60 px-3 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-rose-500" /> Smooth • Interactive • Minimal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Effortlessly smooth, delightfully interactive
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-slate-700 leading-relaxed"
          >
            A seamless grid of white, cubic tiles that respond with soft red ripples as you interact. Clean, modern, and calm — built for a polished, fluid feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white px-4 py-2 rounded-lg transition-colors">
              Explore Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-rose-200 text-rose-700 hover:bg-rose-50 transition-colors">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {['Spline 3D', 'Framer Motion', 'Tailwind', 'Smooth Scroll'].map((t) => (
              <span key={t} className="text-xs text-slate-700 bg-white/70 ring-1 ring-slate-200 px-3 py-1 rounded-full backdrop-blur-sm">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
