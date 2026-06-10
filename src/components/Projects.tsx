import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeInUp } from '../utils/animations'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const ALL = 'All'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const categories = [ALL, ...Array.from(new Set(featured.map((p) => p.category)))]
  const [filter, setFilter] = useState(ALL)

  const visible = filter === ALL ? featured : featured.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 md:px-24 lg:px-32 max-w-5xl mx-auto">
      {/* Section header animates in once on scroll */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeInUp} className="section-heading">
          <span className="section-number">03.</span> Work
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-200 ${
                filter === cat
                  ? 'border-teal text-teal bg-teal/10'
                  : 'border-slate/30 text-slate hover:border-teal/40 hover:text-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Grid uses AnimatePresence so each card has its own enter/exit — no parent variant inheritance */}
      <div className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate text-center py-12"
        >
          No projects in this category yet.
        </motion.p>
      )}
    </section>
  )
}
