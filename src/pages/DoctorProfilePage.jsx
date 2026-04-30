import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const certifications = [
  { icon: 'workspace_premium', title: 'B.D.S.', sub: 'Government Dental College, Chhatrapati Sambhajinagar' },
  { icon: 'emoji_events', title: 'M.D.S.', sub: 'Conservative Dentistry & Endodontics, BHU' },
  { icon: 'verified_user', title: 'DCI Registered', sub: 'Reg. No. A-41636' },
  { icon: 'star', title: 'Smize Dental Atelier', sub: 'Founder & Lead Dentist' },
]

const testimonials = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3HTQyDG0t2aJXcbiH88W9KVK_BTaNOa-CroRaR6ZoNHaDXxlukWuQNgsOlFOZq4S0ro7Cu-YWeMgzOTli3V0IMawkIqL1dMXNp4ZKLk9ykwgF7jpwjpETdIJrbuhP4co9rMvNXYyn7dozJxccKhspkvAH4mak0jApdqHi-vUybN63XJZGPOByJxi6x6Uq8Tpv7jm0Ci9ZoxucSldvOgVoIoHY6YBKn4JV5-ND7mARoSO5sFRyhlE9ge3NheLHMwTmsS238B9Lxw',
    name: 'Sarah Jenkins',
    quote: '"Dr. Kharat made my root canal treatment completely painless. His calm demeanor and technical skill are unmatched. I felt safe throughout the entire procedure."',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd9RDSiiaLJpuyYk85KbXRPlz3RLUsYl-s0DjvE-3Z5B0A9rBvGUoMB4irWcyH7CPez8-xfRJfVROgfLQO_tpsdGs7rr3Y7vCwTn0-D56r5YLv7DcOJyutFvri8D6lyourBCj3N3itmjqwOsliU11yb4TgHcY-oYBAiS_WhdQZIT5GV3LBJk2wKGQ-VHcYL1MQ-xBZ4WqP_qNkLC4tWK_j-NJPJXlNANQxzF43AnnKpGih1fD-7JRIyE0tEPSTpl6fBS4tDFRQWck',
    name: 'Michael Rossi',
    quote: '"The best dentist I\'ve ever visited. Dr. Kharat and his team are professional, clinical yet warm. My recovery from dental treatment was remarkably quick."',
  },
]

