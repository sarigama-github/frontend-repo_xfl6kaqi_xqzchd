import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

// Floating 3D cursor-following blob accent
// - Follows the cursor with a spring for smoothness
// - Uses a soft rose radial gradient and subtle rotation for depth
// - Respects reduced motion and disables on touch devices
export default function CursorBlob({ enabled = true }) {
  const [isTouch, setIsTouch] = useState(false)
  const [hovering, setHovering] = useState(true)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const x = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 })
  const y = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onLeave = () => setHovering(false)
    const onEnter = () => setHovering(true)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerenter', onEnter)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerenter', onEnter)
    }
  }, [x, y])

  if (!enabled || isTouch) return null

  return (
    <motion.div
      aria-hidden
      className="fixed pointer-events-none z-[5] mix-blend-multiply" // behind navbar (z-50) and content overlays
      style={{ left: 0, top: 0, x, y, translateX: '-50%', translateY: '-50%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hovering ? 0.35 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-56 h-56 md:w-64 md:h-64 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(244,63,94,0.6) 0%, rgba(244,63,94,0.25) 30%, rgba(244,63,94,0.12) 55%, transparent 70%)',
          boxShadow: '0 60px 120px -40px rgba(244,63,94,0.35)',
        }}
        animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 0.99, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
