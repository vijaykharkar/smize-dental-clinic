import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn } from '../utils/animations'
import drShubham from '../assets/clinic/shubham.jpeg'
import drDipika  from '../assets/clinic/dipika.jpeg'

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
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24">
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

            <div className="space-y-8">
              {[
                {
                  photo: drShubham,
                  accent: '#005d90',
                  accentLight: '#e8f4fd',
                  tag: 'Founder & Chief Dental Surgeon',
                  name: 'Dr. Shubham Kharat',
                  qual: 'BDS · MDS (Endodontics) — Banaras Hindu University',
                  spec: 'Root Canal Therapy · Smile Design · Restorative Dentistry',
                  bio: "An MDS-trained Endodontist from Banaras Hindu University, Dr. Kharat blends clinical precision with an artist's eye for aesthetics. Specialising in painless root canals and smile transformations, he approaches every case with meticulous care — ensuring treatments are not just effective, but genuinely comfortable.",
                  stats: [
                    { value: '8+', label: 'Years Experience' },
                    { value: '2000+', label: 'Happy Patients' },
                    // { value: '99%', label: 'Success Rate' },
                  ],
                  quals: [
                    { icon: 'school',           text: 'B.D.S. – Govt. Dental College, Sambhajinagar' },
                    { icon: 'workspace_premium', text: 'M.D.S. – Banaras Hindu University (BHU)' },
                    { icon: 'dentistry',         text: 'Root Canal & Smile Design Expert' },
                    { icon: 'badge',             text: 'Reg. No. A-41636' },
                  ],
                  flip: false,
                },
                {
                  photo: drDipika,
                  accent: '#006b5b',
                  accentLight: '#e6faf5',
                  tag: 'Dental Surgeon',
                  name: 'Dr. Deepika Waghmare Kharat',
                  qual: 'BDS — Nair Hospital Dental College, Mumbai',
                  spec: 'General Dentistry · Preventive Care',
                  bio: 'Trained at the prestigious Nair Hospital Dental College, Mumbai, Dr. Deepika brings warmth and thoroughness to every consultation. Her expertise in preventive and restorative dentistry ensures patients receive truly holistic care — from routine hygiene to full-mouth rehabilitation — with sensitivity and genuine empathy.',
                  stats: [
                    { value: '3+', label: 'Years Experience' },
                    { value: '1000+', label: 'Patients Treated' },
                    // { value: '100%', label: 'Patient Care' },
                  ],
                  quals: [
                    { icon: 'school',           text: 'B.D.S. – Nair Hospital Dental College, Mumbai' },
                    { icon: 'workspace_premium', text: 'Advanced Cosmetic & Restorative Training' },
                    { icon: 'dentistry',         text: 'Preventive & General Dentistry' },
                    { icon: 'badge',             text: 'Reg. No. A-55193' },
                  ],
                  flip: true,
                },
              ].map((doc, i) => (
                <motion.div
                  key={doc.name}
                  initial={{ opacity: 0, x: doc.flip ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#d6e5ef] shadow-[0_8px_40px_rgba(0,93,144,0.10)] hover:shadow-[0_16px_56px_rgba(0,93,144,0.16)] transition-shadow duration-500"
                >
                  <div className={`flex flex-col md:flex-row ${doc.flip ? 'md:flex-row-reverse' : ''}`}>

                    {/* ── Photo Panel ── */}
                    <div className="relative md:w-2/5 h-[340px] md:h-auto overflow-hidden flex-shrink-0 bg-[#e8f4fd]">
                      <motion.img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${doc.flip ? 'from-transparent to-[#0a1628]/40' : 'from-[#0a1628]/40 to-transparent'}`} />
                      {/* Role badge */}
                      <div className="absolute top-5 left-5">
                        <span className="bg-white/90 backdrop-blur-sm text-[#005d90] text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-white">
                          {doc.tag}
                        </span>
                      </div>
                      {/* Stats row at bottom of photo */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 py-4">
                        <div className="flex justify-around text-center">
                          {doc.stats.map(s => (
                            <div key={s.label}>
                              <p className="text-white font-bold text-lg leading-tight">{s.value}</p>
                              <p className="text-white/75 text-[10px] font-medium">{s.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── Content Panel ── */}
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                      {/* Verified tag */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-base" style={{ color: doc.accent, fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: doc.accent }}>{doc.tag}</span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#111c2d] mb-1">{doc.name}</h3>
                      <p className="text-sm font-semibold mb-1" style={{ color: doc.accent }}>{doc.qual}</p>
                      <p className="text-xs text-[#707881] mb-5 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm" style={{ color: doc.accent }}>clinical_notes</span>
                        {doc.spec}
                      </p>

                      {/* Divider */}
                      <div className="w-12 h-0.5 rounded-full mb-5" style={{ backgroundColor: doc.accent }} />

                      {/* Bio */}
                      <p className="text-[#4d5b64] text-sm leading-relaxed mb-6">{doc.bio}</p>

                      {/* Qualifications grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                        {doc.quals.map((q) => (
                          <div key={q.text} className="flex items-start gap-2 text-xs text-[#4d5b64] rounded-xl px-3 py-2.5" style={{ backgroundColor: doc.accentLight }}>
                            <span className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0" style={{ color: doc.accent }}>{q.icon}</span>
                            {q.text}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          to="/appointment"
                          className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg shadow-md"
                          style={{ backgroundColor: doc.accent }}
                        >
                          Book Appointment
                          <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                        <a
                          href="https://wa.me/919272351881"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#e8fdf3] text-[#006b5b] border border-[#7cf8dd] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#d0f9ea] transition-all"
                        >
                          <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
