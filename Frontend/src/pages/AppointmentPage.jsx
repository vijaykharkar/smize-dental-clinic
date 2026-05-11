import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInRight, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const serviceOptions = ['General Checkup', 'Teeth Cleaning', 'Root Canal', 'Dental Implants', 'Teeth Whitening', 'Dental Veneers', 'Smile Makeover', 'Composite Bonding', 'Dental Fillings', 'Invisible Braces', 'Pediatric Dentistry', 'Dental Trauma', 'Braces / Aligners', 'Cosmetic Consultation', 'Emergency Care']

const emptyForm = { fullName: '', phone: '', email: '', dob: '', date: '', time: '', service: '', doctor: '', notes: '' }

export default function AppointmentPage() {
  const [searchParams] = useSearchParams()
  const prefilledService = searchParams.get('service') || ''
  const [form, setForm] = useState({ ...emptyForm, service: prefilledService })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (prefilledService) {
      const match = serviceOptions.find(s => s.toLowerCase().includes(prefilledService.toLowerCase()))
      setForm(f => ({ ...f, service: match || prefilledService }))
    }
  }, [prefilledService])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName || !form.phone || !form.email || !form.date || !form.time || !form.service) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API_URL}/api/appointment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.fullName,
          phone: form.phone,
          email: form.email,
          dob: form.dob,
          preferred_date: form.date,
          preferred_time: form.time,
          service: form.service,
          doctor: form.doctor || 'No preference',
          notes: form.notes,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus('success')
      setForm({ ...emptyForm })
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit. Please try again.')
      setStatus('error')
    }
  }

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.span variants={staggerItem} className="inline-block px-4 py-1.5 bg-[#7cf8dd] text-[#007261] rounded-full text-sm font-bold">
                Book an Appointment
              </motion.span>
              <motion.h1 variants={staggerItem} className="text-display font-bold text-[#005d90]">Your Journey to a Better Smile Starts Here</motion.h1>
              <motion.p variants={staggerItem} className="text-lg text-[#4d5b64]">
                Take the first step toward a healthier smile. Fill out the form and our team will confirm your appointment within 24 hours.
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: 'phone_in_talk', label: 'Call Us', value: '92723 51881 / 74472 51881' },
                  { icon: 'schedule', label: 'Working Hours', value: 'Mon–Sat, 10AM–8PM' },
                  { icon: 'location_on', label: 'Our Address', value: 'Krisala 41 Elite, Tathawade - 411033' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#7cf8dd]/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#006b5b]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#707881] uppercase tracking-widest">{item.label}</p>
                      <p className="font-semibold text-[#111c2d]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="rounded-2xl overflow-hidden air-shadow h-[480px]"
            >
              <img
                alt="Dental appointment"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAil8nJI31oX2vGBVEoaWgUqmHWYMzQGBxWH1h_M_0zIjyGLnvn7VDHkpixbm9bStw4iXzF8L2HrP2TkrMz5_SJLkHuMbAbLpHJcKt2cPmWHBt5RoOhHlzQH1HZHxXBLNTQ3yBLDMXqbqDXAMcbFSJMNR2Hn_fVJeEQEyLxW0jJ7GaFpJQ-3LqSlLSWJHkYpIBnXHGrXsLZ5L8RZ-0MX2BHamzZSL2txPNMTiLJZFBNarxlmY5_bJiomaxZ0j9gRrO9g81TqpEE"
              />
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="max-w-4xl mx-auto px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="bg-white rounded-2xl air-shadow border border-[#d8e3fb] p-10"
          >
            <h2 className="text-headline-md font-bold text-[#005d90] mb-8">Appointment Details</h2>

            {/* Success Message */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 bg-[#e8faf3] border border-[#7cf8dd] rounded-xl p-5 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-[#006b5b] mt-0.5">check_circle</span>
                  <div>
                    <p className="font-bold text-[#006b5b]">Appointment Request Sent!</p>
                    <p className="text-sm text-[#4d5b64] mt-1">We've received your request and will confirm within 24 hours. Check your email for updates.</p>
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
                  className="mb-8 bg-[#fef2f2] border border-[#fca5a5] rounded-xl p-5 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-[#dc2626] mt-0.5">error</span>
                  <div>
                    <p className="font-bold text-[#dc2626]">Something went wrong</p>
                    <p className="text-sm text-[#4d5b64] mt-1">{errorMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div>
                <h3 className="text-sm font-bold text-[#707881] uppercase tracking-widest mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="92723 51881"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="dob">Date of Birth</label>
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      value={form.dob}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-sm font-bold text-[#707881] uppercase tracking-widest mb-4">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="date">Preferred Date *</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">Select a time slot</option>
                      {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="service">Select Service *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="doctor">Preferred Doctor</label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">No preference</option>
                      <option value="Dr. Shubham Kharat">Dr. Shubham Kharat</option>
                      <option value="Dr. Deepika Waghmare Kharat">Dr. Deepika Waghmare Kharat</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111c2d]" htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Let us know about any dental concerns or special requirements..."
                  className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#0077b6] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#005d90] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Sending...
                  </>
                ) : 'Confirm Appointment'}
              </motion.button>
              <p className="text-center text-xs text-[#707881]">
                By submitting, you agree to our privacy policy. We will confirm your appointment within 24 hours.
              </p>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
