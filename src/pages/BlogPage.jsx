import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations'

const vp = { once: true, margin: '-60px' }

const posts = [
  {
    category: 'Oral Health',
    title: 'The Science Behind a Perfect Smile: Understanding Enamel Erosion',
    excerpt: 'Discover what causes enamel erosion, how to prevent it, and the latest restorative approaches that can reverse the damage and protect your teeth for a lifetime.',
    date: 'November 12, 2024',
    readTime: '5 min read',
    featured: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArKl4pPqOhGIBfLt6PqHEEFyK-wQILBV5_GKiEkOt-XSPFzHy5YkBm3gXIZLmJq5iUoFLGzlluoWp5q_5o_RHaX7u7FhGLzVAZSXyWZhHlWkxqxOGr9y90y5JsJvVgHhbMjpKY8MqOtT_HJRWIfxZ_v1_sFBq9p8OxkRBd8jflUqEDWxCxb-E1cHSwGBHpA9l5PzFDcRG7s_Ts_a62aGpbIFsz6kcBDN4xVWf3CxzS3HXqUJmxJRLZ3MiAJisFIi8kfVrLYKs',
  },
  {
    category: 'Technology',
    title: 'How 3D Dental Imaging Is Revolutionizing Treatment Planning',
    excerpt: 'CBCT scanning has changed the way we diagnose and treat complex cases. Learn how this technology allows for precise implant placement and safer surgical outcomes.',
    date: 'November 5, 2024',
    readTime: '4 min read',
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGjuQafRxxe-O9xb1di-c3c59g-q2HxsLOce2FloIIxx6u0hHc5XETUqWTMToOw7PVgCItYuhcw8IZIjPxPtBdaUxqdnm0-Am7yMdh_oOfUK0YNOtuuJHg6GxaRHwfkq2FdEBEHXu3j6LeUTrB-LIuq_teeAPpjUNa1dL2Vc46j5ULsLY-04WJ0uaJgB4Hp8G4ZObgwwBpX8VAgbhUElnAWxCMsWqCDh_z1GcElJjWxtY4UdrHLyHMHgk0nHAkD_v-JmQmtOSn7TA',
  },
  {
    category: 'Preventive Care',
    title: 'Your Complete Guide to Children\'s Dental Health',
    excerpt: 'Starting good habits early is the most powerful investment in your child\'s long-term health. Here\'s what parents need to know from the first tooth to the teenage years.',
    date: 'October 28, 2024',
    readTime: '6 min read',
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtiTrgR76nFlRzd0qgS9B10ZKK814rYX_2KHSQEPilvuWtfyCHa5fSjArkyK0lJkxWPe9wYTZd0zZ8NvRqX9BXEBW-wjfl-dnUkmZ_kp_Dzob30vgB90UmjbGabV2VlAtU-jev9XSaDYWXC2BItePdAhEZgeg0myUlFPrEb627lZRbv7rjgaffW701hwNOwSlkcU1VIKYS49Vs6vwAqZfEADG0BS_zmc_LJZYyImY5UvfN491AaiXgV-AxhbB9zOQYb1oaTvJEg0I',
  },
  {
    category: 'Cosmetic',
    title: 'Porcelain Veneers vs Composite Bonding: Which Is Right for You?',
    excerpt: 'Both options can dramatically transform your smile, but they differ in durability, cost, and reversibility. Our specialists break down which is best for your unique case.',
    date: 'October 20, 2024',
    readTime: '5 min read',
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNzWwv7uLiedlIL_Z5cxuJWOedpBKBqSz74LuUMO0sGokDdo_NQtj82Kg0usatRM7skYHmiNHcDFMBfxqFCSWxzk-25y40JeF7MpfIt5Sh0duqV0y-IPhU0UBxLDbVn-gPmM7nzNzvCwMqXiTyHMQvI8ttFhqbzi8Y2MWQbSZrV0fJl3GsXQrC6uD054wD1JY_68LTlmcbUOoqxRabloFgcpjBvVshvfpaLlpogEogdaDQnh5bSFwma76VR5mmKHbLGvf_CkpQBQ',
  },
  {
    category: 'Oral Health',
    title: 'Understanding Gum Disease: Stages, Risks, and Modern Treatments',
    excerpt: 'Periodontal disease affects nearly half of adults over 30. Learn how to identify the early warning signs and the latest minimally invasive protocols to reverse it.',
    date: 'October 10, 2024',
    readTime: '7 min read',
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPen7VM5QWox59XfmzSSoyfQOM_JQPHxoOyYx63UWMkyuyeFCpV08aQsjxef3qYH1sPdVcz9i6BSAJQ6oblaOk0GijzznPeZqc62dsJF0TzZHK46qyHGLCU56hpY4Myx970dtQpiIm6SMR9IYLcCPvAutbYDkG5Z7Xgid3ZecMusLgZMonayYKzPQoLnmROUHkjrceO0VMXvGak5ZqMNS17h5i9tn_7zayfTarIxqDYQQKqCKunEhan4AwsXyUhEdVSwKK0TdWE8',
  },
  {
    category: 'Technology',
    title: 'The Rise of AI in Dentistry: What Patients Need to Know',
    excerpt: 'Artificial intelligence is now helping dentists detect cavities, plan surgeries, and predict outcomes with unprecedented accuracy. Here\'s how AI improves your care.',
    date: 'September 30, 2024',
    readTime: '4 min read',
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrzzco-SOfm6loCLMGYcjw8PNMPlFnKsfEIF5aDzqLIskOk_MKOaNfrwS4zTyE4OTjjaMLBsJj-mCJ6BfsSKfkObFZYmAMtbHXtSE6qcFLNQ1ngFTGor_dZn1XDkVkvfR8hQ0FX6NiJowHbOcK7cztoAx1eYV4JgNb8G5-5XZ3rP9YHbz9pQ0BavEWhU7-2xAaqvNbQe5HJbUSQD8ZkVPK66FjwA3Wl7Ash2bj8ocpsyVb8gK8LU3foi-u92byZYEEbxt5LFaMjqo',
  },
]

