import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const links = [
  { icon: FiGithub, href: 'https://github.com/Jason-Z1', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jason-zheng01/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jzheng2413@gmail.com', label: 'Email' },
  { icon: FiTwitter, href: 'https://x.com/jasonZ_1', label: 'X / Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-navy-lighter py-10 px-6 md:px-24 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-slate text-xs text-center sm:text-left">
        Designed &amp; Built by{' '}
        <span className="text-teal">Jason Zheng</span>
      </p>

      <div className="flex items-center gap-5">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate hover:text-teal hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </footer>
  )
}
