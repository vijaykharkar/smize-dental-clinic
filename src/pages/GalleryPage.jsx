import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const categories = ['All Photos', 'Cosmetic Dentistry', 'Orthodontics', 'Clinic Interior', 'Surgical Care']

const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNzWwv7uLiedlIL_Z5cxuJWOedpBKBqSz74LuUMO0sGokDdo_NQtj82Kg0usatRM7skYHmiNHcDFMBfxqFCSWxzk-25y40JeF7MpfIt5Sh0duqV0y-IPhU0UBxLDbVn-gPmM7nzNzvCwMqXiTyHMQvI8ttFhqbzi8Y2MWQbSZrV0fJl3GsXQrC6uD054wD1JY_68LTlmcbUOoqxRabloFgcpjBvVshvfpaLlpogEogdaDQnh5bSFwma76VR5mmKHbLGvf_CkpQBQ',
    tag: 'Cosmetic Dentistry', title: 'Full Smile Reconstruction', span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPen7VM5QWox59XfmzSSoyfQOM_JQPHxoOyYx63UWMkyuyeFCpV08aQsjxef3qYH1sPdVcz9i6BSAJQ6oblaOk0GijzznPeZqc62dsJF0TzZHK46qyHGLCU56hpY4Myx970dtQpiIm6SMR9IYLcCPvAutbYDkG5Z7Xgid3ZecMusLgZMonayYKzPQoLnmROUHkjrceO0VMXvGak5ZqMNS17h5i9tn_7zayfTarIxqDYQQKqCKunEhan4AwsXyUhEdVSwKK0TdWE8',
    tag: 'Clinic Interior', title: 'Patient Serenity Lounge', span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVmp3GZg1flhAXOvbeAIxTrg98CxJWZQ34LgodBWhHuzHXpIOG3p835_3CsAUm7I5Kr3CFKVWxkiVA0TbkSAZBqfzN3GBRq1zKPu0DJXFt9d-sn04J87qs9SnLMFHRHgONN_qx-bVukqTFrDf0bUeDiU12WWz0IKeQUSJqt8-sxT5N9U6AkBybHKda3vDDeN2KpBpnFhg9U6bEeLS71lDIfXqMlGTyhGx-Y64VhgPXL-qPcPEUIGjPB5HwnXQ2X2kDVE3fIDKrp0k',
    tag: 'Orthodontics', title: 'Clear Aligners', span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo018Ya2hXXg4l2TzGaibDDYbn3SNPCYD2PRiqVywd7Ru4Y92ZDv4r2OhyljXoWVxxCFNKdpPnNFXLqzlTEX5BGLicFCEtsWauxUf1ZTFO2VakW85czeuYD7Tv_f_41tFlenMRj6VxOp-hHaUXgroIN5jQlXIgOutPDFsE_JU873VpHdD6kRpCT58mpBfOhorHD-ILgXshenFrmTuSUPBcpuff4DnLa7hDpxq1XVFB9fF-S3j19mIsUqmSsq-AfQEI3ycjIk_Zh_4',
    tag: 'Surgical Care', title: 'Advanced Operatory', span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbpafg6HJ-nn7GvFP8vWShbhEtnNE2kTRyPSTfSYUOzFXvl6A4BoL37k7wHx2GBvlrEmqOjn5ZgFJK4TNzjoW0kt7-jyEgL-lhSNpXOc75XsJ25Ys_y6wGjMQ4ScIQyvsQODQdvqGHTz43ATKKNQzxOVducL7jAAcb9x6-TTeafoN8FiK8SATGH19qc1GQNqwkpjtOU0XQImmUwbiEVNLa23Bst7hzlmhr4KZhzj18fi-uXGG7PDpAkxvG3SH8lbtsPfr5o-pnaEE',
    tag: 'Cosmetic Dentistry', title: 'Bridge Restoration – Before', span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT90lNrRRWG-mup-7xq-cACUa-hEIEy7hIjbVclMoyUCTmbklM1hAWOPX5J6nZkq_y10hlfK6VM7bqbtkCJfVVUoQ2gUVyZJOqL2dSvurz1ONAwcEYUHSp3xkWlUNWxAP9VAguDt2as8kdNtafqGBFyWqCRuxgFSELgMwvU3Fg1NWR-DlTxQSg3KRd0wd9LVDVKJQN7l9tqhwN4NgkZYOMPSP5bCtdFn0_hPpPGdgwrXE235oF4-QRHVtuxmKroVpn5ufKf5KRi0k',
    tag: 'Cosmetic Dentistry', title: 'Bleaching Results – After', span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeq6zfhSBzzSV0DKp5ZRnQG9ldTD6AwQRZtnkn0D5WnVwS87VCJ4z91TxdByaXusKr95et_eTieEt3V_ouKSZUOTWkPD_PGFUYwfIajHhfaHJc1voou1dqgSKZ7mLtNdUL1xR66lEXuZ9Rz-xuZHtn7N-tpNcfpyzYUfUypJK9co3wMEbC8c-A4108Quj9GQ9y37oVnmBTTJneG6XLnABrqtZGL8DfeelrtwlxhfGN-O4wj9QiBZrnSFXecXsxzxE1uP4R_ArV3Fk',
    tag: 'Surgical Care', title: 'Sterile Surgery Room', span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVdGrc7vxry3ryl0T2RKlG8I3gk1DcH6e0UqTNHzdKIISrdmaSmeltgJPJeppaJSZ-1GeqRCSJ3b5xOt3KXo6-MrU4SlGRZOMEqf8bNs9f_Wl8xRW2xFHMthItztgmK8O_RWvPJVBETP2b7N3QkdeRh3iLBX5KC4gmjLa2ncrjeFGJyqih-Qw6ARu5Q6-rmGwvkLAbtsS29i9BNchieBU97VsdRWgvqmpL5gvoOaMoWOrEVJq2Ly1wNHEoVOeOACHAv6WKUeTStFg',
    tag: 'Cosmetic Dentistry', title: 'Happy Patient', span: 'md:col-span-1 md:row-span-1',
  },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Photos')

  const filtered = activeFilter === 'All Photos'
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeFilter)

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Excellence</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="text-display font-bold text-[#111c2d] mb-6">Patient Smile Gallery</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-lg text-[#4d5b64] max-w-2xl mx-auto">
            Explore our portfolio of successful treatments and our state-of-the-art clinical environment designed for your serenity.
          </motion.p>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-sky-700 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-sky-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
            <AnimatePresence mode="popLayout">
            {(activeFilter === 'All Photos' ? galleryImages : filtered).map((img, index) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative group overflow-hidden rounded-xl air-shadow bg-white ${
                  activeFilter === 'All Photos' ? img.span : ''
                }`}
              >
                <img
                  alt={img.title}
                  className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-105"
                  src={img.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#7cf8dd] text-sm font-semibold mb-1">{img.tag}</span>
                  <h3 className="text-white font-semibold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-8 mt-24">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} className="bg-white rounded-2xl air-shadow p-12 text-center border border-sky-50 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7cf8dd]/30 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[#006b5b] text-3xl">add_task</span>
            </div>
            <h2 className="text-headline-lg font-bold text-[#111c2d] mb-4">Ready to start your transformation?</h2>
            <p className="text-[#4d5b64] mb-8 max-w-lg">
              Join thousands of happy patients who trust Smize Dental Atelier for their dental health. Your journey to a perfect smile begins with a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="bg-[#0077b6] text-white px-10 py-4 rounded-full font-bold hover:bg-[#005d90] transition-all shadow-lg"
              >
                Book a Consultation
              </Link>
              <Link
                to="/pricing"
                className="bg-white text-sky-700 border-2 border-sky-700 px-10 py-4 rounded-full font-bold hover:bg-sky-50 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
