import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = ['about', 'skills', 'projects', 'contact']
const NAV_LABELS = ['About', 'Skills', 'Work', 'Contact']

export default function Navbar() {
  const scrolled = useScrolled(50)
  const active = useActiveSection(SECTIONS)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'h-16 bg-navy/95 backdrop-blur-md border-b border-teal/10 shadow-lg shadow-navy/50'
            : 'h-20 bg-transparent'
        }`}
      >
        <a
          href="#hero"
          className="font-mono text-teal font-semibold text-lg w-9 h-9 flex items-center justify-center border border-teal rounded hover:bg-teal/10 transition-colors"
          onClick={closeMenu}
        >
          JZ
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ol className="flex items-center gap-8">
            {SECTIONS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`font-mono text-sm transition-colors hover:text-teal ${
                    active === id ? 'text-teal' : 'text-slate-lighter'
                  }`}
                >
                  <span className="text-teal">0{i + 1}.</span>{' '}
                  {NAV_LABELS[i]}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/Jason_Zheng_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-teal transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-teal transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-teal transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-light flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <ol className="flex flex-col items-center gap-8 text-center">
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className="flex flex-col items-center gap-1 hover:text-teal transition-colors"
                  >
                    <span className="font-mono text-teal text-sm">0{i + 1}.</span>
                    <span className="text-white-ish text-2xl font-semibold">
                      {NAV_LABELS[i]}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ol>
            <motion.a
              href="/Jason_Zheng_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
