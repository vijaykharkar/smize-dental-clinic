import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn, fadeInDown } from '../utils/animations'

const vp = { once: true, margin: '-80px' }

const heroTexts = [
  {
    line1: 'Your Smile, Our',
    line2: 'Priority',
    sub: 'Experience dental care redefined through precision technology and a patient-first approach. We combine clinical excellence with a serene environment.',
  },
  {
    line1: 'Modern Technology,',
    line2: 'Artistic Precision',
    sub: 'We combine modern dental technology with artistic precision — pain-minimized procedures, high-quality materials, strict sterilization protocols, and personalized treatment plans.',
  },
  {
    line1: 'Expert Dental Services',
    line2: 'in Pune',
    sub: 'Painless RCT · Smile Designing · Teeth Whitening · Dental Fillings · Crowns & Bridges · Preventive Care. Among the top dental clinics in Pune for aesthetic dentistry.',
  },
  {
    line1: 'Your Trusted',
    line2: 'Dentist in Pune',
    sub: 'Expert care by MDS Endodontist. We focus on gentle, patient-friendly care — ensuring every visit is smooth, reassuring, and completely stress-free.',
  },
]

const heroImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtiTrgR76nFlRzd0qgS9B10ZKK814rYX_2KHSQEPilvuWtfyCHa5fSjArkyK0lJkxWPe9wYTZd0zZ8NvRqX9BXEBW-wjfl-dnUkmZ_kp_Dzob30vgB90UmjbGabV2VlAtU-jev9XSaDYWXC2BItePdAhEZgeg0myUlFPrEb627lZRbv7rjgaffW701hwNOwSlkcU1VIKYS49Vs6vwAqZfEADG0BS_zmc_LJZYyImY5UvfN491AaiXgV-AxhbB9zOQYb1oaTvJEg0I',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrsnncfSVUBR3Z0D8PD4wc68HeI7iKHSjVPVqqkbqTwbxAa_ql5IoqjZOf6hCWy42IwCWVJNCA1Fyr8vDFq4n9vuFhEzkt68sMmjKRYQsr9BQr_jTyZVIVCAeMHu7bwq6reiRXaqHurqfzhiIu7u72J_jHcUr1ctWjEqfkmn0oYVF8kxtzoJ_lDAYWaXMcWqal-iQGWqKSjY4RjaQLskba4NvyuDXLKqSoNvBszonLyEza4MPjZABxXQ7NKLSuEnd-mS4HTKIiD_U',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnTdjG-IcdYhOt9W7tP6LjoQUKARYcmV0hVphj76Bvy8vrzhnsZDLGPeFWsiekZToROrBdtHXw-yAnbheikamQRqaHFaGJS8zR-kwvhGRZvDjCL0Ri8eu9kl7d4Hkkoxf2UyizYo9OLF5ME1usXUNmSlkPub0AFMKnHfXVB0xhze9ucyIZP-l7IR-6zi4x4MBgkdumoLCZzUIJEbVhqtSaLhyBc2k19cvKOrStV3t-rljc7YUnm1NW-hfJhIeVJnxda0qhfYCvIk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4-m_C3BPKzBbSG2HGkc2V-BakRDzYCyVQ1y4KV2j_Dp3Z39uROVKWq57w-r98S9fSr3Gc-7oWFIZZTbFa4184nW80y1O_oDUhFWM0XlpmAVVJWmjH1V-dRg0R4mDLvLDp1zS1DWF5UINXy7SdgYexnUXy9BDy5KXGgM-npRavs89NDC74zFJ07t2UeJEcnILBqJdJ1xHi5S_HBEuxvS0sFdnnoNDunHm5NXNfYC95Jgz2SQpTGK5HhaTzZLE8ojX4NKhxqjkTCCA',
]

