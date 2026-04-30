import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const packages = [
  {
    name: 'Essential Care',
    price: '$99',
    period: '/year',
    tag: null,
    desc: 'Perfect for maintaining basic oral health with regular checkups.',
    features: ['2 Professional Cleanings/Year', 'Annual Full X-Ray Set', 'Oral Cancer Screening', 'Fluoride Treatment', '10% Off Additional Services'],
    cta: 'Get Started',
    style: 'bg-white border border-[#d8e3fb]',
    btnStyle: 'bg-[#0077b6] text-white hover:bg-[#005d90]',
  },
  {
    name: 'Complete Health',
    price: '$199',
    period: '/year',
    tag: 'Most Popular',
    desc: 'Comprehensive coverage for individuals and families who want full preventive care.',
    features: ['4 Professional Cleanings/Year', 'Full Radiographic Series', 'Gum Disease Screening', 'Sealants for Children', '20% Off Restorative Work', 'Priority Booking'],
    cta: 'Choose Plan',
    style: 'bg-[#0077b6] text-white',
    btnStyle: 'bg-white text-[#005d90] hover:bg-[#e7eeff]',
  },
  {
    name: 'Premium Smile',
    price: '$349',
    period: '/year',
    tag: null,
    desc: 'For patients who want comprehensive care with access to cosmetic services.',
    features: ['Unlimited Cleanings', 'Digital Smile Design Session', '30% Off Cosmetic Procedures', 'Teeth Whitening Kit Included', 'Emergency Priority Line', 'Dedicated Care Coordinator'],
    cta: 'Go Premium',
    style: 'bg-white border border-[#d8e3fb]',
    btnStyle: 'bg-[#0077b6] text-white hover:bg-[#005d90]',
  },
]

const treatments = [
  { name: 'Dental Consultation', price: '$50 – $80' },
  { name: 'Professional Teeth Cleaning', price: '$90 – $150' },
  { name: 'Composite (White) Filling', price: '$120 – $250' },
  { name: 'Root Canal Treatment', price: '$700 – $1,200' },
  { name: 'Dental Crown (Porcelain)', price: '$900 – $1,500' },
  { name: 'Teeth Whitening (In-Office)', price: '$400 – $650' },
  { name: 'Dental Implant (Single)', price: '$2,500 – $4,000' },
  { name: 'Invisalign / Clear Aligners', price: '$3,000 – $6,000' },
  { name: 'Porcelain Veneer (Per Tooth)', price: '$800 – $1,500' },
  { name: 'Full Dentures (Upper/Lower)', price: '$1,200 – $2,500' },
]

export default function PricingPage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-block px-4 py-1.5 bg-[#7cf8dd] text-[#007261] rounded-full text-sm font-bold mb-6">
            Transparent Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="text-display font-bold text-[#005d90] mb-4">Invest in Your Smile</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-lg text-[#4d5b64] max-w-2xl mx-auto">
            We believe quality dental care should be affordable and transparent. No hidden fees, no surprises — just clear, honest pricing.
          </motion.p>
        </section>

        {/* Packages */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className={`${pkg.style} rounded-2xl p-8 air-shadow flex flex-col relative overflow-hidden`}
              >
                {pkg.tag && (
                  <div className="absolute top-6 right-6 bg-[#7cf8dd] text-[#007261] px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.tag}
                  </div>
                )}
                <div>
                  <h3 className={`font-bold text-xl mb-2 ${pkg.name === 'Complete Health' ? 'text-white' : 'text-[#111c2d]'}`}>{pkg.name}</h3>
                  <p className={`text-sm mb-6 ${pkg.name === 'Complete Health' ? 'text-[#cde5ff]' : 'text-[#4d5b64]'}`}>{pkg.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className={`text-4xl font-bold ${pkg.name === 'Complete Health' ? 'text-white' : 'text-[#005d90]'}`}>{pkg.price}</span>
                    <span className={`text-sm ${pkg.name === 'Complete Health' ? 'text-[#cde5ff]' : 'text-[#707881]'}`}>{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span
                          className="material-symbols-outlined text-base flex-shrink-0"
                          style={{
                            color: pkg.name === 'Complete Health' ? '#7cf8dd' : '#006b5b',
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >check_circle</span>
                        <span className={`text-sm ${pkg.name === 'Complete Health' ? 'text-[#f3f7ff]' : 'text-[#4d5b64]'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/appointment"
                  className={`${pkg.btnStyle} mt-auto block text-center py-4 rounded-xl font-bold transition-colors`}
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Treatment Price Table */}
        <section className="max-w-5xl mx-auto px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Common Treatment Costs</h2>
            <p className="text-[#4d5b64]">Indicative pricing. Exact costs vary based on complexity and materials. A consultation is always required for an accurate quote.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl air-shadow overflow-hidden border border-[#d8e3fb]"
          >
            <div className="grid grid-cols-2 bg-[#0077b6] px-8 py-4">
              <span className="font-bold text-white">Treatment</span>
              <span className="font-bold text-white text-right">Estimated Cost</span>
            </div>
            {treatments.map((t, i) => (
              <div
                key={t.name}
                className={`grid grid-cols-2 px-8 py-4 border-b border-[#f0f3ff] last:border-0 ${i % 2 === 0 ? '' : 'bg-[#f9f9ff]'}`}
              >
                <span className="text-[#111c2d] font-medium text-sm">{t.name}</span>
                <span className="text-[#005d90] font-semibold text-sm text-right">{t.price}</span>
              </div>
            ))}
          </motion.div>
          <p className="text-center text-xs text-[#707881] mt-4">Prices are in USD and exclusive of applicable taxes.</p>
        </section>

        {/* Payment Options */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="bg-[#cde5ff] rounded-2xl p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={vp}>
                <h2 className="text-headline-lg font-bold text-[#005d90] mb-6">Flexible Payment Options</h2>
                <div className="space-y-4">
                  {[
                    { icon: 'credit_card', label: 'All Major Cards', desc: 'Visa, Mastercard, Amex, RuPay — all accepted.' },
                    { icon: 'qr_code_2', label: 'UPI & Digital Wallets', desc: 'Pay via GPay, PhonePe, Paytm and more.' },
                    { icon: 'calendar_month', label: '0% EMI Plans', desc: 'Split major treatments into easy monthly payments.' },
                  ].map((opt) => (
                    <div key={opt.label} className="flex items-start gap-4 bg-white rounded-xl p-4 air-shadow">
                      <span className="material-symbols-outlined text-[#0077b6] text-3xl mt-0.5">{opt.icon}</span>
                      <div>
                        <p className="font-bold text-[#111c2d]">{opt.label}</p>
                        <p className="text-sm text-[#4d5b64]">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={vp} className="space-y-6">
                <div className="bg-white rounded-2xl p-8 air-shadow">
                  <h3 className="font-bold text-xl text-[#111c2d] mb-4">Insurance Support</h3>
                  <p className="text-[#4d5b64] mb-6">We accept 25+ major dental insurance providers and handle direct billing on your behalf.</p>
                  <Link to="/insurance" className="flex items-center gap-2 text-[#005d90] font-bold hover:gap-3 transition-all">
                    View Insurance Details <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <Link
                  to="/appointment"
                  className="block bg-[#0077b6] text-white text-center py-5 rounded-2xl font-bold text-lg hover:bg-[#005d90] transition-colors"
                >
                  Book a Free Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
