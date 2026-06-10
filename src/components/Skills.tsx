import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeInUp } from '../utils/animations'
import { skills } from '../data/projects'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const displayed =
    activeCategory === null
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-6 md:px-24 lg:px-32 max-w-5xl mx-auto">
      {/* Section header animates in once on scroll */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeInUp} className="section-heading">
          <span className="section-number">02.</span> Skills
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-200 ${
              activeCategory === null
                ? 'border-teal text-teal bg-teal/10'
                : 'border-slate/30 text-slate hover:border-teal/40 hover:text-teal'
            }`}
          >
            All
          </button>
          {skills.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category === activeCategory ? null : s.category)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-200 ${
                activeCategory === s.category
                  ? 'border-teal text-teal bg-teal/10'
                  : 'border-slate/30 text-slate hover:border-teal/40 hover:text-teal'
              }`}
            >
              {s.category}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Grid uses AnimatePresence so each card has its own enter/exit — no parent variant inheritance */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayed.map((group, i) => (
            <motion.div
              key={group.category}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="bg-navy-lighter border border-navy-lighter hover:border-teal/20 rounded-lg p-5 transition-colors duration-200"
            >
              <h3 className="font-mono text-teal text-xs mb-4 uppercase tracking-widest">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="tag">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
