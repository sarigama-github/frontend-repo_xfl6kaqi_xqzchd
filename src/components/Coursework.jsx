import { motion } from 'framer-motion'

const courses = [
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Data Structures & Algorithms',
  'Probability & Statistics',
  'Linear Algebra',
  'Operating Systems'
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}

const tile = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 18 } }
}

export default function Coursework() {
  return (
    <section id="coursework" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Relevant Coursework
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3"
        >
          {courses.map((c) => (
            <motion.div key={c} variants={tile} whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm/0 hover:shadow-sm">
              {c}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
