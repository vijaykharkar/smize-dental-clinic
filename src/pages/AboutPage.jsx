import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
        <Navbar />
        <main className="pt-32">

          {/* ── Hero Introduction ── */}
          <section className="max-w-7xl mx-auto px-8 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7cf8dd] text-[#007261] rounded-full text-sm font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Smize Dental Atelier
              </motion.div> */}
                <motion.h1 variants={staggerItem} className="text-display font-bold text-[#111c2d] leading-tight mt-20">
                  Behind every confident smile is a team devoted to{' '}
                  <span className="text-[#005d90]">precision, artistry, and care.</span>
                </motion.h1>
                <motion.p variants={staggerItem} className="text-lg text-[#4d5b64] leading-relaxed">
                  At Smize Dental Atelier, our clinicians are not just experts — they are craftsmen of bespoke dentistry, committed to creating smile experiences that are as seamless as they are beautiful.
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
                  {/* <p className="text-sm font-semibold text-[#4d5b64]">
                  Trusted by <span className="text-[#005d90] font-bold">1,000+</span> patients in Pune
                </p> */}
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
                  alt="Smize Dental Atelier clinic interior"
                />
              </motion.div>
            </div>
          </section>

          {/* ── Mission & Vision ── */}
          <section className="relative bg-gradient-to-br from-[#f6f9ff] to-[#eaf6ff] py-24 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#7cf8dd]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#005d90]/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-8 relative z-10 space-y-20">

              {/* ───────── MISSION ───────── */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >

                {/* Image Side */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7cf8dd]/30 to-transparent rounded-[32px]" />
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                    className="rounded-[32px] shadow-2xl object-cover w-full h-[400px] group-hover:scale-[1.03] transition duration-700"
                  />

                  {/* Floating Card */}
                  <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-[#005d90]">
                      Patient-First Care
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#7cf8dd] rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#006b5b]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        rocket_launch
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#005d90]">Our Mission</h2>
                  </div>

                  <p className="text-lg text-[#4d5b64] leading-relaxed">
                    Our mission is to provide precise, patient-centered dental care in a welcoming and reassuring environment.
                    Every treatment is thoughtfully planned and delivered with a gentle, attentive approach—ensuring lasting oral health while helping each patient feel comfortable, confident, and genuinely cared for.
                  </p>
                </div>
              </motion.div>


              {/* ───────── VISION ───────── */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >

                {/* Content First (reverse layout) */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#005d90] rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                        visibility
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#005d90]">Our Vision</h2>
                  </div>

                  <p className="text-lg text-[#4d5b64] leading-relaxed">
                    To be recognized as Pune’s most trusted aesthetic dental atelier—where precision meets empathy,
                    and every smile we create is as unique and beautiful as the person behind it.
                  </p>
                </div>

                {/* Image Side */}
                <div className="relative group order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#005d90]/30 to-transparent rounded-[32px]" />
                  <img
                    src="https://images.unsplash.com/photo-1606813902911-9bdfb5d4f0d2"
                    className="rounded-[32px] shadow-2xl object-cover w-full h-[400px] group-hover:scale-[1.03] transition duration-700"
                  />

                  {/* Floating Card */}
                  <div className="absolute -top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-[#005d90]">
                      Aesthetic Excellence
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>


          {/* ── Meet Our Doctors ── */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Meet Our Doctors</h2>
              <p className="text-[#4d5b64]">Skilled, compassionate, and driven by a shared commitment to crafted dental excellence.</p>
            </motion.div>

            {/* Lead Doctor — featured card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="bg-white rounded-3xl overflow-hidden border border-[#d6e5ef] air-shadow mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 h-80 lg:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxqOkkp0s0Q8pgGp7rrjfE5xSR9ZEl6w-qepEhftLxW1okbGhz69nvpNoVRwx5EX6SXY3axEWvBcqvkKiCARDTE7rsxpzqNPvrmd1jltio1uRRkDr6nLLnN3CWAtqEYeuj83O87AoVgAPJV6n_XgrZvyQYOWok1XLLfEDJf3F4tJmY48kC1dObH3eGQz9f_fxFr3VuqdIX8I3dQSg_85_umIvzT7S3DqelX8QK5klCUyd3kjcslieOV2jSLlVpVyAF-cKIRXRaoo"
                    alt="Dr. Shubham Kharat"
                  />
                </div>
                <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[#006b5b] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-sm font-bold text-[#006b5b] uppercase tracking-widest">Founder & Chief Dental Surgeon</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#111c2d] mb-1">Dr. Shubham Kharat</h3>
                  <p className="text-[#005d90] font-semibold mb-6">Conservative Dentistry & Endodontics · MDS – BHU</p>
                  <p className="text-[#4d5b64] leading-relaxed mb-6">
                    An MDS-trained Endodontist from Banaras Hindu University, Dr. Kharat brings together clinical precision and an artist's sensibility for aesthetics. Specializing in painless root canal treatments and smile transformations, he approaches every case with meticulous care — ensuring procedures are not just effective, but truly comfortable. His philosophy: every patient deserves dentistry that is as gentle as it is precise.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      { icon: 'school', text: 'B.D.S. – Govt. Dental College, Chhatrapati Sambhajinagar' },
                      { icon: 'workspace_premium', text: 'M.D.S. – Banaras Hindu University (BHU)' },
                      { icon: 'dentistry', text: 'Specialization: Root Canal & Smile Design' },
                      { icon: 'badge', text: 'Reg. No. A-41636' },
                    ].map((q) => (
                      <div key={q.text} className="flex items-start gap-2 text-sm text-[#4d5b64]">
                        <span className="material-symbols-outlined text-[#005d90] text-base mt-0.5 flex-shrink-0">{q.icon}</span>
                        {q.text}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/doctor/shubham-kharat"
                    className="self-start inline-flex items-center gap-2 bg-[#005d90] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0077b6] transition-colors"
                  >
                    View Full Profile <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Supporting Doctor */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#d6e5ef] air-shadow max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 h-56 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover object-top"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCURTwQ7yA-qsxHI4wVQc8_E4aICv-JULkZg5VM3b3AQ-H0hX3y9-DZUiBiIzZwX-VPdlVvoRZ1zaANLHFtFIVcd9lotDet13Q3pt_sJnqFEaz0U_U_zd7ZsrSiSw3D4t8qVsebsOgoVCC_9bcWU3_BJxyO4B9QS0MDBY7sIuIgSQJXFWDsPAk846VxhIR9lAcnDcixCIrbfhNmnwGcdsnzvc5ySEafwdk-K-uLly5I6RBvIs7PPDwLFoZAr43avv39nzelracbYEY"
                    alt="Dr. Deepika Waghmare Kharat"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[#006b5b] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-sm font-bold text-[#006b5b] uppercase tracking-widest">Dental Surgeon</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111c2d] mb-1">Dr. Deepika Waghmare Kharat</h3>
                  <p className="text-[#005d90] font-semibold text-sm mb-4">General & Preventive Dentistry · BDS – Nair, Mumbai</p>
                  <p className="text-[#4d5b64] text-sm leading-relaxed mb-4">
                    Trained at the prestigious Nair Hospital Dental College, Mumbai, Dr. Deepika brings warmth and thoroughness to every consultation. Her expertise in comprehensive and preventive care ensures patients receive holistic treatment — from routine hygiene to restorations — with sensitivity and genuine empathy.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#4d5b64]">
                    <span className="material-symbols-outlined text-[#005d90] text-sm">badge</span>
                    Reg. No. A-55193
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── Team Philosophy ── */}
          <section className="bg-[#005d90] text-white py-16">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="material-symbols-outlined text-4xl text-[#7cf8dd]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/95">
                  We believe dentistry is not merely treatment — it is an <em>experience</em>. Every member of our team works in quiet harmony to ensure your visit is seamless, comfortable, and crafted around you.
                </p>
                <p className="text-[#cde5ff] text-lg">— The Smize Dental Atelier Philosophy</p>
              </motion.div>
            </div>
          </section>

          {/* ── Credentials & Trust ── */}
          <section className="max-w-7xl mx-auto px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-[#111c2d] mb-3">Credentials & Standards</h2>
              <p className="text-[#4d5b64] max-w-xl mx-auto">Continuously trained in advanced dental technologies and global best practices — care that is both modern and mindful.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: 'workspace_premium', title: 'Advanced Training', desc: 'Post-graduate specialization from India\'s top dental institutions.' },
                { icon: 'biotech', title: 'Modern Technology', desc: 'State-of-the-art equipment for precision diagnosis and treatment.' },
                { icon: 'security', title: 'Strict Sterilization', desc: 'Gold-standard hygiene and infection control protocols followed rigorously.' },
                { icon: 'auto_stories', title: 'Continuous Learning', desc: 'Regular participation in national and international dental conferences.' },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  className="bg-white p-7 rounded-2xl border border-[#d6e5ef] air-shadow text-center"
                >
                  <div className="w-12 h-12 bg-[#7cf8dd]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#006b5b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
                  </div>
                  <h4 className="font-bold text-[#111c2d] mb-2">{c.title}</h4>
                  <p className="text-sm text-[#4d5b64]">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Human Touch Closing ── */}
          <section className="max-w-3xl mx-auto px-8 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-14 h-14 bg-[#7cf8dd]/30 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[#006b5b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <p className="text-xl md:text-2xl text-[#4d5b64] font-light leading-relaxed italic">
                "Beyond expertise, it is our empathy and attention to detail that patients carry with them long after they leave our chair."
              </p>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-[#005d90] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0077b6] transition-colors shadow-lg"
              >
                Book a Consultation <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>
          </section>

        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
