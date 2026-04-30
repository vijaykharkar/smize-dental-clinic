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

// Slide variants — clean line-level animation (no word-by-word complexity)
const slideVariants = {
  enter: { opacity: 0, y: 28, filter: 'blur(6px)' },
  center: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, y: -18, filter: 'blur(4px)',
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  },
}

const subVariants = {
  enter: { opacity: 0, y: 18 },
  center: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35 } },
}

const testimonials = [
  {
    name: 'Vijay Kharkar',
    role: 'Verified Patient',
    rating: 5,
    text: "I've always been nervous about dental visits, but Smize Dental Atelier made me feel completely comfortable. The team was kind and reassuring, and my new smile has truly boosted my confidence.",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_UbBqmI4PkKFY6XLVQqRj-icRPBG9bMEC7dWu52hxCe_VntY_Riykcf2c0vJgxztXE7LnzA3wqbZxjJk2WFA_68wf2C3KdaaG2-oLstjy5ZhW0-Oqipby_GuZVa2wlWJjdvEh3DnpOmS5NVqTPd938QkLcCuYDI6Wq1YgQubL5hoZQRHydpuRRi1Fcjc61rbHU58mUcta2O2qzQv8TnTH_6T3xJt_OG2O2lMJ2mSizohUqJ2w9Qde_ZCDfX3Jm4s9qxmFfDbiQ0U',
  },
  {
    name: 'Priya Desai',
    role: 'Smile Makeover Patient',
    rating: 5,
    text: "Dr. Kharat's expertise in smile designing is exceptional. My veneers look so natural — family and friends can't stop complimenting me. The attention to detail and the care taken was truly outstanding.",
    avatar: null,
  },
  {
    name: 'Rahul Sharma',
    role: 'Root Canal Patient',
    rating: 5,
    text: "I was terrified about my root canal, but the procedure was completely painless — finished in a single sitting! Dr. Kharat explained every step clearly. I can't believe how smooth and stress-free it was.",
    avatar: null,
  },
  {
    name: 'Sneha Patil',
    role: 'Teeth Whitening Patient',
    rating: 5,
    text: "The teeth whitening results are incredible — I went several shades lighter in just one session. The clinic is spotlessly clean, ultra-modern, and the staff made me feel so welcome throughout.",
    avatar: null,
  },
  {
    name: 'Amit Kulkarni',
    role: 'Dental Implant Patient',
    rating: 5,
    text: "After losing a tooth, I was hesitant about implants. The team at Smize Dental Atelier walked me through the entire process and the result is completely indistinguishable from my natural teeth.",
    avatar: null,
  },
]

const tVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 72 : -72 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -72 : 72, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } }),
}

