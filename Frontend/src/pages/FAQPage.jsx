import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const categories = [
  { id: 'general', label: 'General', icon: 'info' },
  { id: 'appointments', label: 'Appointments', icon: 'event' },
  { id: 'treatments', label: 'Treatments', icon: 'dentistry' },
  { id: 'insurance', label: 'Insurance', icon: 'payments' },
  { id: 'aftercare', label: 'Aftercare', icon: 'healing' },
]

const faqs = {
  general: [
    { q: 'What makes Smize Dental Atelier different?', a: 'We combine precision clinical expertise with a serene, patient-focused environment. Our team uses the latest technology to ensure painless treatments while prioritizing your comfort and long-term oral health.' },
    { q: 'Do you offer emergency dental services?', a: 'Yes, we prioritize dental emergencies. If you are experiencing severe pain or have a dental injury, please call our emergency hotline immediately for same-day priority booking.' },
  ],
  appointments: [
    { q: 'How do I book my first visit?', a: 'You can book online through our portal, call our reception, or use the "Book Appointment" button on our website. First-time patients will receive a comprehensive evaluation and digital imaging.' },
    { q: 'What is your cancellation policy?', a: 'We request at least 24 hours\' notice for any cancellations or rescheduling to allow us to offer the time slot to other patients in need.' },
    { q: 'Can I request a specific dentist?', a: 'Absolutely. When booking your appointment, you can specify your preferred doctor. We will do our best to accommodate your request based on availability.' },
  ],
  treatments: [
    { q: 'Is teeth whitening safe?', a: 'Yes. Our professional whitening treatments are pH-balanced and safe for enamel. We conduct a pre-treatment assessment to ensure suitability for each patient.' },
    { q: 'How long does a dental implant procedure take?', a: 'The full implant process typically spans 3–6 months, including the osseointegration period. The surgical placement itself usually takes 1–2 hours per implant.' },
    { q: 'Are clear aligners as effective as traditional braces?', a: 'For mild to moderate alignment cases, clear aligners are equally effective and far more comfortable and discreet. Complex malocclusions may still benefit from traditional braces.' },
  ],
  insurance: [
    { q: 'Which insurance providers do you accept?', a: 'We accept over 25+ insurance providers including all major dental plans. Please contact our billing team for a quick verification of your specific plan.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible 0% interest installment plans for major treatments through select financing partners. See our Pricing page for full details.' },
  ],
  aftercare: [
    { q: 'What should I avoid after teeth whitening?', a: 'For the first 48 hours, avoid dark-colored foods and beverages (coffee, red wine, berries) and tobacco to allow the enamel pores to reseal and maximize results.' },
    { q: 'How do I care for my dental implants?', a: 'Treat your implants like natural teeth — brush twice daily, floss once a day, and visit us for regular check-ups. Avoid extremely hard foods in the first few weeks post-surgery.' },
  ],
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group bg-white rounded-xl border border-sky-50 air-shadow overflow-hidden">
      <button
        className="flex items-center justify-between p-6 w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg text-sky-800 pr-4">{q}</span>
        <span className={`material-symbols-outlined text-sky-400 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-[#4d5b64] border-t border-sky-50 pt-4 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [search, setSearch] = useState('')

  const allFaqs = Object.values(faqs).flat()
  const filteredFaqs = search.trim()
    ? allFaqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
    : faqs[activeCategory] || []

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-screen-xl mx-auto px-8 mb-16">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#005d90] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span className="text-[#005d90] font-semibold">FAQ</span>
          </nav>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <motion.div variants={staggerItem} className="max-w-2xl">
              <h1 className="text-display font-bold text-sky-900 mb-4">How can we help?</h1>
              <p className="text-lg text-slate-600">Find quick answers to common questions about our dental services, treatments, and care plans.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="w-full md:w-96 relative">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for questions..."
                className="w-full pl-12 pr-4 py-4 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#005d90]/20 focus:bg-white outline-none text-sm air-shadow"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Layout */}
        <section className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          {!search.trim() && (
            <aside className="lg:col-span-3">
              <div className="sticky top-28 space-y-2">
                <h3 className="text-xs font-bold text-sky-900/50 uppercase tracking-widest mb-4 px-4">Categories</h3>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#0077b6] text-white'
                        : 'text-slate-600 hover:bg-sky-50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </aside>
          )}

          {/* Accordion Content */}
          <div className={search.trim() ? 'lg:col-span-12' : 'lg:col-span-9'}>
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((f, i) => (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <AccordionItem q={f.q} a={f.a} />
                </motion.div>
              ))
              ) : (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">search_off</span>
                  <p className="text-slate-500 text-lg">No results found for "{search}"</p>
                </div>
              )}
            </div>

            {/* Still have questions CTA */}
            {!search.trim() && (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="mt-12 bg-[#cde5ff] p-12 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900 mb-2">Still have questions?</h2>
                    <p className="text-lg text-sky-800/80">Can't find what you're looking for? Our team is here to help.</p>
                  </div>
                  <div className="flex gap-4">
                    <Link to="/contact" className="bg-[#0077b6] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#005d90] transition-colors">
                      Contact Us
                    </Link>
                    <a href="tel:9272351881" className="bg-white text-[#005d90] border border-[#005d90]/10 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-sky-50 transition-colors">
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
