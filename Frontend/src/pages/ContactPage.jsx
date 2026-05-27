import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { slideInLeft, slideInRight } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const emptyForm = { name: '', email: '', reason: 'General Inquiry', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState({ ...emptyForm })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    const CLINIC_WHATSAPP = '919272351881'

    const message = [
      `*New Contact Message*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Reason:* ${form.reason}`,
      `*Message:* ${form.message}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setStatus('success')
    setForm({ ...emptyForm })
  }

  return (
    <PageTransition>
      <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
        <Navbar />
        <main className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <section className="mb-16 text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-display font-bold text-[#005d90] mb-4"
            >Get in Touch</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-[#4d5b64]"
            >
              Experience premium dental care in a serene environment. Our team is ready to assist you with any questions or appointment requests.
            </motion.p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info + Hours */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-white p-8 rounded-xl air-shadow border border-[#e7eeff]">
                <h2 className="text-xl font-bold text-[#005d90] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: 'location_on', title: 'Our Location', lines: ['Office No. 101, 1st Floor, C-Wing,', 'Krisala 41 Elite, Jeevan Nagar,', 'Ashok Road, Tathawade - 411033'] },
                    { icon: 'call', title: 'Phone Number', lines: ['92723 51881', '74472 51881'] },
                    { icon: 'mail', title: 'Email Address', lines: ['smizedentalcare@gmail.com'] },
                  ].map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#7cf8dd]/20 rounded-xl flex items-center justify-center text-[#006b5b] shrink-0">
                        <span className="material-symbols-outlined">{info.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111c2d] mb-1">{info.title}</p>
                        {info.lines.map((l, i) => (
                          <p key={i} className={`text-[#4d5b64] ${i === 1 && info.icon === 'call' ? 'text-sm font-medium mt-1' : ''}`}>{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl air-shadow border border-[#e7eeff]">
                <h2 className="text-xl font-bold text-[#005d90] mb-6">Working Hours</h2>
                <div className="space-y-3">
                  {[
                    { days: 'Monday – Thursday', hours: '10:00 AM – 10:00 PM' },
                    { days: 'Friday', hours: '10:00 AM – 10:00 PM' },
                    { days: 'Saturday', hours: '10:00 AM – 10:00 PM' },
                    { days: 'Sunday', hours: '10:00 AM – 10:00 PM' },
                  ].map((row) => (
                    <div key={row.days} className="flex justify-between items-center py-2 border-b border-[#f0f3ff] last:border-0">
                      <span className="text-[#4d5b64]">{row.days}</span>
                      <span className={`font-semibold ${row.closed ? 'text-[#ba1a1a]' : 'text-[#111c2d]'}`}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form + Map */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-white p-8 rounded-xl air-shadow border border-[#e7eeff]">
                <h2 className="text-xl font-bold text-[#005d90] mb-6">Send us a Message</h2>

                {/* Success Message */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 bg-[#e8faf3] border border-[#7cf8dd] rounded-xl p-4 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-[#006b5b] mt-0.5">check_circle</span>
                      <div>
                        <p className="font-bold text-[#006b5b]">Message Sent!</p>
                        <p className="text-sm text-[#4d5b64] mt-1">We'll get back to you shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                  {status === 'error' && errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 bg-[#fef2f2] border border-[#fca5a5] rounded-xl p-4 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-[#dc2626] mt-0.5">error</span>
                      <div>
                        <p className="font-bold text-[#dc2626]">Something went wrong</p>
                        <p className="text-sm text-[#4d5b64] mt-1">{errorMsg}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d] ml-1" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#f8fafc] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0077b6]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d] ml-1" htmlFor="contactEmail">Email Address</label>
                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#f8fafc] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0077b6]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[#111c2d] ml-1" htmlFor="reason">Reason for Contact</label>
                    <select
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0077b6]/30 outline-none text-sm appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Billing Question</option>
                      <option>Feedback &amp; Testimonial</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[#111c2d] ml-1" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      className="w-full bg-[#f8fafc] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0077b6]/30 outline-none text-sm resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#0077b6] text-white font-bold py-4 rounded-lg hover:bg-[#005d90] transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Map placeholder */}
              <div className="relative rounded-xl overflow-hidden air-shadow border border-[#e7eeff] h-64 group bg-[#e7eeff]">
                <img
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrsnncfSVUBR3Z0D8PD4wc68HeI7iKHSjVPVqqkbqTwbxAa_ql5IoqjZOf6hCWy42IwCWVJNCA1Fyr8vDFq4n9vuFhEzkt68sMmjKRYQsr9BQr_jTyZVIVCAeMHu7bwq6reiRXaqHurqfzhiIu7u72J_jHcUr1ctWjEqfkmn0oYVF8kxtzoJ_lDAYWaXMcWqal-iQGWqKSjY4RjaQLskba4NvyuDXLKqSoNvBszonLyEza4MPjZABxXQ7NKLSuEnd-mS4HTKIiD_U"
                  alt="Clinic location map"
                />
                <div className="absolute inset-0 bg-[#005d90]/5 pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border border-sky-50">
                  <p className="font-bold text-[#005d90] mb-1">Find us here</p>
                  <p className="text-sm text-[#4d5b64]">Krisala 41 Elite, Tathawade, Pune - 411033</p>
                  <a
                    href="https://maps.app.goo.gl/LWX4fFfwc9XDdwhg9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[#006b5b] font-bold text-sm flex items-center gap-1 hover:underline"
                  >
                    Open in Google Maps
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
