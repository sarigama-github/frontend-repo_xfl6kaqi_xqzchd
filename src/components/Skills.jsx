import { motion } from 'framer-motion'
import Tilt from './Tilt'

const skills = [
  {
    title: 'Machine Learning',
    items: ['Supervised/Unsupervised Learning', 'Model Evaluation & Tuning', 'Feature Engineering', 'MLOps basics'],
  },
  {
    title: 'Deep Learning',
    items: ['PyTorch', 'TensorFlow/Keras', 'CNNs • RNNs • Transformers', 'Computer Vision • NLP'],
  },
  {
    title: 'Data & Backend',
    items: ['Python • SQL', 'Pandas • NumPy • Sklearn', 'FastAPI • REST', 'MongoDB • Postgres'],
  },
  {
    title: 'Tools',
    items: ['Git • Docker', 'Linux • Bash', 'Weights & Biases', 'HuggingFace'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
}

const card = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

const item = {
  hidden: { x: -8, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.35 } }
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-rose-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-100 blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((group) => (
            <Tilt key={group.title} intensity={10} glare className="relative">
              <motion.div
                variants={card}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl border border-rose-100 p-5 bg-white/80 backdrop-blur-sm shadow-sm/0 hover:shadow-sm transition will-change-transform"
              >
                <h3 className="font-semibold text-gray-800">{group.title}</h3>
                <motion.ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                  {group.items.map((it) => (
                    <motion.li key={it} variants={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span> {it} </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