const allCategories = ['All', 'Oral Health', 'Technology', 'Preventive Care', 'Cosmetic']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = posts.find(p => p.featured)
  const filtered = activeCategory === 'All'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => !p.featured && p.category === activeCategory)

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1 variants={staggerItem} className="text-display font-bold text-[#005d90] mb-4">Oral Health Blog</motion.h1>
            <motion.p variants={staggerItem} className="text-lg text-[#4d5b64]">Expert insights, treatment guides, and dental health tips from the Smize Dental clinical team.</motion.p>
          </motion.div>
        </section>

        {/* Featured Article */}
        {featured && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-8 mb-16"
          >
            <div className="bg-white rounded-2xl overflow-hidden air-shadow border border-sky-50 grid grid-cols-1 lg:grid-cols-2">
              <div className="h-72 lg:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={featured.img}
                  alt={featured.title}
                />
              </div>
              <div className="p-10 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#7cf8dd]/30 text-[#006b5b] px-3 py-1 rounded-full text-sm font-bold">Featured Article</span>
                  <span className="bg-[#e7eeff] text-[#005d90] px-3 py-1 rounded-full text-sm font-semibold">{featured.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#111c2d] leading-snug">{featured.title}</h2>
                <p className="text-[#4d5b64]">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#707881]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span>{featured.date}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span>{featured.readTime}</span>
                </div>
                <button className="self-start flex items-center gap-2 text-[#005d90] font-bold hover:gap-3 transition-all">
                  Read Full Article <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-8 mb-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <motion.button
                key={cat}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0077b6] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((post) => (
              <motion.div
                key={post.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden border border-sky-50 air-shadow cursor-pointer flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={post.img}
                    alt={post.title}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="bg-[#e7eeff] text-[#005d90] px-3 py-1 rounded-full text-xs font-bold self-start mb-3">{post.category}</span>
                  <h3 className="font-bold text-lg text-[#111c2d] mb-3 leading-snug">{post.title}</h3>
                  <p className="text-[#4d5b64] text-sm line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-xs text-[#707881]">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span>{post.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <span className="material-symbols-outlined text-5xl block mb-2">article</span>
              No posts in this category yet.
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="max-w-3xl mx-auto px-8">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} className="bg-[#0077b6] rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3">Stay in the Know</h2>
              <p className="text-[#cde5ff] mb-8">Get monthly dental tips, clinic news, and exclusive offers delivered to your inbox.</p>
              <form className="flex gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl text-[#111c2d] outline-none text-sm"
                />
                <button type="submit" className="bg-[#006b5b] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#005144] transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
