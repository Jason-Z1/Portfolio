import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { stagger, fadeInUp } from '../utils/animations'

const ROLES = [
  'full-stack applications.',
  'AI-powered tools.',
  'data pipelines.',
]

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-32 pt-20"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl relative"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-teal text-sm sm:text-base mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white-ish leading-tight mb-4"
        >
          Jason Zheng.
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate leading-tight mb-8"
        >
          I build{' '}
          <span className="text-teal">
            {typed}
            <span className="animate-cursor-blink">|</span>
          </span>
        </motion.h2>

        <motion.div variants={fadeInUp} className="max-w-xl mb-10 space-y-5">
          <p className="font-mono text-teal text-sm sm:text-base italic border-l-2 border-teal/40 pl-4">
            "Working code is easy. Good infrastructure is rare."
          </p>
          <p className="text-slate text-base sm:text-lg leading-relaxed">
            I'm studying Computer Science and Web Science at RPI.
            I build across the stack and think in systems. I focus
            on the infrastructure others overlook: data pipelines,
            real-time APIs, hardware integration, optimization.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary text-sm">
            Check out my work
          </a>
          <a href="#contact" className="btn-secondary text-sm">
            Get in touch →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate hover:text-teal transition-colors flex flex-col items-center gap-2 text-xs font-mono"
      >
        <FiArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
