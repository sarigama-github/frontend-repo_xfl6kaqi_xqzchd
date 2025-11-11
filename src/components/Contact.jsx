import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Tilt from './Tilt'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 bg-rose-100 blur-3xl opacity-60 rounded-full" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <Tilt intensity={6} glare className="block">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-rose-100 p-6 md:p-8 bg-white/80 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-2 text-gray-600">Open to AI/ML internships and full-time roles. Let’s build something impactful.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <motion.a whileHover={{ scale: 1.02 }} href="mailto:you@example.com" className="flex items-center gap-2 rounded-xl border border-rose-100 p-4 hover:shadow-sm">
                <Mail size={18} /> <span className="text-sm">you@example.com</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-rose-100 p-4 hover:shadow-sm">
                <Github size={18} /> <span className="text-sm">github.com/yourhandle</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-rose-100 p-4 hover:shadow-sm">
                <Linkedin size={18} /> <span className="text-sm">linkedin.com/in/yourhandle</span>
              </motion.a>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  )
}
