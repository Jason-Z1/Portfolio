import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { stagger, fadeInUp } from '../utils/animations'
import { experience } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 lg:px-32 max-w-5xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeInUp} className="section-heading">
          <span className="section-number">03.</span> Experience
        </motion.h2>

        <div className="space-y-6">
          {experience.map((job) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              className="group bg-navy-lighter border border-navy-lighter hover:border-teal/20 rounded-lg p-6 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white-ish font-semibold text-lg leading-tight group-hover:text-teal transition-colors">
                    {job.role}
                  </h3>
                  <p className="flex items-center gap-1.5 text-teal font-mono text-sm mt-0.5">
                    <FiMapPin size={13} />
                    {job.company}
                  </p>
                </div>
                {job.period && (
                  <span className="font-mono text-xs text-slate border border-slate/20 rounded px-2 py-1 h-fit">
                    {job.period}
                  </span>
                )}
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate text-sm leading-relaxed">
                    <span className="text-teal mt-1 shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-light">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
