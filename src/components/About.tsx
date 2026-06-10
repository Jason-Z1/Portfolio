import { motion } from 'framer-motion'
import { stagger, fadeInUp, slideInLeft } from '../utils/animations'

const highlights = [
  { label: 'University', value: 'Rensselaer Polytechnic Institute' },
  { label: 'Major', value: 'CS + IT & Web Science' },
  { label: 'Focus', value: 'Full Stack, AI, Data Systems' },
  { label: 'Status', value: 'Open to Opportunities' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 lg:px-32 max-w-5xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeInUp} className="section-heading">
          <span className="section-number">01.</span> About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div variants={slideInLeft} className="md:col-span-3 space-y-5 text-slate text-base leading-relaxed">
            <p>
              I'm a computer science student passionate about building tools that are both
              technically sound and genuinely useful. Whether it's a full-stack web app,
              an AI model, or a data pipeline, I care deeply about the intersection of
              clean engineering and real-world impact.
            </p>
            <p>
              I've contributed to open-source reinforcement learning research, competed in
              hackathons, and built projects ranging from social media apps to financial
              data visualizers. I'm always looking for the next challenge that lets me
              grow as an engineer and make something worth using.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, reading about AI
              research, or working on side projects that scratch a personal itch.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={stagger} className="md:col-span-2 space-y-4">
            {highlights.map(({ label, value }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="bg-navy-lighter border border-navy-lighter hover:border-teal/20 rounded-lg p-4 transition-colors duration-200"
              >
                <p className="font-mono text-teal text-xs mb-1">{label}</p>
                <p className="text-slate-lighter text-sm font-medium">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
