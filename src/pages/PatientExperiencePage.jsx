import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, slideInRight } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const highlights = [
  { icon: 'self_improvement', title: 'Anxiety-Free Environment', desc: 'Our clinic is designed like a wellness retreat — calming colors, ambient music, and a compassionate team to put you at ease before every procedure.' },
  { icon: 'precision_manufacturing', title: 'Cutting-Edge Technology', desc: 'From digital X-rays to laser dentistry, we use the most advanced tools available to minimize discomfort and maximize precision.' },
  { icon: 'groups', title: 'Personalized Care', desc: 'Every patient receives a custom treatment plan built around their unique needs, preferences, and long-term oral health goals.' },
  { icon: 'timer', title: 'Respect for Your Time', desc: 'We pride ourselves on punctuality. Our scheduling system ensures minimal waiting times and efficient, focused appointments.' },
]

const testimonials = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3HTQyDG0t2aJXcbiH88W9KVK_BTaNOa-CroRaR6ZoNHaDXxlukWuQNgsOlFOZq4S0ro7Cu-YWeMgzOTli3V0IMawkIqL1dMXNp4ZKLk9ykwgF7jpwjpETdIJrbuhP4co9rMvNXYyn7dozJxccKhspkvAH4mak0jApdqHi-vUybN63XJZGPOByJxi6x6Uq8Tpv7jm0Ci9ZoxucSldvOgVoIoHY6YBKn4JV5-ND7mARoSO5sFRyhlE9ge3NheLHMwTmsS238B9Lxw',
    name: 'Sarah Jenkins',
    rating: 5,
    quote: '"I\'ve been a patient for 3 years and every single visit has been exceptional. The staff remembers my name and preferences — it feels like visiting a friend who happens to be a brilliant dentist."',
    treatment: 'Porcelain Veneers',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd9RDSiiaLJpuyYk85KbXRPlz3RLUsYl-s0DjvE-3Z5B0A9rBvGUoMB4irWcyH7CPez8-xfRJfVROgfLQO_tpsdGs7rr3Y7vCwTn0-D56r5YLv7DcOJyutFvri8D6lyourBCj3N3itmjqwOsliU11yb4TgHcY-oYBAiS_WhdQZIT5GV3LBJk2wKGQ-VHcYL1MQ-xBZ4WqP_qNkLC4tWK_j-NJPJXlNANQxzF43AnnKpGih1fD-7JRIyE0tEPSTpl6fBS4tDFRQWck',
    name: 'Michael Rossi',
    rating: 5,
    quote: '"As someone who had severe dental anxiety, Smize Dental truly changed my life. Dr. Kharat explained every step, ensured I was comfortable throughout. I now actually look forward to my check-ups!"',
    treatment: 'Dental Implants',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV3Ma_TQ4U5Ruz08lVrw8-hsUyHuOMHZEYUKRbrKTACBRWHNLImPG8OxZ1qlsQ8zlX0R9FpxJgid9nBRdcCdogFpdWSh_8T6qIDPDrvHflsbhXpiZjjjykidg4zTHFpeSM8OxNPXmhi5wKhYsmEmpM6ZHiSsdXY1mXEqYWv8LhDjgx4rPOBem8M7JFcO9FO6Z6qn6iLGTjQCX_fxXvYHfEMyI1pIjYhOj55dD8YlItpskKLX4muQpTqpyoYzKU15hlSI6ZGPuOEW8',
    name: 'Rachel Adams',
    rating: 5,
    quote: '"The transparent pricing and detailed treatment plans gave me complete confidence. No surprises on the bill, no unnecessary work recommended — just honest, professional care."',
    treatment: 'Full Smile Makeover',
  },
]

