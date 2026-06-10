import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { stagger, fadeIn } from '../utils/animations'

const links = [
  { icon: FiGithub, href: 'https://github.com/Jason-Z1', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jason-zheng01/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jzheng2413@gmail.com', label: 'Email' },
  { icon: FiTwitter, href: 'https://x.com/jasonZ_1', label: 'X / Twitter' },
]

interface Props {
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export default function SocialLinks({ orientation = 'vertical', className = '' }: Props) {
  const isVertical = orientation === 'vertical'

  return (
    <motion.ul
      variants={stagger}
      initial="hidden"
      animate="visible"
      className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-5 ${className}`}
    >
      {links.map(({ icon: Icon, href, label }) => (
        <motion.li key={label} variants={fadeIn}>
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate hover:text-teal hover:-translate-y-0.5 transition-all duration-200 block"
          >
            <Icon size={20} />
          </a>
        </motion.li>
      ))}
      {isVertical && (
        <li>
          <div className="w-px h-24 bg-slate/40 mt-2" />
        </li>
      )}
    </motion.ul>
  )
}
