import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Tilt({ children, className = '', intensity = 12, glare = false }) {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const rx = (-py * intensity).toFixed(2)
    const ry = (px * intensity).toFixed(2)
    setTransform(`rotateX(${rx}deg) rotateY(${ry}deg)`)
    if (glare) setGlarePos({ x: (px + 0.5) * 100, y: (py + 0.5) * 100 })
  }

  const onLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)')
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      <div
        className="will-change-transform"
        style={{ transform, transformStyle: 'preserve-3d', transition: 'transform 150ms ease-out' }}
      >
        {/* Optional glare */}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              background:
                `radial-gradient(600px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25), transparent 40%)`,
              transform: 'translateZ(40px)'
            }}
          />
        )}
        <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
      </div>
    </motion.div>
  )
}
