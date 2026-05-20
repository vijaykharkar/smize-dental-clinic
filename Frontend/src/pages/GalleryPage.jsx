import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations'

import clinicOne from '../assets/clinic/clinicone.jpeg'
import clinicTwo from '../assets/clinic/clinictwo.jpeg'
import clinicThree from '../assets/clinic/clinicthree.jpeg'
import clinicFour from '../assets/clinic/clinicfour.jpeg'
import clinicFive from '../assets/clinic/clinicfive.jpeg'
import clinicSix from '../assets/clinic/clinicsix.jpeg'
import drShubham from '../assets/clinic/shubham.jpeg'
import drDipika from '../assets/clinic/dipika.jpeg'

const vp = { once: true, margin: '-60px' }

const categories = ['All Photos', 'Clinic Interior', 'Our Team', 'Cosmetic Dentistry', 'Orthodontics', 'Surgical Care']

const galleryImages = [
  /* ── Our Team ── */
  {
    src: drShubham,
    tag: 'Our Team',
    title: 'Dr. Shubham Kharat',
    subtitle: 'BDS, MDS – Conservative Dentistry & Endodontics',
    span: 'md:col-span-2 md:row-span-2',
    isDoctor: true,
  },
  {
    src: drDipika,
    tag: 'Our Team',
    title: 'Dr. Deepika Waghmare Kharat',
    subtitle: 'BDS, MDS – Cosmetic & Restorative Dentist',
    span: 'md:col-span-2 md:row-span-2',
    isDoctor: true,
  },
  /* ── Clinic Interior ── */
  {
    src: clinicOne,
    tag: 'Clinic Interior',
    title: 'Reception & Lounge',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: clinicTwo,
    tag: 'Clinic Interior',
    title: 'Treatment Suite',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: clinicThree,
    tag: 'Clinic Interior',
    title: 'Consultation Room',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: clinicFour,
    tag: 'Clinic Interior',
    title: 'Sterilisation Unit',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: clinicFive,
    tag: 'Clinic Interior',
    title: 'Patient Comfort Area',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: clinicSix,
    tag: 'Clinic Interior',
    title: 'Panoramic X-Ray Suite',
    span: 'md:col-span-1 md:row-span-1',
  }
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const lightboxVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
  exit: { opacity: 0, scale: 0.92, y: 20, transition: { duration: 0.2 } },
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Photos')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All Photos'
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeFilter)

  return (
    <PageTransition>
      <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
        <Navbar />
        <main className="pt-32 pb-20">

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-8 mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Our Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
              className="text-display font-bold text-[#111c2d] mb-6"
            >
              Gallery &amp; Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-[#4d5b64] max-w-2xl mx-auto"
            >
              Meet our expert doctors, explore our state-of-the-art clinic &amp; discover beautiful smile transformations.
            </motion.p>
          </section>

          {/* Category Filter */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeFilter === cat
                    ? 'bg-[#005d90] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-700'
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </section>

          {/* Our Team Section — shown when filter is All or Our Team */}
          <AnimatePresence>
            {(activeFilter === 'All Photos' || activeFilter === 'Our Team') && (
              <motion.section
                key="team-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="max-w-7xl mx-auto px-4 sm:px-8 mb-16"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-2xl font-bold text-[#005d90] mb-8 flex items-center gap-3"
                >
                  <span className="w-8 h-1 bg-[#7cf8dd] rounded-full inline-block" />
                  Meet Our Doctors
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { src: drShubham, name: 'Dr. Shubham Kharat', qual: 'BDS, MDS', spec: 'Conservative Dentist & Endodontist', exp: '7+ Years Experience' },
                    { src: drDipika, name: 'Dr. Deepika Waghmare Kharat', qual: 'BDS, MDS', spec: 'Dental Surgeon', exp: '3+ Years Experience' },
                  ].map((doc, i) => (
                    <motion.div
                      key={doc.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="bg-white rounded-2xl overflow-hidden air-shadow border border-[#e7eeff] group cursor-pointer"
                      onClick={() => setLightbox({ src: doc.src, title: doc.name, subtitle: doc.spec })}
                    >
                      <div className="relative h-96 overflow-hidden bg-[#f0f7ff]">
                        <img
                          src={doc.src}
                          alt={doc.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                          <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#7cf8dd] text-[#005d90] text-xs font-bold px-3 py-1 rounded-full">{doc.qual}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#111c2d] mb-1">{doc.name}</h3>
                        <p className="text-[#005d90] font-semibold text-sm mb-1">{doc.spec}</p>
                        <p className="text-[#707881] text-sm flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-[#7cf8dd]">verified</span>
                          {doc.exp}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Clinic Photos Section — heading */}
          <AnimatePresence>
            {(activeFilter === 'All Photos' || activeFilter === 'Clinic Interior') && (
              <motion.div
                key="clinic-heading"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-7xl mx-auto px-4 sm:px-8 mb-6"
              >
                <h2 className="text-2xl font-bold text-[#005d90] flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#7cf8dd] rounded-full inline-block" />
                  {activeFilter === 'Clinic Interior' ? 'Clinic Interior' : 'Our Clinic'}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gallery Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered
                  .filter(img => img.tag !== 'Our Team')
                  .map((img, index) => (
                    <motion.div
                      key={img.title}
                      layout
                      initial={{ opacity: 0, scale: 0.88, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.88, y: -10 }}
                      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`relative group overflow-hidden rounded-xl air-shadow bg-white cursor-pointer ${activeFilter === 'All Photos' ? img.span : ''
                        }`}
                      onClick={() => setLightbox(img)}
                    >
                      <img
                        alt={img.title}
                        className="w-full h-full object-cover min-h-[220px] transition-transform duration-700 group-hover:scale-107"
                        src={img.src}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-[#7cf8dd] text-xs font-bold uppercase tracking-wider mb-1">{img.tag}</span>
                        <h3 className="text-white font-semibold text-sm">{img.title}</h3>
                        <span className="material-symbols-outlined text-white/70 mt-2 text-xl">zoom_in</span>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {filtered.filter(img => img.tag !== 'Our Team').length === 0 && activeFilter === 'Our Team' && (
              <p className="text-center text-[#707881] py-12">View the doctors above.</p>
            )}
          </section>

          {/* CTA */}
          <section className="max-w-5xl mx-auto px-8 mt-24">
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} className="bg-white rounded-2xl air-shadow p-12 text-center border border-sky-50 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#7cf8dd]/30 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#006b5b] text-3xl">add_task</span>
              </div>
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Ready to start your transformation?</h2>
              <p className="text-[#4d5b64] mb-8 max-w-lg">
                Join thousands of happy patients who trust Smize Dental Atelier for their dental health. Your journey to a perfect smile begins with a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="bg-[#0077b6] text-white px-10 py-4 rounded-full font-bold hover:bg-[#005d90] transition-all shadow-lg">
                  Book a Consultation
                </Link>
                <Link to="/contact" className="bg-white text-sky-700 border-2 border-sky-700 px-10 py-4 rounded-full font-bold hover:bg-sky-50 transition-all">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </section>
        </main>
        <Footer />

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              key="lightbox-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                key="lightbox-box"
                variants={lightboxVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full max-h-[70vh] object-contain bg-[#f8fafc]"
                />
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-[#111c2d] text-lg">{lightbox.title}</h3>
                    {lightbox.subtitle && <p className="text-[#005d90] text-sm mt-0.5">{lightbox.subtitle}</p>}
                    {!lightbox.subtitle && <p className="text-[#707881] text-sm mt-0.5">{lightbox.tag}</p>}
                  </div>
                  <button
                    onClick={() => setLightbox(null)}
                    className="w-9 h-9 bg-[#f8fafc] rounded-full flex items-center justify-center hover:bg-[#e7eeff] transition-colors ml-4 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[#111c2d] text-xl">close</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