export default function EnhancedHomePage() {
  const [currentImg, setCurrentImg] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [activeT, setActiveT] = useState(0)
  const [tDir, setTDir] = useState(1)
  const [tPaused, setTPaused] = useState(false)

  const nextT = () => { setTDir(1);  setActiveT((p) => (p + 1) % testimonials.length) }
  const prevT = () => { setTDir(-1); setActiveT((p) => (p - 1 + testimonials.length) % testimonials.length) }
  const goToT = (i) => { setTDir(i > activeT ? 1 : -1); setActiveT(i) }

  // Pause carousel on hover, resume on leave
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroTexts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  // Testimonial auto-slide
  useEffect(() => {
    if (tPaused) return
    const timer = setInterval(nextT, 5000)
    return () => clearInterval(timer)
  }, [tPaused, activeT])

  return (
    <PageTransition>
      <div className="bg-background text-on-background font-manrope antialiased">
        <Navbar />

        <main className="pt-10">
          {/* Hero Section — full-width background carousel */}
          <section
            className="relative min-h-[88vh] flex items-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
              <div className="space-y-8 max-w-2xl">

                {/* Text carousel — line-level animation */}
                <div className="space-y-5 min-h-[9rem]">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={`h-${currentImg}`}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="text-display font-manrope font-bold text-white leading-tight"
                    >
                      {heroTexts[currentImg].line1}{' '}
                      <span className="text-[#7cf8dd]">{heroTexts[currentImg].line2}</span>
                    </motion.h1>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`p-${currentImg}`}
                      variants={subVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="text-body-lg text-white/80 max-w-xl"
                    >
                      {heroTexts[currentImg].sub}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      to="/appointment"
                      className="bg-[#005d90] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-block hover:bg-[#0077b6]"
                    >
                      Book Appointment
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <a
                      href="https://wa.me/919272351881?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Smize%20Dental%20Atelier."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-flex items-center gap-2 hover:bg-[#1ebe5b]"
                    >
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <a
                      href="https://maps.google.com/?q=Krisala+41+Elite+Tathawade+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-xl">
                        directions
                      </span>
                      Get Directions
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Rating Badge — entry fade then continuous float */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 0.8 },
                  y: { delay: 1.8, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute bottom-10 right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#7cf8dd] rounded-full flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-[#006b5b]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentImg ? 'bg-white scale-125' : 'bg-white/50'
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

          {/* Services Section */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Our Specialities</h2>
              <p className="text-body-lg text-[#404850]">Expert care across all facets of modern dentistry — from root canals to smile makeovers.</p>
            </motion.div>

            {/* Specialities grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {[
                {
                  icon: 'dentistry',
                  title: 'Root Canal & Advanced Endodontics',
                  desc: 'Advanced, pain-free treatments focused on preserving natural teeth with precision and comfort.',
                  services: ['Single-sitting RCT', 'Endodontic Re-treatments (Failed RCT)', 'Regenerative Endodontic Procedures', 'Non-surgical periapical lesion management', 'Apexification using MTA & Biodentine', 'Vital pulp therapies'],
                  highlight: 'Painless root canal in Pune',
                },
                {
                  icon: 'healing',
                  title: 'Complex Endodontic Case Management',
                  desc: 'Specialized care for challenging cases aimed at saving teeth that might otherwise require extraction.',
                  services: ['Management of Endo-Perio lesions', 'Apicoectomy & cyst enucleation', 'Retrograde restorations'],
                  highlight: 'Saving teeth others recommend for extraction',
                },
                {
                  icon: 'auto_awesome',
                  title: 'Cosmetic & Esthetic Dentistry',
                  desc: 'Enhancing your smile with modern aesthetic treatments designed for confidence and natural beauty.',
                  services: ['Smile Designing & Makeovers', 'Laminates & Composite Veneers', 'Teeth Whitening (Vital & Non-vital)', 'Fluorosis treatment (Microabrasion, Resin Infiltration)'],
                  highlight: 'Smile makeovers & cosmetic dentistry in Pune',
                },
                {
                  icon: 'build_circle',
                  title: 'Restorative & Prosthetic Treatments',
                  desc: 'Rebuilding strength and aesthetics with durable, natural-looking restorations.',
                  services: ['Tooth-colored fillings', 'Inlays, Onlays & Overlays (Metal & Ceramic)', 'Crown preparations & full coverage crowns'],
                  highlight: 'Strength meets natural aesthetics',
                },
                {
                  icon: 'emergency',
                  title: 'Dental Trauma Management',
                  desc: 'Immediate and expert care for dental injuries and emergencies.',
                  services: ['Ellis fractures & splinting', 'Avulsion & re-implantation', 'Extrusion, intrusion, luxation & subluxation injuries'],
                  highlight: 'Immediate care for dental emergencies',
                },
              ].map((s) => (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,119,182,0.12)' }}
                  className="bg-white p-7 rounded-2xl border border-[#d6e5ef] air-shadow transition-shadow cursor-default flex flex-col"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-13 h-13 w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mb-5"
                  >
                    <span className="material-symbols-outlined text-[#006b5b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#111c2d] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#404850] mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {s.services.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#404850]">
                        <span className="material-symbols-outlined text-[#007261] text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-[#e7eeff]">
                    <span className="text-xs font-semibold text-[#005d90] bg-[#cde5ff] px-3 py-1 rounded-full">{s.highlight}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl font-bold text-[#111c2d] mb-2">Additional Services</h3>
              <p className="text-[#404850]">Everything you need for complete dental wellness.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                { icon: 'brightness_high', title: 'Teeth Whitening', desc: 'Professional whitening systems delivering dramatic, lasting results in a single session.' },
                { icon: 'face_retouching_natural', title: 'Veneers & Laminates', desc: 'Custom-crafted thin shells designed to enhance the appearance of your teeth naturally.' },
                { icon: 'volunteer_activism', title: 'Dental Implants', desc: 'Restore confidence with permanent tooth replacements that function and feel like natural teeth.' },
                { icon: 'child_care', title: 'Pediatric Dentistry', desc: 'Gentle, engaging dental care designed to build healthy habits and confidence in children.' },
                { icon: 'straighten', title: 'Invisible Braces (Invisalign)', desc: 'Straighten teeth discreetly using clear aligner technology designed for comfort and convenience.' },
              ].map((s) => (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: '0 16px 32px rgba(0,119,182,0.10)' }}
                  className="bg-[#f4f8ff] p-6 rounded-xl border border-[#d6e5ef] transition-shadow cursor-default flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#005d90]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#005d90] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111c2d] mb-1">{s.title}</h4>
                    <p className="text-sm text-[#404850]">{s.desc}</p>
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
              <Link to="/services" className="inline-flex items-center gap-2 text-[#005d90] font-bold hover:underline">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>
          </section>

          {/* Technology Section */}
          {/* <section className="bg-[#005d90] text-white py-16 lg:py-24 relative overflow-hidden">
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
          </section> */}

          {/* Patient Journey */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-headline-lg font-bold text-center text-[#111c2d] mb-16"
            >
              The Art of Your Smile Journey
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
                { step: '01', title: 'Consultation', desc: 'An in-depth consultation where we understand your vision, guided by precision and a philosophy of crafted care.' },
                { step: '02', title: 'Bespoke Plan', desc: 'A meticulously designed pathway rooted in bespoke dentistry—tailored exclusively to your lifestyle, comfort, and aesthetic goals.' },
                { step: '03', title: 'Refined Treatment', desc: 'Experience crafted care through advanced, minimally invasive techniques—delivering seamless, gentle, and sophisticated results.' },
                { step: '04', title: 'Signature Aftercare', desc: 'Our relationship continues beyond treatment, with dedicated support and guidance to preserve your smile with timeless elegance.' },
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

          {/* Testimonial Slider */}
          <section
            className="max-w-5xl mx-auto px-8 py-16 lg:py-24"
            onMouseEnter={() => setTPaused(true)}
            onMouseLeave={() => setTPaused(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-3">What Our Patients Say</h2>
              <p className="text-body-lg text-[#404850]">Real stories from real people who trusted us with their smiles.</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="bg-white rounded-[40px] p-10 md:p-16 air-shadow relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#7cf8dd]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#cde5ff]/40 rounded-full blur-2xl pointer-events-none" />

              {/* Arrow — Left */}
              <button
                onClick={prevT}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f4f8ff] border border-[#d6e5ef] flex items-center justify-center hover:bg-[#cde5ff] transition-colors shadow"
                aria-label="Previous testimonial"
              >
                <span className="material-symbols-outlined text-[#005d90] text-xl">chevron_left</span>
              </button>

              {/* Arrow — Right */}
              <button
                onClick={nextT}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f4f8ff] border border-[#d6e5ef] flex items-center justify-center hover:bg-[#cde5ff] transition-colors shadow"
                aria-label="Next testimonial"
              >
                <span className="material-symbols-outlined text-[#005d90] text-xl">chevron_right</span>
              </button>

              {/* Animated slide content */}
              <div className="relative z-10 max-w-2xl mx-auto text-center min-h-[240px] flex items-center">
                <AnimatePresence custom={tDir} mode="wait">
                  <motion.div
                    key={activeT}
                    custom={tDir}
                    variants={tVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full flex flex-col items-center"
                  >
                    <div className="flex gap-1 text-[#006b5b] mb-6">
                      {[...Array(testimonials[activeT].rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl italic text-[#111c2d] mb-8 font-normal leading-relaxed">
                      &ldquo;{testimonials[activeT].text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      {testimonials[activeT].avatar ? (
                        <img
                          alt={testimonials[activeT].name}
                          src={testimonials[activeT].avatar}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#006b5b] flex-shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-[#005d90] border-2 border-[#006b5b] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {testimonials[activeT].name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-semibold text-[#111c2d]">{testimonials[activeT].name}</div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#7cf8dd] text-[#005144] rounded text-xs font-bold uppercase tracking-widest">
                          {testimonials[activeT].role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToT(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeT ? 'bg-[#005d90] w-7' : 'bg-[#bfc7d1] w-2.5'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}

