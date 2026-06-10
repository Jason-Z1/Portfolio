import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi'
import { motion } from 'framer-motion'
import type { Project } from '../types'

const STATUS_COLORS: Record<string, string> = {
  Completed: 'text-teal bg-teal/10 border-teal/20',
  'In Progress': 'text-yellow-300 bg-yellow-300/10 border-yellow-300/20',
}

const CATEGORY_ACCENT: Record<string, string> = {
  'AI Modeling': '#7c3aed',
  'Reinforcement Learning': '#2563eb',
  'Data Analysis': '#0891b2',
  'Full Stack Web App': '#16a34a',
}

interface Props {
  project: Project
}

function resolveLink(link: string) {
  if (!link) return '#'
  if (link.startsWith('http')) return link
  return `https://${link}`
}

export default function ProjectCard({ project }: Props) {
  const accentColor = CATEGORY_ACCENT[project.category] ?? '#64ffda'
  const href = resolveLink(project.link)
  const isGithub = href.includes('github.com')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-navy-lighter border border-navy-lighter hover:border-teal/20 rounded-lg p-6
                 flex flex-col gap-4 transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/60"
    >
      {/* Category accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: accentColor }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className="font-mono text-xs text-slate mb-1 block">{project.category}</span>
          <h3 className="text-white-ish font-semibold text-lg leading-tight group-hover:text-teal transition-colors">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isGithub ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="text-slate hover:text-teal transition-colors p-1"
            >
              <FiGithub size={18} />
            </a>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit project"
              className="text-slate hover:text-teal transition-colors p-1"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Award */}
      {project.award && (
        <div className="flex items-center gap-2 bg-yellow-300/5 border border-yellow-300/20 rounded px-3 py-2">
          <FiAward size={14} className="text-yellow-300 shrink-0" />
          <p className="font-mono text-xs text-yellow-300 leading-snug">{project.award}</p>
        </div>
      )}

      {/* Description */}
      <p className="text-slate text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-navy-light">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tag text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="font-mono text-xs text-slate">+{project.technologies.length - 3}</span>
          )}
        </div>

        <span
          className={`font-mono text-xs px-2 py-0.5 rounded border shrink-0 ${
            STATUS_COLORS[project.status] ?? 'text-slate border-slate/20'
          }`}
        >
          {project.status}
        </span>
      </div>
    </motion.article>
  )
}
