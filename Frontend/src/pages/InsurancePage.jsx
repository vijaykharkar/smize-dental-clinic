import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const insuranceLogos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC0hMbGzXm0rmpO6yyVgJKZFiaNFDo9RIYXipAF7rpt3oWK9XSgEXsHt6YqwqHtbHxzSpiPc5MMoO3BXl0FD45uDTYx0b87c0axPCecQITSLzgpytTfUk_fKhRjj8WxI64BGOd5UXBAZzDXEuzMNnOwob7qwnxJXNjW9UY-cq8vn9wDce7MnKqYBThN8agTE1FR5gGHOy62hkxffvqdDljSB6cYd3gKF5_Z3X3x4K6j5sbVnl6QhoDTs6n9KjFRA4Hw-lOgnx204LQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDoSqFAW6jJK1ggOFgLVV4Q4M3WohkB8kjJAb6O0IKiHEavL-HqDq0cnRMkJ3pSJOOioqPS1LIJVOZF5W00T0PbFm_-PTmCvWyrw6vWf-d4yh9sHunUmqxzPPILuGHO1ZqTRLSpCBXeuu3M9tlaabTU1WnbnkkpYnGbUZel1HE1-rQiTvNj-FUEAzuc8dDFQx8uX8zeMpCJeRhESoee1XM2Sm0jWxGCZ9E-9hcV57l-3NNyNsaMdhlt1cKRSMf5Zhzv_RSgilyOZPY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCh09wsd6bEfgjZ00GgjHz-30DCvYnWFUuO3q9Fc-IKqQFNo19DDSykNR5Jl98ryqJT_ewSro8EztApJqRlnSUvD0Pghbs1CtYvtNp3bgPWUrPE5zkx5B7W8NfWVzXKzz0E_Y9f2D0e7-uDMJTBTJZ1I41RGiQkLCqNvUOZGv3lcCzk79aaib8G7mvXgmZ0j-eXMG-yBb30QQ2ceUADCWLW5pAhejz0HxRdb3h08zqi_Q_zoDhTeByR4tY3MdqPTRUO2AfWYqBEvjo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDS_nPtlATeUVux8OZaiThmsxMV2lN6hIVl2r6IOJaaLaFWEp4M9RfA2QlWsC2CnMCjHGZVWR7J10JqBYkttWmNykTzVpHIE21S0Ug7wVLIlInBnl7nWgl1gFRLB_hEIVCCzOg--AWLDsluKn60DzSLAk-WUQrmLAst44uF-dLpW3lq2oCJ_QMidZ-mmRU0dNlewYtE9kVGklmIwyfgHvvoa7pjMFSuOSTEYZAi5TJVmc4h4dfIIoa_ZsyoPoI4bas9_hiUsekwlMk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATPyE4VyuvHutB4I_RbZw0z6XunyIm4W9DqcT9tI_0tBztQ3LM9KC6vNUP7Z1melqZAUamAQz7oMmkVCRsRHO6BJ_Yyw0h0YMwwEwxs2O9A425Qp_3sCygNKITCA4FXIR1JRlLlGD_Wjh_0I9WQ0Akj9H-WkXJsdAztTqeItqMdwIBij-SW8jlZy4kYSPEi_7MFaGKoyi7mLtzGjwUOttnbn2ibfadCG--f6rOxaKKDnGazadiKtlIQ6TkIHctsnnbcdoPzJx2cF0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVs0tkcGlrVcj_l7zNTDM-ChBoh0GVYhqib_R7hp6CPTq1RPf4sTlIxPteDXDmn3waFQfezbM5rB7wo2Rwcf1Poxx5A_nTfzmY1nNSqNb5ciliCGovnCf2FetR01e7sZtS6QibYZe_iMedf4TPM3DjTLuP3Ga9T4jqM_iZL5vOfvH9Kr9M059Q82W9if-vqSrUnHFEFZWwemFwBNUWYKNbl80CkrgZUTbY9OLcEgGshvSjL9HLmjI-Dwwmr6lVHPS0Obbqc33zoQ0',
]

const steps = [
  { icon: 'fact_check', title: '1. Eligibility Check', desc: 'Bring your insurance card. We verify your coverage and benefits in real-time before your consultation begins.', bg: 'bg-[#7cf8dd]', color: 'text-[#007261]' },
  { icon: 'clinical_notes', title: '2. Direct Billing', desc: 'For cashless treatments, we submit all medical reports and bills directly to your provider for approval.', bg: 'bg-[#cde5ff]', color: 'text-[#001d32]' },
  { icon: 'task_alt', title: '3. Final Approval', desc: 'Once approved, you only pay the deductible or co-pay amount as specified by your policy.', bg: 'bg-[#d6e5ef]', color: 'text-[#0f1d25]' },
]

const paymentMethods = [
  { icon: 'qr_code_2', label: 'UPI & QR' },
  { icon: 'contactless', label: 'Tap to Pay' },
  { icon: 'account_balance', label: 'Bank Transfer' },
  { icon: 'wallet', label: 'Wallets' },
]

