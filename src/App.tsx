import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <Navbar />

      {/* Fixed left sidebar — social links */}
      <div className="hidden lg:flex fixed left-6 xl:left-10 bottom-0 z-30 flex-col items-center">
        <SocialLinks orientation="vertical" />
      </div>

      {/* Fixed right sidebar — email */}
      <div className="hidden lg:flex fixed right-6 xl:right-10 bottom-0 z-30 flex-col items-center gap-5">
        <a
          href="mailto:jzheng2413@gmail.com"
          className="font-mono text-slate text-xs tracking-widest hover:text-teal transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          jzheng2413@gmail.com
        </a>
        <div className="w-px h-24 bg-slate/40 mt-2" />
      </div>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
