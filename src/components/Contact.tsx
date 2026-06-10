import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FiSend, FiLoader } from 'react-icons/fi'
import { stagger, fadeInUp } from '../utils/animations'

interface FormData {
  name: string
  email: string
  message: string
}

// Strict format check: local@domain.tld — rejects bare domains and missing TLDs
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/

async function domainHasMxRecords(email: string): Promise<true | string> {
  const domain = email.split('@')[1]
  if (!domain) return 'Invalid email address'
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`,
      { signal: controller.signal },
    )
    clearTimeout(timeout)
    if (!res.ok) return true // fail open on HTTP error
    const data = await res.json() as { Answer?: unknown[] }
    if (!data.Answer?.length) return `"${domain}" cannot receive email`
  } catch {
    return true // fail open on network/timeout error
  }
  return true
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValidating },
  } = useForm<FormData>({ mode: 'onBlur' })

  const onSubmit = async (data: FormData) => {
    const res = await fetch('https://formspree.io/f/xaqnbjrz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) reset()
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-24 lg:px-32 max-w-5xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeInUp} className="section-heading">
          <span className="section-number">05.</span> Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: blurb */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <p className="text-slate text-base leading-relaxed">
              I'm always open to new opportunities, collaborations, or just chatting
              about interesting projects. Whether you have a question or just want to
              say hi, my inbox is open.
            </p>
            <p className="text-slate text-base leading-relaxed">
              You can also reach me directly at{' '}
              <a
                href="mailto:jzheng2413@gmail.com"
                className="text-teal hover:underline font-mono text-sm"
              >
                jzheng2413@gmail.com
              </a>
            </p>

            <div className="pt-4 space-y-3">
              {[
                { label: 'Response time', value: 'Usually within 24 hours' },
                { label: 'Availability', value: 'Open to internships & projects' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="font-mono text-teal text-xs mt-0.5">→</span>
                  <div>
                    <p className="font-mono text-xs text-slate">{label}</p>
                    <p className="text-slate-lighter text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {isSubmitSuccessful && (
              <div className="bg-teal/10 border border-teal/20 rounded-lg px-4 py-3 text-teal font-mono text-sm">
                Message sent! I'll get back to you soon.
              </div>
            )}

            {/* Name */}
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                className={`w-full bg-navy-lighter border rounded-lg px-4 py-3 text-slate-lighter text-sm
                           placeholder:text-slate/50 focus:outline-none focus:border-teal/50 transition-colors
                           ${errors.name ? 'border-red-400/50' : 'border-navy-lighter hover:border-slate/30'}`}
              />
              {errors.name && (
                <p className="font-mono text-xs text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: 'Enter a valid email address',
                    },
                    validate: domainHasMxRecords,
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full bg-navy-lighter border rounded-lg px-4 py-3 text-slate-lighter text-sm
                             placeholder:text-slate/50 focus:outline-none focus:border-teal/50 transition-colors
                             ${errors.email ? 'border-red-400/50' : 'border-navy-lighter hover:border-slate/30'}`}
                />
                {isValidating && (
                  <FiLoader
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate animate-spin"
                  />
                )}
              </div>
              {errors.email && (
                <p className="font-mono text-xs text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Message"
                rows={5}
                className={`w-full bg-navy-lighter border rounded-lg px-4 py-3 text-slate-lighter text-sm
                           placeholder:text-slate/50 focus:outline-none focus:border-teal/50 transition-colors
                           resize-none ${errors.message ? 'border-red-400/50' : 'border-navy-lighter hover:border-slate/30'}`}
              />
              {errors.message && (
                <p className="font-mono text-xs text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isValidating}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="font-mono text-sm">Sending...</span>
              ) : (
                <>
                  <FiSend size={14} />
                  <span className="font-mono text-sm">Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
