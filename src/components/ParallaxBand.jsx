import { motion, useScroll, useTransform } from 'framer-motion'

// Subtle scroll-based parallax band to add depth between sections
export default function ParallaxBand({ intensity = 40, className = '', mobileIntensity = 20 }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity])
  const yMobile = useTransform(scrollYProgress, [0, 1], [-mobileIntensity, mobileIntensity])

  // Choose transform based on viewport width via CSS class and pass both layers
  return (
    <div className={`relative h-24 md:h-32 overflow-hidden ${className}`} aria-hidden>
      <motion.div style={{ y: yMobile }} className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="h-full w-full bg-[radial-gradient(120%_60%_at_50%_10%,rgba(244,63,94,0.10),transparent_60%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-rose-100/0 via-rose-100/50 to-rose-100/0" />
        </div>
      </motion.div>

      <motion.div style={{ y }} className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 opacity-70">
          <div className="h-full w-full bg-[radial-gradient(120%_60%_at_50%_10%,rgba(244,63,94,0.12),transparent_60%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-rose-100/0 via-rose-100/60 to-rose-100/0" />
        </div>
      </motion.div>
    </div>
  )
}
