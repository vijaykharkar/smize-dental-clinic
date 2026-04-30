import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const team = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbxqOkkp0s0Q8pgGp7rrjfE5xSR9ZEl6w-qepEhftLxW1okbGhz69nvpNoVRwx5EX6SXY3axEWvBcqvkKiCARDTE7rsxpzqNPvrmd1jltio1uRRkDr6nLLnN3CWAtqEYeuj83O87AoVgAPJV6n_XgrZvyQYOWok1XLLfEDJf3F4tJmY48kC1dObH3eGQz9f_fxFr3VuqdIX8I3dQSg_85_umIvzT7S3DqelX8QK5klCUyd3kjcslieOV2jSLlVpVyAF-cKIRXRaoo',
    role: 'Lead Dentist',
    name: 'Dr. Shubham Kharat',
    specialty: 'Conservative Dentistry & Endodontics',
    desc: 'B.D.S. (Government Dental College, Chhatrapati Sambhajinagar), M.D.S. (Banaras Hindu University). Dr. Kharat specializes in root canal treatments, cosmetic dentistry, and smile design. Reg. No. A-41636.',
    exp: 'M.D.S. (BHU)',
    to: '/doctor/shubham-kharat',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCURTwQ7yA-qsxHI4wVQc8_E4aICv-JULkZg5VM3b3AQ-H0hX3y9-DZUiBiIzZwX-VPdlVvoRZ1zaANLHFtFIVcd9lotDet13Q3pt_sJnqFEaz0U_U_zd7ZsrSiSw3D4t8qVsebsOgoVCC_9bcWU3_BJxyO4B9QS0MDBY7sIuIgSQJXFWDsPAk846VxhIR9lAcnDcixCIrbfhNmnwGcdsnzvc5ySEafwdk-K-uLly5I6RBvIs7PPDwLFoZAr43avv39nzelracbYEY',
    role: 'Dental Surgeon',
    name: 'Dr. Deepika Waghmare Kharat',
    specialty: 'General & Preventive Dentistry',
    desc: 'B.D.S. (Nair Hospital Dental College, Mumbai). Dr. Deepika focuses on comprehensive dental care, preventive treatments, and patient education. Reg. No. A-55193.',
    exp: 'B.D.S. (Nair)',
    to: '/about',
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32">
        {/* Hero Introduction */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.span variants={staggerItem} className="inline-block px-4 py-1.5 bg-[#7cf8dd] text-[#007261] rounded-full text-sm font-bold uppercase tracking-wider">
                Since 1998
              </motion.span>
              <motion.h1 variants={staggerItem} className="text-display font-bold text-[#111c2d] leading-tight">
                Professional care, patient serenity.
              </motion.h1>
              <motion.p variants={staggerItem} className="text-lg text-[#4d5b64] leading-relaxed">
                At Smize Dental Atelier, we believe that world-class dentistry is more than just procedures. It's about building trust, ensuring comfort, and providing a clinical environment that feels as serene as a wellness retreat.
              </motion.p>
              <motion.div variants={staggerItem} className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBq2Dt1cCq3lBbYi5Fmg-dQFSMJXE8BqjI0NLWz0G2KZ5sMgez_WuXH5ot1b7FWgb0utjhVngtGrT3SrkSjapJ85YR6mkjT454bCFXjS4tXvsqIu_CagOQuUomTqsJAbIocAWGiIPSj-U9btSMOaSQaOQUeC-Jle7NFOv7dS8y849cjZhK_TZuAt-K6v3QO4ZxdTajMSd1moem7USLPaZUTHd-dl-lZkxf3hzlCVPSE2uzGKFK5CMsbAECNyrWLMS4K6yPcVLiJOX0',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDuIrgoOTsfCKs4CLFpMiAQ10amFFzmtnJnvZakAcOhiEUrPpz5tRwYQdNjp_YkGb3goGIZV4Tc-_hvSVjzTbEfH7x3rUMIUjmOHIhLARf52rlMna5Xgom8RNIKO3ibQ6m8QhwWZI2NN6sEKxwWtfdK97E2JJFCsYRkQY79B6qspCbo7e7rWUtEdVjYQP_3OgQymrLouAkc9Gf4031HdLTeUmInyLBrKIZXmBcwH8-GzzlOwpALU4bWb4t68qssFSqx_kKF7RHnLMY',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDibrkgvIqhCqdN4d_cGUvkjVsBntcNCjYjB0oTYRGY6fc2ml783-4oomUTs-MjpjdxNyGuhCAckvsANeFmo6zarN_EIeYe8prODDk7AqL1ONGRzG1YVpt4YDzg1-pQ68Zl7vBHclR6zzpIC83lMJTJHls9EU3J2h34DGgdZMSb2-J6i31vxAEVVMv9d6jSrL7X1jsZQi2o2byUnqT60EoBRrr20AVwmVAg9egfefu3nov1irXoqXXmffGj62iv7SFA4jBAbb7_mGk',
                  ].map((src, i) => (
                    <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src={src} alt="Team member" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-[#4d5b64]">
                  Join over <span className="text-[#005d90] font-bold">12,000+</span> satisfied patients
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <div className="absolute -inset-4 bg-sky-100/50 rounded-3xl blur-2xl group-hover:bg-sky-200/50 transition-all duration-500" />
              <img
                className="relative rounded-2xl w-full h-[500px] object-cover air-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSI_pUEa3nEMFWBGaDR5DuDpa-byZZka5S7ta2j5jvcc-emV1wX3nCgRG99ihPan9Hmq4roqVFpR4bUI4FRXnavth1Atd1MbMa3-gs1m45_snqWxScm-tpjH0sqX1ZWDOpGjbNyMYkDBaLZsJ1dRb80UsVHLuf3ZIW1qrvRjSlf4kjEbhMIn7XkbuZZDNvmJl3HHkVDiX0874CCQKM7oVKAtRys0IhUUav8knPbZln1AYeCVQxFf-cbCBALjXfIvaKD4szcdm-_Y"
                alt="Clinic interior"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#f0f3ff] py-16 border-y border-sky-50">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={slideInLeft} className="md:col-span-2 bg-white p-12 rounded-2xl air-shadow flex flex-col justify-center space-y-6">
                <div className="w-12 h-12 bg-[#7cf8dd] flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[#007261]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                <h2 className="text-headline-lg font-bold text-[#005d90]">Our Mission</h2>
                <p className="text-lg text-[#4d5b64]">
                  To redefine the dental experience through clinical excellence and empathetic care. We leverage the latest dental technologies to provide painless, effective treatments that empower our patients to smile with confidence.
                </p>
              </motion.div>
              <motion.div variants={slideInRight} className="bg-[#0077b6] p-12 rounded-2xl shadow-xl flex flex-col justify-center space-y-6 text-white">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <h2 className="text-headline-lg font-bold">Our Vision</h2>
                <p className="opacity-90">
                  To become the regional benchmark for holistic dental care, where every visit is stress-free and every treatment is a masterpiece of precision.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-headline-lg font-bold text-[#111c2d] mb-4">Meet Our Specialists</motion.h2>
            <motion.p variants={staggerItem} className="text-[#4d5b64]">Our team brings decades of combined experience from the world's leading dental schools to ensure your smile is in the best hands.</motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={staggerItem} whileHover={{ y: -8 }}>
              <Link
                to={member.to}
                className="bg-white rounded-2xl overflow-hidden border border-[#d6e5ef] air-shadow transition-all duration-300 group block"
              >
                <div className="h-80 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={member.img} alt={member.name} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#006b5b] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-sm font-bold text-[#006b5b] uppercase tracking-tight">{member.role}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#111c2d]">{member.name}</h3>
                  <p className="text-[#005d90] font-semibold mb-4">{member.specialty}</p>
                  <p className="text-[#4d5b64] text-sm line-clamp-3">{member.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm text-slate-500">{member.exp}</span>
                    <span className="material-symbols-outlined text-[#005d90] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Trust Badges */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="max-w-7xl mx-auto px-8 mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-12 py-12 border-t border-slate-100 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { icon: 'medical_services', label: 'ADA Member' },
              { icon: 'award_star', label: 'Quality Choice 2023' },
              { icon: 'security', label: 'Sterilization Gold Standard' },
              { icon: 'school', label: 'ISO 9001 Certified' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl">{b.icon}</span>
                <span className="font-bold">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
