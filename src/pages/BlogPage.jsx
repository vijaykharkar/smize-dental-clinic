import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations'
import { blogs } from '../data/blogs'

const vp = { once: true, margin: '-60px' }

const allCategories = ['All', ...new Set(blogs.map((b) => b.category))]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = blogs[0]
  const rest = blogs.slice(1)
  const filtered = activeCategory === 'All'
    ? rest
    : rest.filter((b) => b.category === activeCategory)

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem} className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
              <span className="text-sm font-semibold text-[#005d90]">Blog</span>
            </motion.div>
            <motion.div variants={staggerItem} className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#005d90] mb-4 leading-tight">Expert Dental Insights</h1>
              <p className="text-lg text-[#4d5b64]">
                SEO-optimised dental health guides by <strong>Dr. Shubham Kharat, BDS, MDS</strong> — covering endodontics, cosmetic dentistry, restorative care, and preventive health.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 mt-6">
              <span className="text-xs font-bold text-[#707881] uppercase tracking-widest">Specialties:</span>
              {['Endodontics', 'Cosmetic Dentistry', 'Restorative Dentistry', 'General Dentistry'].map((s) => (
                <span key={s} className="bg-[#e7eeff] text-[#005d90] px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Article */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 sm:px-8 mb-16"
        >
          <Link to={`/blog/${featured.slug}`} className="block">
            <div className="bg-white rounded-2xl overflow-hidden air-shadow border border-sky-50 grid grid-cols-1 lg:grid-cols-2 group">
              <div className="h-72 lg:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={featured.image}
                  alt={featured.title}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#7cf8dd]/30 text-[#006b5b] px-3 py-1 rounded-full text-sm font-bold">Latest Article</span>
                  <span className="bg-[#e7eeff] text-[#005d90] px-3 py-1 rounded-full text-sm font-semibold">{featured.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111c2d] leading-snug group-hover:text-[#005d90] transition-colors">{featured.title}</h2>
                <p className="text-[#4d5b64] line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[#707881]">
                  <span className="font-semibold text-[#111c2d]">{featured.author}</span>
                  <span>·</span>
                  <span>{featured.authorRole}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#707881]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span>{featured.date}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span>{featured.readTime}</span>
                </div>
                <span className="self-start flex items-center gap-2 text-[#005d90] font-bold group-hover:gap-3 transition-all">
                  Read Full Article <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        </motion.section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0077b6] text-white shadow-lg shadow-[#0077b6]/25'
                    : 'bg-white text-[#4d5b64] border border-[#d8e3fb] hover:border-[#0077b6]/40 hover:text-[#005d90]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((post) => (
              <motion.div
                key={post.slug}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden border border-sky-50 air-shadow hover:shadow-xl hover:shadow-[#0077b6]/8 transition-all duration-300 flex flex-col group"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col flex-1">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#005d90] px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-[#111c2d] mb-2 leading-snug group-hover:text-[#005d90] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-[#4d5b64] text-sm line-clamp-2 flex-1 mb-4">{post.excerpt}</p>
                    <div className="text-xs text-[#707881] mb-3">
                      By <span className="font-semibold text-[#111c2d]">{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-[#707881]">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span>{post.date}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
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
        <section className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} className="bg-[#0077b6] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3">Stay in the Know</h2>
              <p className="text-[#cde5ff] mb-8">Get monthly dental tips, clinic news, and exclusive offers delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
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
