import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem } from '../utils/animations'
import { services } from '../data/services'

const vp = { once: true, margin: '-60px' }

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl border border-[#d8e3fb] p-5 air-shadow">
      <button className="flex justify-between items-center w-full text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-[#111c2d]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="material-symbols-outlined text-[#005d90] flex-shrink-0"
        >
          expand_more
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#4d5b64] leading-relaxed overflow-hidden pt-3"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find((s) => s.slug === slug)
  const related = services.filter((s) => s.slug !== slug && s.category === service?.category).slice(0, 3)
  const relatedFill = related.length < 3
    ? [...related, ...services.filter((s) => s.slug !== slug && !related.find((r) => r.slug === s.slug)).slice(0, 3 - related.length)]
    : related

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <PageTransition>
        <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased min-h-screen">
          <Navbar />
          <main className="pt-40 pb-24 text-center">
            <h1 className="text-3xl font-bold text-[#005d90] mb-4">Service Not Found</h1>
            <p className="text-[#4d5b64] mb-8">The service you are looking for does not exist.</p>
            <Link to="/services" className="bg-[#0077b6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#005d90] transition-colors">
              View All Services
            </Link>
          </main>
          <Footer />
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <Link to="/" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
            <Link to="/services" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Services</Link>
            <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
            <span className="text-sm font-semibold text-[#005d90]">{service.shortTitle}</span>
          </motion.div>
        </section>

        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96"
          >
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 max-w-2xl">
                <span className="inline-block bg-[#7cf8dd]/90 text-[#006b5b] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                  {service.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h1>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    {service.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">person</span>
                    Dr. Shubham Kharat, MDS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-4">Overview</motion.h2>
                <motion.p variants={staggerItem} className="text-[#4d5b64] leading-relaxed text-lg">
                  {service.shortDesc}
                </motion.p>
              </motion.section>

              {/* Benefits */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-6">
                  Key Benefits
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#d8e3fb] air-shadow"
                    >
                      <span className="material-symbols-outlined text-[#006b5b] mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[#111c2d] text-sm font-medium">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Treatment Process */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-6">
                  Treatment Process
                </motion.h2>
                <div className="space-y-0">
                  {service.process.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="flex gap-4 relative"
                    >
                      {/* Timeline line */}
                      {i < service.process.length - 1 && (
                        <div className="absolute left-[19px] top-10 w-0.5 h-[calc(100%-8px)] bg-[#d8e3fb]" />
                      )}
                      <div className="w-10 h-10 bg-[#0077b6] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm z-10">
                        {i + 1}
                      </div>
                      <div className="pb-8 flex-1">
                        <h3 className="font-bold text-[#111c2d] mb-1">{p.step}</h3>
                        <p className="text-[#4d5b64] text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Signs & Symptoms */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-6">
                  Signs & Symptoms to Watch For
                </motion.h2>
                <motion.div variants={staggerItem} className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[#ea580c]">warning</span>
                    <span className="font-bold text-[#ea580c] text-sm">When to seek treatment</span>
                  </div>
                  <ul className="space-y-2.5">
                    {service.symptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[#4d5b64] text-sm">
                        <span className="material-symbols-outlined text-[#ea580c] text-base mt-0.5 flex-shrink-0">arrow_right</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.section>

              {/* Precautions */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-6">
                  Precautions & Aftercare
                </motion.h2>
                <motion.div variants={staggerItem} className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[#16a34a]">shield</span>
                    <span className="font-bold text-[#16a34a] text-sm">Important guidelines</span>
                  </div>
                  <ul className="space-y-2.5">
                    {service.precautions.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[#4d5b64] text-sm">
                        <span className="material-symbols-outlined text-[#16a34a] text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.section>

              {/* FAQs */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-6">
                  Frequently Asked Questions
                </motion.h2>
                <div className="space-y-3">
                  {service.faqs.map((f, i) => (
                    <motion.div key={i} variants={staggerItem}>
                      <Faq q={f.q} a={f.a} />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book Appointment Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white rounded-2xl border border-[#d8e3fb] p-6 air-shadow sticky top-36"
              >
                <h3 className="font-bold text-lg text-[#111c2d] mb-2">Book This Treatment</h3>
                <p className="text-sm text-[#4d5b64] mb-5">Schedule your appointment with Dr. Shubham Kharat for expert {service.shortTitle.toLowerCase()} treatment.</p>
                <Link
                  to={`/appointment?service=${encodeURIComponent(service.shortTitle)}`}
                  className="block w-full bg-[#0077b6] text-white text-center py-3.5 rounded-xl font-bold hover:bg-[#005d90] transition-colors mb-3"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919272351881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white py-3.5 rounded-xl font-bold hover:bg-[#1ebe57] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  WhatsApp Us
                </a>
                <div className="mt-5 pt-5 border-t border-[#d8e3fb] space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#005d90]">schedule</span>
                    <span className="text-[#4d5b64]">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#005d90]">person</span>
                    <span className="text-[#4d5b64]">Dr. Shubham Kharat, BDS, MDS</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#005d90]">location_on</span>
                    <span className="text-[#4d5b64]">Krisala 41 Elite, Tathawade, Pune</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#005d90]">call</span>
                    <span className="text-[#4d5b64]">92723 51881 / 74472 51881</span>
                  </div>
                </div>
              </motion.div>

              {/* All Services Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl border border-[#d8e3fb] p-6 air-shadow"
              >
                <h3 className="font-bold text-lg text-[#111c2d] mb-4">All Services</h3>
                <div className="space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={`flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm transition-all ${
                        s.slug === slug
                          ? 'bg-[#0077b6]/10 text-[#005d90] font-bold'
                          : 'text-[#4d5b64] hover:bg-[#f1f5f9] hover:text-[#005d90]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{s.icon}</span>
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-8">
              Related Services You May Need
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFill.map((rs) => (
                <motion.div
                  key={rs.slug}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-[#d8e3fb] overflow-hidden group air-shadow"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={rs.image} alt={rs.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-[#006b5b] bg-[#7cf8dd]/20 px-2.5 py-1 rounded-full">{rs.category}</span>
                    <h3 className="font-bold text-[#111c2d] mt-3 mb-2 group-hover:text-[#005d90] transition-colors">{rs.shortTitle}</h3>
                    <p className="text-[#4d5b64] text-sm line-clamp-2 mb-4">{rs.shortDesc}</p>
                    <Link
                      to={`/services/${rs.slug}`}
                      className="flex items-center gap-1.5 text-[#005d90] font-bold text-sm"
                    >
                      Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#d8e3fb] p-4 z-40 lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Link
            to={`/appointment?service=${encodeURIComponent(service.shortTitle)}`}
            className="flex-1 bg-[#0077b6] text-white text-center py-3 rounded-xl font-bold text-sm"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+919272351881"
            className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[#005d90]">call</span>
          </a>
          <a
            href="https://wa.me/919272351881"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25d366] rounded-xl flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white">chat</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
    </PageTransition>
  )
}
