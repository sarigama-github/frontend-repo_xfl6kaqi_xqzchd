import { motion } from 'framer-motion'
import Tilt from './Tilt'

const projects = [
  {
    title: 'Real-time Sign Language Translator',
    tag: 'Computer Vision',
    desc: 'Trained a CNN+GRU model to translate ASL gestures to text in real-time using OpenCV and PyTorch. Deployed as a web app with FastAPI.',
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Demo', href: '#' }
    ]
  },
  {
    title: 'Resume Analyzer with BERT',
    tag: 'NLP',
    desc: 'Fine-tuned DistilBERT to score resumes against job descriptions. Achieved 0.87 F1 on validation and served predictions via REST API.',
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Demo', href: '#' }
    ]
  },
  {
    title: 'Credit Risk Modeling',
    tag: 'ML',
    desc: 'Built a gradient boosting pipeline with SHAP explanations. Implemented model monitoring and drift alerts. AUC: 0.92.',
    links: [
      { label: 'Code', href: 'https://github.com/' }
    ]
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } }
}

const card = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Projects
          </motion.h2>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm text-rose-700 hover:text-rose-800">See all →</a>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-6 grid md:grid-cols-3 gap-4"
        >
          {projects.map((p) => (
            <Tilt key={p.title} glare className="group relative" intensity={10}>
              <motion.div
                variants={card}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-rose-100 bg-white p-5 shadow-sm/0 hover:shadow-sm transition relative overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/0 via-transparent to-rose-100/40 opacity-0 group-hover:opacity-100 transition" />
                <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2 py-1 rounded">{p.tag}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-rose-700 hover:text-rose-800">
                      {l.label} →
                    </a>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
