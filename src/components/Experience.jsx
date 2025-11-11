import { motion } from 'framer-motion'
import Tilt from './Tilt'

const experience = [
  {
    role: 'Research Intern',
    org: 'AI Lab, University',
    time: 'May 2024 — Aug 2024',
    bullets: [
      'Explored transformer architectures for document classification',
      'Implemented efficient fine-tuning (LoRA, Adapters) reducing training cost by 35%',
      'Co-authored workshop paper under review'
    ]
  },
  {
    role: 'ML Engineer Intern',
    org: 'Startup X',
    time: 'Jan 2024 — Apr 2024',
    bullets: [
      'Productionized a FastAPI inference service on Docker',
      'Designed data pipelines with Prefect and DVC for versioning',
      'Set up monitoring dashboards with W&B'
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } }
}

const row = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-rose-100 blur-3xl opacity-60 rounded-full" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-6 space-y-4"
        >
          {experience.map((e) => (
            <Tilt key={e.role} intensity={8} className="block">
              <motion.div variants={row} className="rounded-xl border border-rose-100 p-5 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-gray-900">{e.role}</h3>
                    <p className="text-sm text-gray-600">{e.org}</p>
                  </div>
                  <p className="text-sm text-gray-500">{e.time}</p>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {e.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