export default function DoctorProfilePage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#707881]">
              <li><Link to="/" className="hover:text-[#005d90] transition-colors">Home</Link></li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <Link to="/about" className="hover:text-[#005d90] transition-colors">Our Team</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <span className="text-[#005d90] font-semibold">Dr. Shubham Kharat</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Hero Section */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-white p-8 rounded-xl air-shadow border border-sky-50"
              >
                <motion.div variants={slideInLeft} className="relative w-full md:w-64 h-64 flex-shrink-0">
                  <img
                    alt="Dr. Shubham Kharat"
                    className="w-full h-full object-cover rounded-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl62wXX6qDXN8QQsfglfqgm1C750hpZn0-qsuUKe29sVWGcEm772OYFRGm0nl_PdvWGz8pkiCvq2bjtk5k3PtsBkFHuoWR14ZwZ0KBe1TRa7QaDObH0f1y3zrePPRXNt7MiEPP3FrGZRN6NniIImlH0-Jswoxxc826WF5n4Wu-t5KO6oObEA1y_V76owwj546K8zwJVc070hG5WY3MaXIHPFn5rQBHnXcawnnPsqZ06e54yqKh9HNYjFsz0e-XQq1LqQMGF5ROL6U"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#7cf8dd] text-[#007261] px-4 py-2 rounded-lg text-sm font-bold air-shadow">
                    Lead Dentist
                  </div>
                </motion.div>
                <motion.div variants={staggerContainer} className="space-y-3">
                  <motion.h1 variants={staggerItem} className="text-4xl font-bold text-sky-900">Dr. Shubham Kharat</motion.h1>
                  <p className="text-lg font-semibold text-sky-700">B.D.S., M.D.S. — Conservative Dentistry &amp; Endodontics</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['DCI Registered (A-41636)', 'BHU Alumni'].map((badge) => (
                      <div key={badge} className="flex items-center gap-2 bg-[#e7eeff] px-3 py-1 rounded-full text-sm text-[#005d90]">
                        <span className="material-symbols-outlined text-base">verified</span>
                        {badge}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.section>

              {/* Qualifications + Specializations */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={slideInLeft} className="bg-white p-8 rounded-xl border border-sky-50 air-shadow space-y-4">
                  <div className="w-12 h-12 bg-[#7cf8dd] flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[#007261]">school</span>
                  </div>
                  <h3 className="text-xl font-semibold text-sky-900">Qualifications</h3>
                  <ul className="space-y-4">
                    {[
                      { degree: 'Bachelor of Dental Surgery (B.D.S.)', school: 'Government Dental College, Chhatrapati Sambhajinagar' },
                      { degree: 'Master of Dental Surgery (M.D.S.)', school: 'Conservative Dentistry & Endodontics, Banaras Hindu University' },
                    ].map((q) => (
                      <li key={q.degree} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#005d90] mt-1" style={{ fontSize: '20px' }}>check_circle</span>
                        <div>
                          <p className="font-bold text-[#111c2d]">{q.degree}</p>
                          <p className="text-sm text-[#707881]">{q.school}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={slideInRight} className="bg-white p-8 rounded-xl border border-sky-50 air-shadow space-y-4">
                  <div className="w-12 h-12 bg-[#7cf8dd] flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[#007261]">clinical_notes</span>
                  </div>
                  <h3 className="text-xl font-semibold text-sky-900">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Root Canal Treatment', 'Cosmetic Dentistry', 'Dental Restorations', 'Endodontics', 'Smile Design'].map((s) => (
                      <span key={s} className="bg-[#f0f3ff] px-3 py-1 rounded-full text-sm text-[#404850]">{s}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.section>

              {/* Certifications */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl border border-sky-50 air-shadow"
              >
                <h3 className="text-xl font-semibold text-sky-900 mb-6">Certifications &amp; Awards</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {certifications.map((c) => (
                    <motion.div key={c.title} variants={staggerItem} className="flex items-center gap-4 p-4 border border-[#d6e5ef] rounded-lg">
                      <span className="material-symbols-outlined text-[#005d90] text-4xl">{c.icon}</span>
                      <div>
                        <p className="font-bold text-[#111c2d]">{c.title}</p>
                        <p className="text-sm text-[#707881]">{c.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Testimonials */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-sky-900">What Patients Are Saying</h3>
                  <div className="flex items-center gap-1 text-[#005d90]">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold">4.9</span>
                    <span className="text-[#707881] text-sm">(124 reviews)</span>
                  </div>
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {testimonials.map((t) => (
                    <motion.div
                      key={t.name}
                      variants={staggerItem}
                      whileHover={{ y: -4 }}
                      className="bg-white p-6 rounded-xl border border-sky-50 air-shadow space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <img alt={t.name} className="w-12 h-12 rounded-full object-cover" src={t.img} />
                        <div>
                          <p className="font-bold text-[#111c2d]">{t.name}</p>
                          <span className="bg-[#7cf8dd]/30 px-2 py-0.5 rounded text-[10px] text-[#006b5b] font-bold uppercase tracking-wider">
                            Verified Patient
                          </span>
                        </div>
                      </div>
                      <p className="italic text-[#404850]">{t.quote}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <motion.aside
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-8 rounded-xl border-2 border-[#0077b6] air-shadow space-y-6">
                  <h3 className="text-xl font-semibold text-sky-900">Book with Dr. Kharat</h3>
                  <p className="text-[#404850]">Reserve your consultation or procedure time with our lead dentist.</p>
                  <div className="space-y-4">
                    <div className="bg-[#f0f3ff] p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#005d90]">schedule</span>
                        <span className="font-medium text-[#111c2d]">Next Available</span>
                      </div>
                      <span className="text-[#006b5b] font-bold">Tomorrow, 9 AM</span>
                    </div>
                    <Link
                      to="/appointment"
                      className="block w-full bg-[#0077b6] text-white text-center py-4 rounded-lg font-bold hover:bg-[#005d90] transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full border-2 border-[#0077b6] text-[#0077b6] text-center py-3 rounded-lg font-bold hover:bg-sky-50 transition-colors"
                    >
                      Contact Clinical Team
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                  <p className="text-sm font-bold text-[#707881] text-center uppercase tracking-widest">Affiliations</p>
                  <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {['medical_services', 'clinical_notes', 'shield'].map((ic) => (
                      <span key={ic} className="material-symbols-outlined text-5xl">{ic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
