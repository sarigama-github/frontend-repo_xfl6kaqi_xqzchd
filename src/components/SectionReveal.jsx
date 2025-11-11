import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Reveals children with a subtle 3D entrance on scroll
// - Respects reduced motion and renders statically when requested
// - Triggers once when section first enters the viewport
export default function SectionReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, rotateX: 2 },
      show: { opacity: 1, y: 0, rotateX: 0 },
    }),
    []
  )

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
