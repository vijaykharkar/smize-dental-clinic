import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInRight, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

export default function AppointmentPage() {
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
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Personal Information */}
              <div>
                <h3 className="text-sm font-bold text-[#707881] uppercase tracking-widest mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="dob">Date of Birth</label>
                    <input
                      id="dob"
                      type="date"
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
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="date">Preferred Date</label>
                    <input
                      id="date"
                      type="date"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="time">Preferred Time</label>
                    <select
                      id="time"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">Select a time slot</option>
                      {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="service">Select Service</label>
                    <select
                      id="service"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">Choose a service</option>
                      {['General Checkup', 'Teeth Cleaning', 'Root Canal', 'Dental Implants', 'Teeth Whitening', 'Braces / Aligners', 'Cosmetic Consultation', 'Emergency Care'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#111c2d]" htmlFor="doctor">Preferred Doctor</label>
                    <select
                      id="doctor"
                      className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm appearance-none"
                    >
                      <option value="">No preference</option>
                      <option value="shubham">Dr. Shubham Kharat</option>
                      <option value="deepika">Dr. Deepika Waghmare Kharat</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111c2d]" htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Let us know about any dental concerns or special requirements..."
                  className="w-full bg-[#f8fafc] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#005d90]/30 outline-none text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0077b6] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#005d90] transition-colors shadow-lg"
              >
                Confirm Appointment
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