const insuranceFaqs = [
  { q: 'Do you offer cashless facility for all insurers?', a: 'Yes, we provide cashless facilities for all our network-partnered insurance providers. For non-network providers, we assist with detailed documentation for reimbursement claims.' },
  { q: 'What documents do I need for a claim?', a: "Typically, you'll need your valid insurance ID card, a government-issued photo ID, and any previous medical records related to the current dental issue." },
  { q: 'Are cosmetic procedures covered by insurance?', a: 'Most dental insurance policies focus on therapeutic and preventive care. Cosmetic procedures like teeth whitening are often not covered unless they are part of a restorative treatment.' },
  { q: 'How long does insurance approval take?', a: 'Real-time eligibility checks are instant. Pre-authorization for major procedures usually takes between 2 to 4 hours depending on the insurer\'s response time.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group bg-white border border-[#bfc7d1]/30 rounded-2xl air-shadow">
      <button className="flex items-center justify-between p-6 w-full text-left" onClick={() => setOpen(!open)}>
        <h4 className="font-semibold text-lg text-[#111c2d] pr-4">{q}</h4>
        <span className={`material-symbols-outlined transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {open && <div className="px-6 pb-6 text-[#404850]">{a}</div>}
    </div>
  )
}

export default function InsurancePage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Header */}
        <section className="max-w-screen-xl mx-auto px-8 mb-16">
          <nav className="flex items-center gap-2 text-sm text-[#707881] mb-6">
            <Link to="/" className="hover:text-[#005d90]">Home</Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span className="text-[#005d90] font-semibold">Insurance &amp; Payments</span>
          </nav>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 variants={staggerItem} className="text-display font-bold text-[#111c2d] mb-4">Financial Clarity for Your Care</motion.h1>
            <motion.p variants={staggerItem} className="text-lg text-[#404850]">We believe high-quality dental care should be accessible. Explore our insurance partnerships and flexible payment options.</motion.p>
          </motion.div>
        </section>

        {/* Insurance Providers */}
        <section className="max-w-screen-xl mx-auto px-8 mb-24">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <span className="inline-block px-3 py-1 bg-[#7cf8dd] text-[#007261] text-sm rounded-full mb-2 font-bold">Network Partners</span>
              <h2 className="text-headline-lg font-bold text-[#111c2d]">Supported Insurance Providers</h2>
            </div>
            <p className="text-sm text-[#707881] hidden md:block">Over 25+ insurance partners accepted</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {insuranceLogos.map((src, i) => (
              <motion.div key={i} variants={staggerItem} className="aspect-video bg-white/80 backdrop-blur border border-[#bfc7d1]/30 rounded-xl flex items-center justify-center air-shadow hover:border-[#0077b6]/50 transition-all group cursor-pointer">
                <img
                  className="grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100 h-10 object-contain"
                  src={src}
                  alt={`Insurance provider ${i + 1}`}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <button className="text-[#005d90] font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
              View All 25+ Providers <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Claim Process */}
        <section className="bg-[#f0f3ff] py-20 mb-24">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-headline-lg font-bold text-[#111c2d]">Seamless Claim Experience</h2>
              <p className="text-[#404850] max-w-2xl mx-auto mt-4">We handle the paperwork so you can focus on your recovery.</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid md:grid-cols-3 gap-8"
            >
              {steps.map((step) => (
                <motion.div key={step.title} variants={staggerItem} whileHover={{ y: -4 }} className="bg-white p-8 rounded-2xl air-shadow border border-white relative overflow-hidden">
                  <div className={`w-12 h-12 ${step.bg} ${step.color} rounded-full flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
                  <p className="text-[#404850]">{step.desc}</p>
                  <div className="absolute -right-4 -bottom-4 opacity-5 text-8xl font-extrabold select-none text-[#005d90]">
                    {step.title.charAt(0)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="max-w-screen-xl mx-auto px-8 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={vp}>
              <h2 className="text-headline-lg font-bold text-[#111c2d] mb-6">Flexible Payment Methods</h2>
              <p className="text-lg text-[#404850] mb-8">Choose the method that suits you best.</p>
              <ul className="space-y-6">
                {[
                  { icon: 'payments', bg: 'bg-[#7cf8dd]', color: 'text-[#007261]', title: 'Digital Payments (UPI & Wallets)', desc: 'Scan & Pay using GPay, PhonePe, Paytm or any other UPI app.' },
                  { icon: 'credit_card', bg: 'bg-[#cde5ff]', color: 'text-[#001d32]', title: 'Cards & Net Banking', desc: 'Visa, Mastercard, RuPay, and secure gateways for all major banks.' },
                  { icon: 'calendar_month', bg: 'bg-[#d6e5ef]', color: 'text-[#0f1d25]', title: '0% Interest EMIs', desc: 'Flexible monthly installments for major treatments with select card providers.' },
                ].map((m) => (
                  <li key={m.title} className="flex items-start gap-4">
                    <div className={`mt-1 p-2 ${m.bg} ${m.color} rounded-lg`}>
                      <span className="material-symbols-outlined">{m.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111c2d]">{m.title}</h4>
                      <p className="text-sm text-[#707881]">{m.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={vp} className="grid grid-cols-2 gap-4">
              {paymentMethods.map((pm) => (
                <div key={pm.label} className="bg-white/80 backdrop-blur p-8 rounded-2xl air-shadow border border-[#bfc7d1]/20 flex flex-col items-center justify-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-[#005d90]" style={{ fontVariationSettings: "'FILL' 1" }}>{pm.icon}</span>
                  <span className="font-semibold text-[#111c2d]">{pm.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-headline-lg font-bold text-[#111c2d]">Frequently Asked Questions</h2>
            <p className="text-[#404850] mt-2">Answers to common billing and insurance queries.</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="space-y-4"
          >
            {insuranceFaqs.map((f) => (
              <motion.div key={f.q} variants={staggerItem}>
                <FaqItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