export default function EnhancedHomePage() {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageTransition>
      <div className="bg-background text-on-background font-manrope antialiased">
        <Navbar />

        <main className="pt-10">
          {/* Hero Section — full-width background carousel */}
          <section className="relative min-h-[88vh] flex items-center overflow-hidden">
            {/* Background carousel */}
            <AnimatePresence mode="sync">
              <motion.img
                key={currentImg}
                src={heroImages[currentImg]}
                alt="Smize Dental Atelier clinic"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/55 to-[#0a1628]/20" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8 max-w-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5"
                  >
                    <h1 className="text-display font-manrope font-bold text-white leading-tight">
                      {heroTexts[currentImg].line1}{' '}
                      <span className="text-[#7cf8dd]">{heroTexts[currentImg].line2}</span>
                    </h1>
                    <p className="text-body-lg text-white/80 max-w-xl">
                      {heroTexts[currentImg].sub}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/appointment" className="bg-[#005d90] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-block hover:bg-[#0077b6]">
                      Book Appointment
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <a href="https://wa.me/919272351881?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Smize%20Dental%20Atelier." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-flex items-center gap-2 hover:bg-[#1ebe5b]">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp Us
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <a href="https://maps.google.com/?q=Krisala+41+Elite+Tathawade+Pune" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">directions</span>
                      Get Directions
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-10 right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#7cf8dd] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div>
                  <div className="font-semibold text-[#111c2d]">4.9/5 Rating</div>
                  <div className="text-sm text-[#404850]">Top-Rated Clinic 2024</div>
                </div>
              </motion.div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentImg ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </section>

          {/* Stats Section
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="bg-[#e7eeff] py-16 border-y border-[#bfc7d1]/30"
          >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '12k+', label: 'Happy Patients' },
                { value: '25+', label: 'Years Experience' },
                { value: '15+', label: 'Specialists' },
                { value: '100%', label: 'Sterile Facility' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <div className="text-4xl md:text-5xl font-bold text-[#005d90] mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-[#404850] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section> */}

          {/* Services Bento Grid */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Comprehensive Care</h2>
              <p className="text-body-lg text-[#404850]">Expertise across all facets of modern dentistry.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: 'cleaning_services', title: 'Deep Cleaning', desc: 'Advanced ultrasonic cleaning and prophylaxis for optimal gum health and a brighter smile.' },
                { icon: 'dentistry', title: 'Dental Implants', desc: 'Life-changing restorative solutions using premium titanium components and 3D precision mapping.' },
                { icon: 'grid_view', title: 'Smart Braces', desc: 'Clear aligners and modern orthodontics designed for comfort, efficiency, and invisible correction.' },
              ].map((service) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,119,182,0.12)' }}
                  className="bg-white p-8 rounded-xl border border-[#d6e5ef] air-shadow transition-shadow cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 bg-[#7cf8dd]/30 rounded-lg flex items-center justify-center mb-6"
                  >
                    <span className="material-symbols-outlined text-[#006b5b] text-3xl">{service.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#111c2d] mb-4">{service.title}</h3>
                  <p className="text-[#404850]">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link to="/services" className="inline-flex items-center gap-2 text-[#005d90] font-bold hover:underline">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>
          </section>

          {/* Technology Section */}
          <section className="bg-[#005d90] text-white py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none flex items-center justify-end pr-4">
              <span className="material-symbols-outlined" style={{ fontSize: '400px' }}>biotech</span>
            </div>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Future-Proof Dentistry</h2>
                <p className="text-lg text-[#cde5ff] max-w-2xl">
                  We invest in the world's most advanced diagnostic and treatment tools to ensure your comfort and precision results.
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGjuQafRxxe-O9xb1di-c3c59g-q2HxsLOce2FloIIxx6u0hHc5XETUqWTMToOw7PVgCItYuhcw8IZIjPxPtBdaUxqdnm0-Am7yMdh_oOfUK0YNOtuuJHg6GxaRHwfkq2FdEBEHXu3j6LeUTrB-LIuq_teeAPpjUNa1dL2Vc46j5ULsLY-04WJ0uaJgB4Hp8G4ZObgwwBpX8VAgbhUElnAWxCMsWqCDh_z1GcElJjWxtY4UdrHLyHMHgk0nHAkD_v-JmQmtOSn7TA', title: '3D CBCT Imaging', desc: 'Crystal clear 3D visualizations for pinpoint accurate surgical planning and diagnostics.' },
                  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrzzco-SOfm6loCLMGYcjw8PNMPlFnKsfEIF5aDzqLIskOk_MKOaNfrwS4zTyE4OTjjaMLBsJj-mCJ6BfsSKfkObFZYmAMtbHXtSE6qcFLNQ1ngFTGor_dZn1XDkVkvfR8hQ0FX6NiJowHbOcK7cztoAx1eYV4JgNb8G5-5XZ3rP9YHbz9pQ0BavEWhU7-2xAaqvNbQe5HJbUSQD8ZkVPK66FjwA3Wl7Ash2bj8ocpsyVb8gK8LU3foi-u92byZYEEbxt5LFaMjqo', title: 'WaterLase Technology', desc: 'Minimally invasive laser treatments that reduce healing time and eliminate the need for drills.' },
                  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgalE-Fm3qiNOezc27AVjqtNYXjwDvFjb-0OMiN7ICgQwa3acf2oMv0ZOVGVfrj1KnHneKLL4_cJ9DnPk4ii8GWKsuPxXL2agtg3YgPaUk_WWUuhna-8y3gjjdItUP8ItmZMc3cjBBv8dr9zjt_9w-zV1PZ_x-EeOmX7goUWc1zjybgnM2EBVre997UcO02D_RDW1SSGRv91BHRCmGcdR-WQgkIUaVLtdMUB7tP1Nqc_wIt6gzPXUyT9LDn4OMW8EQzA10vg6-EU8', title: 'Digital Scanners', desc: "No more messy impressions. Our intraoral scanners capture your bite with 100% accuracy in minutes." },
                ].map((tech) => (
                  <motion.div
                    key={tech.title}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden mb-8">
                      <img alt={tech.title} className="w-full h-full object-cover" src={tech.img} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{tech.title}</h3>
                    <p className="text-[#cde5ff]">{tech.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Patient Journey */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-headline-lg font-bold text-center text-[#111c2d] mb-16"
            >
              Your Patient Journey
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid md:grid-cols-4 gap-8 relative"
            >
              <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-sky-100 z-0" />
              {[
                { step: '01', title: 'Consultation', desc: 'A thorough assessment of your oral health and goals.' },
                { step: '02', title: 'Custom Plan', desc: 'Personalized treatment path tailored to your schedule.' },
                { step: '03', title: 'Gentle Care', desc: 'Modern techniques ensuring a pain-free experience.' },
                { step: '04', title: 'Aftercare', desc: 'Continued support and maintenance for lasting results.' },
              ].map((item) => (
                <motion.div key={item.step} variants={staggerItem} className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white border-4 border-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 air-shadow"
                  >
                    <span className="text-xl font-bold text-[#005d90]">{item.step}</span>
                  </motion.div>
                  <h4 className="font-semibold text-[#111c2d] mb-2">{item.title}</h4>
                  <p className="text-[#404850] text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Before/After Preview */}
          <section className="bg-[#e7eeff] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Real Transformations</h2>
                <p className="text-body-lg text-[#404850]">See how we've helped our patients reclaim their confidence.</p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid md:grid-cols-2 gap-12"
              >
                {[
                  { before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnTdjG-IcdYhOt9W7tP6LjoQUKARYcmV0hVphj76Bvy8vrzhnsZDLGPeFWsiekZToROrBdtHXw-yAnbheikamQRqaHFaGJS8zR-kwvhGRZvDjCL0Ri8eu9kl7d4Hkkoxf2UyizYo9OLF5ME1usXUNmSlkPub0AFMKnHfXVB0xhze9ucyIZP-l7IR-6zi4x4MBgkdumoLCZzUIJEbVhqtSaLhyBc2k19cvKOrStV3t-rljc7YUnm1NW-hfJhIeVJnxda0qhfYCvIk', after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4-m_C3BPKzBbSG2HGkc2V-BakRDzYCyVQ1y4KV2j_Dp3Z39uROVKWq57w-r98S9fSr3Gc-7oWFIZZTbFa4184nW80y1O_oDUhFWM0XlpmAVVJWmjH1V-dRg0R4mDLvLDp1zS1DWF5UINXy7SdgYexnUXy9BDy5KXGgM-npRavs89NDC74zFJ07t2UeJEcnILBqJdJ1xHi5S_HBEuxvS0sFdnnoNDunHm5NXNfYC95Jgz2SQpTGK5HhaTzZLE8ojX4NKhxqjkTCCA', title: 'Full Smile Restoration', treatment: 'Porcelain Veneers & Whitening' },
                  { before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_5gisWf7CmCwX4tICZK_p1rJ75Dt8FCTaxa7VeJQl2uAqRoK9pNBzsGUBzUTXPGVW5WnrMNA82qWqmydUZQ5W2nqzUbBFjrhXgB0kNwDESWfhyzY2fZvFuZKjAR5Q_k2G2qloozEPP7iz1a1yk_cTVOKLaMAvzA9zKTpG7mZpM_JP8Wzj8tWXWIR5eqCI4IFDQyrQacYDc7XgdcXDLAMRKOj-FooK6TPy363eDcvAVCAhpant2HSzSK77KeMgFrG3lEszoKpgtEc', after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhxrQsf73ax74Y17L32HxKpjmPyRxMLo25Be_BgBr9JBRaMaZqa5QEVt8Yhn-a7PB-NQLoO8_sTwI9i09YB6YXEXu9WYcxXHM-OmSrSDKywbR2iwZIXRgHvRwqH4WXmV72jdzEZ5byAU56MTuFzrUsRgvyYd0ecw6bW1qGPxD-zi4cNPhgKls62VUD-GeL1fxU8RaofMrNuMLJOhhUnGSFDfnnoNDunHm5NXNfYC95Jgz2SQpTGK5HhaTzZLE8ojX4NKhxqjkTCCA', title: 'Orthodontic Correction', treatment: 'Smize Dental Clear Aligners' },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-[32px] p-4 air-shadow overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <img alt="Before" className="rounded-2xl h-64 w-full object-cover" src={item.before} />
                        <span className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Before</span>
                      </div>
                      <div className="relative">
                        <img alt="After" className="rounded-2xl h-64 w-full object-cover" src={item.after} />
                        <span className="absolute top-4 left-4 bg-[#005d90]/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">After</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-[#111c2d] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#404850]">Treatment: {item.treatment}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={vp}
                transition={{ delay: 0.3 }}
                className="text-center mt-12"
              >
                <Link to="/gallery" className="inline-flex items-center gap-2 text-[#005d90] font-bold hover:underline">
                  View Full Gallery <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="bg-white rounded-[48px] p-12 md:p-24 air-shadow relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#7cf8dd]/30 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="flex gap-1 text-[#006b5b] mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic text-[#111c2d] mb-12 font-normal">
                  "The level of care at Smize Dental Atelier is unmatched. I've always had dental anxiety, but the team here made me feel completely at ease. My new smile has given me so much confidence!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover border-2 border-[#006b5b]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_UbBqmI4PkKFY6XLVQqRj-icRPBG9bMEC7dWu52hxCe_VntY_Riykcf2c0vJgxztXE7LnzA3wqbZxjJk2WFA_68wf2C3KdaaG2-oLstjy5ZhW0-Oqipby_GuZVa2wlWJjdvEh3DnpOmS5NVqTPd938QkLcCuYDI6Wq1YgQubL5hoZQRHydpuRRi1Fcjc61rbHU58mUcta2O2qzQv8TnTH_6T3xJt_OG2O2lMJ2mSizohUqJ2w9Qde_ZCDfX3Jm4s9qxmFfDbiQ0U" />
                  <div className="text-left">
                    <div className="font-semibold text-[#111c2d]">Sarah Jenkins</div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#7cf8dd] text-[#005144] rounded text-xs font-bold uppercase tracking-widest">Verified Patient</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Trust Badges */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-8 py-12 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {[
              { icon: 'verified_user', label: 'Certified Dental Clinic' },
              { icon: 'medical_services', label: 'DCI Registered' },
              { icon: 'security', label: 'Patient Safety First' },
              { icon: 'workspace_premium', label: 'Award Winning 2024' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl">{badge.icon}</span>
                <span className="font-bold">{badge.label}</span>
              </div>
            ))}
          </motion.section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}

