import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const faqs = [
  { q: 'How often should I visit for a cleaning?', a: 'We generally recommend a professional cleaning and examination every six months. This frequency allows us to detect potential issues early and maintain optimal oral hygiene.' },
  { q: 'Is teeth whitening safe for enamel?', a: 'Yes, our professional whitening treatments are completely safe. We use pH-balanced formulas that protect your enamel while effectively removing deep-seated stains.' },
  { q: 'Are dental implants painful?', a: 'The procedure is typically performed under local anesthesia, so you should not feel pain during the surgery. Post-operative discomfort is usually minimal and manageable with standard over-the-counter medication.' },
]

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl border border-[#d8e3fb] p-6 air-shadow">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg text-[#111c2d]">{q}</span>
        <span className={`material-symbols-outlined transition-transform ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {open && <p className="mt-4 text-[#4d5b64] leading-relaxed">{a}</p>}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 variants={staggerItem} className="text-display font-bold text-[#005d90] mb-6">
              Advanced Dental Solutions for Your Perfect Smile
            </motion.h1>
            <motion.p variants={staggerItem} className="text-lg text-[#4d5b64] mb-8">
              From routine maintenance to complex restorative procedures, our clinical precision ensures your comfort and health at every step.
            </motion.p>
            <motion.div variants={staggerItem} className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7cf8dd]/20 rounded-full">
                <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-bold text-[#006b5b]">ADA Certified Facility</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7cf8dd]/20 rounded-full">
                <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-sm font-bold text-[#006b5b]">4.9/5 Patient Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured - Teeth Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="md:col-span-8 bg-white p-8 rounded-[16px] border border-[#d8e3fb] air-shadow group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#006b5b]">dentistry</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Teeth Cleaning</h3>
                  <p className="text-[#4d5b64] mb-6">Professional scaling and polishing to remove plaque and tartar, preventing gum disease and keeping your breath fresh and healthy.</p>
                  <Link to="/appointment" className="flex items-center gap-2 text-[#005d90] font-bold hover:gap-3 transition-all">
                    Book Now <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden">
                  <img
                    alt="Teeth Cleaning"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARdCjEjMdqQZUA4vg_R50Jle1CRcqi1ERIW6MdrnF2RPg6kWlLpZLpSf4X4_3tqGaMJc8_rnfRLHfUaQ24GOX86LCerktkTLXU_w-NX1AXonfpBjty58cm5DorwXGf3DmIjGdhi0lVTWL0Em6Ihbh22Grx1M6svNmw2bdkXeIMd85BOUarrq3EQCMUGI4sGFJ_eMnmamcy7uM-gAaZyvbzN_KzGbmOZv-Ud644MMuEfe1vb49eha6ZnMEwMmccdq6JFVmIZODSGZ8"
                  />
                </div>
              </div>
            </motion.div>

            {/* Root Canal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="md:col-span-4 bg-white p-8 rounded-[16px] border border-[#d8e3fb] air-shadow"
            >
              <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#006b5b]">potted_plant</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Root Canal</h3>
              <p className="text-[#4d5b64] mb-6">Painless endodontic therapy designed to save damaged teeth and eliminate infection at the root level.</p>
              <Link to="/appointment" className="flex items-center gap-2 text-[#005d90] font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
            </motion.div>

            {/* Dental Implants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.0 }}
              whileHover={{ y: -4 }}
              className="md:col-span-4 bg-white p-8 rounded-[16px] border border-[#d8e3fb] air-shadow"
            >
              <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#006b5b]">build</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Dental Implants</h3>
              <p className="text-[#4d5b64] mb-6">Permanent, natural-looking tooth replacements that restore both function and confidence to your smile.</p>
              <Link to="/appointment" className="flex items-center gap-2 text-[#005d90] font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
            </motion.div>

            {/* Braces & Aligners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="md:col-span-4 bg-white p-8 rounded-[16px] border border-[#d8e3fb] air-shadow"
            >
              <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#006b5b]">grid_view</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Braces &amp; Aligners</h3>
              <p className="text-[#4d5b64] mb-6">Modern orthodontic solutions including Invisalign for discreet and effective alignment of your teeth.</p>
              <Link to="/appointment" className="flex items-center gap-2 text-[#005d90] font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
            </motion.div>

            {/* Teeth Whitening */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="md:col-span-4 bg-white p-8 rounded-[16px] border border-[#d8e3fb] air-shadow"
            >
              <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#006b5b]">auto_awesome</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Teeth Whitening</h3>
              <p className="text-[#4d5b64] mb-6">Advanced laser whitening treatments that brighten your smile by several shades in just one visit.</p>
              <Link to="/appointment" className="flex items-center gap-2 text-[#005d90] font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
            </motion.div>

            {/* Cosmetic Dentistry - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
              className="md:col-span-12 bg-[#0077b6] p-8 rounded-[16px] text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
            >
              <div className="flex-1 z-10">
                <span className="bg-[#006b5b] px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">Premium Service</span>
                <h3 className="text-2xl font-bold mb-4">Cosmetic Dentistry</h3>
                <p className="text-[#f3f7ff]/90 mb-8 max-w-xl">Transform your appearance with porcelain veneers, bonding, and full-mouth rehabilitation tailored to your facial features and desires.</p>
                <div className="flex gap-4">
                  <Link to="/appointment" className="bg-white text-[#005d90] px-8 py-3 rounded-lg font-bold hover:bg-[#e7eeff] transition-colors">Start Consultation</Link>
                  <Link to="/gallery" className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">View Gallery</Link>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-64 md:h-80 rounded-2xl overflow-hidden z-10 shadow-2xl">
                <img
                  alt="Cosmetic Dentistry"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgAEXIfshnsKGY-GkhrhXbOebwELrILpt74NbKT68CWzvJ_O98A0trg3OfAU95jxq8Xxt4n461zMuItjg7h67QuW1w_7Sua_2MTzCPeFxYgyqwA06J7cZlbM9eFFpvSGx8bGTkBy71oYqW_bV4UYTShLarMLhoFi8LoW0B6QZIVjYJ42zNDd88EJKdbPpTOlxGPYDPebYSObcNSMgGPoW1Cg8WQXNVqVj1vjAHsoC49Pk7Z8vVcWnlVe7oKMPa6Plb7cEh5Wj2fqw"
                />
              </div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-8 mb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-headline-lg font-bold text-[#005d90] mb-4">Frequently Asked Questions</motion.h2>
            <motion.p variants={staggerItem} className="text-[#4d5b64]">Clear answers to your common dental health concerns</motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="space-y-4"
          >
            {faqs.map((f) => (
              <motion.div key={f.q} variants={staggerItem}>
                <Faq q={f.q} a={f.a} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Trust Badges */}
        <section className="max-w-7xl mx-auto px-8 py-12 border-t border-[#d8e3fb]">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { icon: 'medical_services', label: 'ADA MEMBER' },
              { icon: 'workspace_premium', label: 'CERTIFIED ISO 9001' },
              { icon: 'shield', label: 'HIPAA COMPLIANT' },
              { icon: 'health_and_safety', label: 'ORAL HEALTH FOUNDATION' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">{b.icon}</span>
                <span className="font-bold tracking-widest text-slate-600">{b.label}</span>
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