export default function PatientExperiencePage() {
  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />

      {/* Emergency Banner */}
      <div className="bg-[#ba1a1a] text-white py-3 px-8 text-center mt-20">
        <div className="flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
          <span className="font-semibold text-sm md:text-base">Dental Emergency? We're here 24/7 —</span>
          <a href="tel:9272351881" className="font-bold underline">92723 51881</a>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
                <motion.span variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cf8dd] text-[#007261] rounded-full text-sm font-bold">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Trusted by 12,000+ Patients
                </motion.span>
                <motion.h1 variants={staggerItem} className="text-display font-bold text-[#005d90] leading-tight">
                  Where Dentistry Meets Serenity
                </motion.h1>
                <motion.p variants={staggerItem} className="text-lg text-[#4d5b64] max-w-xl">
                  Smize Dental Atelier redefines the dental experience. We have created an environment where clinical excellence and patient wellbeing work in perfect harmony.
                </motion.p>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                  <Link
                    to="/appointment"
                    className="bg-[#0077b6] text-white px-8 py-4 rounded-xl font-bold air-shadow hover:bg-[#005d90] transition-colors"
                  >
                    Book Your Experience
                  </Link>
                  <Link
                    to="/gallery"
                    className="border-2 border-[#0077b6] text-[#0077b6] px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-colors"
                  >
                    View Smile Gallery
                  </Link>
                </motion.div>
                {/* Stats Row */}
                <motion.div variants={staggerItem} className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '4.9', label: 'Average Rating' },
                    { value: '98%', label: 'Would Recommend' },
                    { value: '12k+', label: 'Happy Patients' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-[#005d90]">{stat.value}</div>
                      <div className="text-xs text-[#707881] font-semibold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" animate="visible" className="relative">
                <div className="rounded-[32px] overflow-hidden air-shadow aspect-[4/5]">
                  <img
                    alt="Serene dental clinic"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVPen7VM5QWox59XfmzSSoyfQOM_JQPHxoOyYx63UWMkyuyeFCpV08aQsjxef3qYH1sPdVcz9i6BSAJQ6oblaOk0GijzznPeZqc62dsJF0TzZHK46qyHGLCU56hpY4Myx970dtQpiIm6SMR9IYLcCPvAutbYDkG5Z7Xgid3ZecMusLgZMonayYKzPQoLnmROUHkjrceO0VMXvGak5ZqMNS17h5i9tn_7zayfTarIxqDYQQKqCKunEhan4AwsXyUhEdVSwKK0TdWE8"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 air-shadow border border-sky-50 flex items-center gap-4 max-w-xs">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[#006b5b] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-[#111c2d] text-sm">4.9 out of 5</p>
                    <p className="text-xs text-[#707881]">Based on 2,400+ reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">The Smize Dental Difference</h2>
            <p className="text-[#4d5b64]">What sets us apart from a traditional dental clinic</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((h) => (
              <motion.div key={h.title} variants={staggerItem} whileHover={{ y: -4 }} className="bg-white p-8 rounded-2xl border border-[#d8e3fb] air-shadow">
                <div className="w-14 h-14 bg-[#7cf8dd]/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#006b5b] text-3xl">{h.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-[#111c2d] mb-3">{h.title}</h3>
                <p className="text-[#4d5b64] text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Smile Gallery Preview */}
        <section className="bg-[#f0f3ff] py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Real Patient Transformations</h2>
                <p className="text-[#4d5b64]">The results speak for themselves.</p>
              </div>
              <Link to="/gallery" className="flex items-center gap-2 text-[#005d90] font-bold hover:gap-3 transition-all mt-4 md:mt-0">
                Full Gallery <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNzWwv7uLiedlIL_Z5cxuJWOedpBKBqSz74LuUMO0sGokDdo_NQtj82Kg0usatRM7skYHmiNHcDFMBfxqFCSWxzk-25y40JeF7MpfIt5Sh0duqV0y-IPhU0UBxLDbVn-gPmM7nzNzvCwMqXiTyHMQvI8ttFhqbzi8Y2MWQbSZrV0fJl3GsXQrC6uD054wD1JY_68LTlmcbUOoqxRabloFgcpjBvVshvfpaLlpogEogdaDQnh5bSFwma76VR5mmKHbLGvf_CkpQBQ',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDVmp3GZg1flhAXOvbeAIxTrg98CxJWZQ34LgodBWhHuzHXpIOG3p835_3CsAUm7I5Kr3CFKVWxkiVA0TbkSAZBqfzN3GBRq1zKPu0DJXFt9d-sn04J87qs9SnLMFHRHgONN_qx-bVukqTFrDf0bUeDiU12WWz0IKeQUSJqt8-sxT5N9U6AkBybHKda3vDDeN2KpBpnFhg9U6bEeLS71lDIfXqMlGTyhGx-Y64VhgPXL-qPcPEUIGjPB5HwnXQ2X2kDVE3fIDKrp0k',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPen7VM5QWox59XfmzSSoyfQOM_JQPHxoOyYx63UWMkyuyeFCpV08aQsjxef3qYH1sPdVcz9i6BSAJQ6oblaOk0GijzznPeZqc62dsJF0TzZHK46qyHGLCU56hpY4Myx970dtQpiIm6SMR9IYLcCPvAutbYDkG5Z7Xgid3ZecMusLgZMonayYKzPQoLnmROUHkjrceO0VMXvGak5ZqMNS17h5i9tn_7zayfTarIxqDYQQKqCKunEhan4AwsXyUhEdVSwKK0TdWE8',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAVdGrc7vxry3ryl0T2RKlG8I3gk1DcH6e0UqTNHzdKIISrdmaSmeltgJPJeppaJSZ-1GeqRCSJ3b5xOt3KXo6-MrU4SlGRZOMEqf8bNs9f_Wl8xRW2xFHMthItztgmK8O_RWvPJVBETP2b7N3QkdeRh3iLBX5KC4gmjLa2ncrjeFGJyqih-Qw6ARu5Q6-rmGwvkLAbtsS29i9BNchieBU97VsdRWgvqmpL5gvoOaMoWOrEVJq2Ly1wNHEoVOeOACHAv6WKUeTStFg',
              ].map((src, i) => (
                <motion.div key={i} variants={staggerItem} className="rounded-2xl overflow-hidden aspect-square group cursor-pointer">
                  <img alt={`Patient result ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Voices of Our Patients</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[#006b5b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
              <span className="font-bold text-[#005d90] ml-2">4.9</span>
              <span className="text-[#707881]">(2,400+ reviews)</span>
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerItem} whileHover={{ y: -4 }} className="bg-white rounded-2xl p-8 air-shadow border border-sky-50 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[#006b5b] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <blockquote className="italic text-[#4d5b64] flex-1 mb-6">{t.quote}</blockquote>
                <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
                  <img alt={t.name} className="w-14 h-14 rounded-full object-cover" src={t.img} />
                  <div>
                    <p className="font-bold text-[#111c2d]">{t.name}</p>
                    <p className="text-sm text-[#707881]">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Trust Badges */}
        <section className="max-w-7xl mx-auto px-8 py-12 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            {[
              { icon: 'verified_user', label: 'ISO 9001 Certified' },
              { icon: 'medical_services', label: 'ADA Member' },
              { icon: 'security', label: 'HIPAA Compliant' },
              { icon: 'workspace_premium', label: 'Award Winning 2023' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">{b.icon}</span>
                <span className="font-bold">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
