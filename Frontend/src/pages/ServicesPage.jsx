import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem } from '../utils/animations'
import { services } from '../data/services'

const vp = { once: true, margin: '-60px' }

const categories = ['All', ...new Set(services.map((s) => s.category))]

export default function ServicesPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={staggerItem} className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
              <span className="text-sm font-semibold text-[#005d90]">Services</span>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl font-bold text-[#005d90] mb-6 leading-tight">
              Advanced Dental Solutions<br className="hidden md:block" /> for Your Perfect Smile
            </motion.h1>
            <motion.p variants={staggerItem} className="text-lg text-[#4d5b64] mb-8 max-w-2xl">
              From precision endodontics to transformative cosmetic dentistry — every treatment at Smize Dental Atelier is delivered with specialist expertise and genuine care.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7cf8dd]/20 rounded-full">
                <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-bold text-[#006b5b]">MDS Specialist Led</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7cf8dd]/20 rounded-full">
                <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-sm font-bold text-[#006b5b]">4.9/5 Patient Rating</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7cf8dd]/20 rounded-full">
                <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                <span className="text-sm font-bold text-[#006b5b]">Advanced Technology</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#0077b6] text-white shadow-lg shadow-[#0077b6]/25'
                    : 'bg-white text-[#4d5b64] border border-[#d8e3fb] hover:border-[#0077b6]/40 hover:text-[#005d90]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service, i) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-[#d8e3fb] overflow-hidden group air-shadow hover:shadow-xl hover:shadow-[#0077b6]/8 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#005d90] text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[#006b5b] text-xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#005d90] transition-colors">{service.title}</h3>
                      <p className="text-xs text-[#707881] mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        {service.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4d5b64] text-sm leading-relaxed mb-5 line-clamp-3">{service.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-[#005d90] font-bold text-sm hover:gap-3 transition-all"
                    >
                      View Details <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                    <Link
                      to={`/appointment?service=${encodeURIComponent(service.shortTitle)}`}
                      className="text-xs font-semibold text-[#006b5b] bg-[#7cf8dd]/20 px-3 py-1.5 rounded-full hover:bg-[#7cf8dd]/40 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Featured CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="bg-[#0077b6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 overflow-hidden relative"
          >
            <div className="flex-1 z-10">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                Specialist Care
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which treatment is right for you?</h2>
              <p className="text-white/80 mb-6 max-w-lg">
                Schedule a comprehensive consultation with Dr. Shubham Kharat (MDS). We will examine, diagnose, and recommend the most effective treatment plan — personalised entirely to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment" className="bg-white text-[#005d90] px-8 py-3 rounded-full font-bold hover:bg-[#e7eeff] transition-colors">
                  Book Consultation
                </Link>
                <a
                  href="https://wa.me/919272351881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        </section>

        {/* Trust Badges */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-t border-[#d8e3fb]">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: 'school', label: 'MDS SPECIALIST', desc: 'Postgraduate Expertise' },
              { icon: 'precision_manufacturing', label: 'ROTARY ENDODONTICS', desc: 'Advanced Instrumentation' },
              { icon: 'health_and_safety', label: 'STRICT STERILISATION', desc: 'Autoclave Protocol' },
              { icon: 'verified', label: 'DIGITAL DENTISTRY', desc: 'RVG & Apex Locators' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-2xl text-[#005d90]">{b.icon}</span>
                <div>
                  <span className="font-bold tracking-wider text-xs text-slate-700 block">{b.label}</span>
                  <span className="text-xs text-[#707881]">{b.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
