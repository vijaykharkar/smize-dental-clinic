import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInRight, scaleIn, fadeInDown } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

export default function HomePage() {
  return (
    <PageTransition>
      <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.span variants={staggerItem} className="inline-block py-1 px-4 rounded-full bg-[#7cf8dd] text-[#005144] font-bold text-sm mb-6">
                TRUSTED FAMILY DENTISTRY
              </motion.span>
              <motion.h1 variants={staggerItem} className="text-display font-bold text-[#111c2d] mb-6">
                Your Smile, <br />
                <span className="text-[#0077b6]">Our Priority</span>
              </motion.h1>
              <motion.p variants={staggerItem} className="text-lg text-[#65737d] mb-10 max-w-lg">
                Experience clinical excellence in a serene environment. Our team combines advanced technology with a gentle touch to ensure your dental health is always in expert hands.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/appointment"
                    className="px-8 py-4 bg-[#0077b6] text-white rounded-xl font-bold air-shadow flex items-center justify-center gap-2"
                  >
                    Book Appointment
                    <span className="material-symbols-outlined">calendar_today</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-[#0077b6] text-[#0077b6] rounded-xl font-bold hover:bg-sky-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Contact Us
                    <span className="material-symbols-outlined">call</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="aspect-square rounded-[2rem] overflow-hidden air-shadow border-8 border-white"
              >
                <img
                  alt="Professional dentist"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4_NlZ11FuYubTrBlVxX6YUFyaSW79Z6-pvnyEM79zmu7IziCL-XoLBAYYtfp9ls52DOae4DZ6BFfhr7eUWu02zsyFje_pI8SSsny4Msib7XEpXVP8MN_89AFQIS9Mz5McdGG3aoFopCd4NzDL3X2rR1srDf5okW8lz2-YxjLThp16XAL8m1ZuIeWDGA-1QDW2trrgyUOFi4OYC65eOdfrN_lcny4cgRiKKdj_vp-n6SnvfzKvmeFto2G45QN2D0OVHaHVjWT15I"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl air-shadow flex items-center gap-4 max-w-xs border border-sky-50"
              >
                <div className="w-12 h-12 rounded-full bg-[#7cf8dd] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#005144]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d]">4.9/5 Rating</p>
                  <p className="text-sm text-[#65737d]">From 2,000+ happy patients</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Emergency Banner */}
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="bg-[#005d90] text-white py-4"
        >
          <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">emergency</span>
              <span className="font-bold">Dental Emergency?</span>
            </div>
            <p className="opacity-90 text-center">We offer same-day appointments for urgent dental needs.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="bg-white text-[#005d90] px-6 py-1.5 rounded-full font-bold hover:bg-[#7cf8dd] transition-colors"
              href="tel:9272351881"
            >
              Call 92723 51881
            </motion.a>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <section className="py-16 lg:py-24 bg-[#f9f9ff]">
          <div className="container mx-auto px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="text-center mb-16"
            >
              <motion.h2 variants={staggerItem} className="text-headline-lg font-bold text-[#111c2d] mb-4">Why Choose Smize Dental?</motion.h2>
              <motion.p variants={staggerItem} className="text-[#65737d] max-w-2xl mx-auto">
                Providing world-class dental services with a commitment to patient comfort and long-term oral health.
              </motion.p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: 'medical_services',
                  title: 'Experienced Doctors',
                  desc: 'Our board-certified specialists bring over 45 years of combined clinical expertise to every treatment plan.',
                },
                {
                  icon: 'precision_manufacturing',
                  title: 'Advanced Equipment',
                  desc: 'Utilizing 3D imaging and laser dentistry for minimally invasive procedures and faster recovery times.',
                },
                {
                  icon: 'account_balance_wallet',
                  title: 'Affordable Care',
                  desc: 'Transparent pricing and flexible financing plans to ensure premium dental health is accessible to everyone.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,93,144,0.12)' }}
                  className="bg-white p-8 rounded-[2rem] border border-sky-50 air-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#7cf8dd]/30 flex items-center justify-center mb-6 text-[#006b5b]">
                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#111c2d]">{item.title}</h3>
                  <p className="text-[#65737d]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Smile Gallery Preview */}
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Transforming Smiles</h2>
                <p className="text-[#65737d]">
                  Real results from our patients. Explore how we've helped restore confidence and function through professional care.
                </p>
              </div>
              <Link to="/gallery" className="text-[#0077b6] font-bold flex items-center gap-2 hover:underline">
                View Full Gallery <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlzWNz1TpP58M-dcrbeby2__g_DwQz1xvMULDE_Jbl-cRgW57ibp8juTg8Ovyte-rM6QcS6LtCNrOvZVuXb66MJzLZHS0OjUeXNpkLIEuGRYM3bnUy1KT5T62vhdPfXXyBBZPhH09PnFKm2KWKUnT_jmYTq4s8uaO-USZzWLVGWrF9zWZAdeBpXcfHjzD1UsG_kDkNWkG8q9DQzh5OwMhEzPtDyVHelExJz1DHEXSiIfZTKgimwFfYTcKwUSNac9z4L3ch13I5v7Q',
                  tag: 'Full Restoration',
                  title: 'Cosmetic Excellence',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdobsEtmDTBF1Vi2w3Bdpk-laXNaA1nAb4nRY5xpP8UOPNc4Sv_aGIZ4e4h43QpBGnUD5vaAK_FF6jyXSlJk8Ea6CmnfMf3opl1H99m103LVDk2ETajKoldBfOZ_G6BoJo3jfxg0Sxr6iW7BWb3IpvFhPeWTQOuJ4xqzB0OthpI5d1BjxheSOl20uOUAI0EoQOopj_EiY7jA2kZI8Gt9OOrFCLqk5JuivLO7EQ2AqS48e5ppWKKZ3XZFvCuMceRU',
                  tag: 'Orthodontics',
                  title: 'Precision Alignment',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-pointer overflow-hidden rounded-[2rem]"
                >
                  <img
                    alt={item.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div>
                      <span className="bg-[#7cf8dd] text-[#005144] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                        {item.tag}
                      </span>
                      <p className="text-white font-bold text-xl">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-[#f0f3ff]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Patient Serenity Stories</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "The most relaxing dental visit I've ever had. The staff is professional and the environment is so calming.",
                  name: 'Sarah Johnson',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV3Ma_TQ4U5Ruz08lVrw8-hsUyHuOMHZEYUKRbrKTACBRWHNLImPG8OxZ1qlsQ8zlX0R9FpxJgid9nBRdcCdogFpdWSh_8T6qIDPDrvHflsbhXpiZjjjykidg4zTHFpeSM8OxNPXmhi5wKhYsmEmpM6ZHiSsdXY1mXEqYWv8LhDjgx4rPOBem8M7JFcO9FO6Z6qn6iLGTjQCX_fxXvYHfEMyI1pIjYhOj55dD8YlItpskKLX4muQpTqpyoYzKU15hlSI6ZGPuOEW8',
                },
                {
                  quote: "I was nervous about my wisdom tooth surgery, but the technology they use made it completely painless.",
                  name: 'Mark Richards',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9sOZtQRr-CVlgvf3iY9xd6KTOhDoouHtQmnu6W8iDsKf8uZe8intLUFdlF-vbcE0eYxmQBzszIYEiixOUYOAiSJ6WsJmA-qChrzFuOkiHcqMCPrU3I69ijL76gxVG83MYjK3XYMm9wlUo9z5x-mhsUqYu_nRKuyCq9Z7y5v_V6qSGzZrS8Tc3aq9krCzq9abJQN9PudhxER0g37o-3KvRAaADIBDGENaTf1l_Dg3MDEDPMDP7AD9A2TxmYKuVtfrgVXbxRIM1NcU',
                },
                {
                  quote: "Smize Dental transformed my confidence. The cosmetic work is flawless and looks so natural.",
                  name: 'Elena Vasquez',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWWLk2K4KcjZ6fO-TbuVGJ_1e-lBqQ82AP82YA7ptSBbfhVsFlutcotSKoc75jKM5PBwCkKdxtWA9Nodo1_m66JaebeHWEbrcsWiFUiF0z3lX9zi9eFU2bUhScFVNGmyI8BdLP6KnknrsNnhb2T-aRwwxOetOjwO6Mtwsut7IMIVcA7ZA3zKPYpFTVv9Q1nxMWQ-fXBkiXhPph9kRobxQvldI9LaJovAuUdJVujPvjLq0k0nsCPEqPNvlo-He9JYcnljw-XmQXdy4',
                },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  variants={staggerItem}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,93,144,0.1)' }}
                  className="bg-white p-10 rounded-[2rem] air-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 text-[#006b5b] mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-[#4d5b64] mb-8">"{t.quote}"</blockquote>
                  </div>
                  <div className="flex items-center gap-4 border-t border-sky-50 pt-6">
                    <img alt={t.name} className="w-14 h-14 rounded-full object-cover" src={t.img} />
                    <div>
                      <p className="font-bold text-[#111c2d]">{t.name}</p>
                      <span className="inline-block py-0.5 px-2 bg-[#7cf8dd] text-[#005144] rounded text-[10px] font-bold uppercase tracking-wider">
                        Verified Patient
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="py-12 bg-white"
        >
          <div className="container mx-auto px-8">
            <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">Certified &amp; Accredited By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {[
                { icon: 'verified_user', label: 'Dental Association' },
                { icon: 'health_and_safety', label: 'Oral Health Board' },
                { icon: 'workspace_premium', label: 'Clinic Quality Standard' },
                { icon: 'military_tech', label: 'Cosmetic Gold Award' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl">{b.icon}</span>
                  <span className="font-bold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
