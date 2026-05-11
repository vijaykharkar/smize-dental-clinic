import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem } from '../utils/animations'
import { blogs } from '../data/blogs'

const vp = { once: true, margin: '-60px' }

function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-2xl font-bold text-[#005d90] mt-10 mb-4">{block.text}</h2>
    case 'subheading':
      return <h3 className="text-lg font-bold text-[#111c2d] mt-6 mb-2">{block.text}</h3>
    case 'paragraph':
      return <p className="text-[#4d5b64] leading-relaxed mb-4">{block.text}</p>
    case 'list':
      return (
        <ul className="space-y-2.5 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[#4d5b64]">
              <span className="material-symbols-outlined text-[#006b5b] text-base mt-1 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div className="bg-[#f0f9ff] border-l-4 border-[#0077b6] rounded-r-xl p-5 my-6">
          <p className="text-[#005d90] font-medium leading-relaxed">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)
  const currentIndex = blogs.findIndex((b) => b.slug === slug)
  const related = blogs.filter((b) => b.slug !== slug && b.category === blog?.category).slice(0, 3)
  const relatedFill = related.length < 3
    ? [...related, ...blogs.filter((b) => b.slug !== slug && !related.find((r) => r.slug === b.slug)).slice(0, 3 - related.length)]
    : related

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!blog) {
    return (
      <PageTransition>
        <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased min-h-screen">
          <Navbar />
          <main className="pt-40 pb-24 text-center">
            <h1 className="text-3xl font-bold text-[#005d90] mb-4">Blog Post Not Found</h1>
            <p className="text-[#4d5b64] mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog" className="bg-[#0077b6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#005d90] transition-colors">
              View All Articles
            </Link>
          </main>
          <Footer />
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
    <div className="bg-[#f9f9ff] text-[#111c2d] font-manrope antialiased">
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <section className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <Link to="/" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
            <Link to="/blog" className="text-sm text-[#707881] hover:text-[#005d90] transition-colors">Blog</Link>
            <span className="material-symbols-outlined text-sm text-[#707881]">chevron_right</span>
            <span className="text-sm font-semibold text-[#005d90] line-clamp-1">{blog.category}</span>
          </motion.div>
        </section>

        {/* Article Header */}
        <section className="max-w-4xl mx-auto px-6 sm:px-8 mb-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
              <span className="bg-[#e7eeff] text-[#005d90] px-3 py-1 rounded-full text-xs font-bold">{blog.category}</span>
              <span className="text-xs text-[#707881]">{blog.readTime}</span>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-3xl md:text-4xl font-bold text-[#111c2d] leading-tight mb-6">
              {blog.title}
            </motion.h1>
            <motion.div variants={staggerItem} className="flex items-center gap-4 pb-6 border-b border-[#d8e3fb]">
              <div className="w-12 h-12 bg-[#0077b6] rounded-full flex items-center justify-center text-white font-bold text-lg">
                SK
              </div>
              <div>
                <p className="font-bold text-[#111c2d]">{blog.author}</p>
                <p className="text-sm text-[#707881]">{blog.authorRole} | Smize Dental Atelier, Tathawade, Pune</p>
              </div>
              <span className="ml-auto text-sm text-[#707881] hidden sm:flex items-center gap-1">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                {blog.date}
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section className="max-w-5xl mx-auto px-6 sm:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="prose-custom"
            >
              {blog.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}

              {/* CTA at end of article */}
              <div className="mt-12 bg-[#0077b6] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Book Your Appointment</h3>
                  <p className="text-white/80 mb-5 text-sm">
                    Smize Dental Atelier | Tathawade, Pune | Dr. Shubham Kharat, BDS MDS
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/appointment"
                      className="bg-white text-[#005d90] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e7eeff] transition-colors"
                    >
                      Book Now
                    </Link>
                    <a
                      href="https://wa.me/919272351881"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation between blogs */}
              <div className="flex justify-between items-center mt-10 pt-8 border-t border-[#d8e3fb]">
                {currentIndex > 0 ? (
                  <Link
                    to={`/blog/${blogs[currentIndex - 1].slug}`}
                    className="flex items-center gap-2 text-[#005d90] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Previous Article
                  </Link>
                ) : <div />}
                {currentIndex < blogs.length - 1 ? (
                  <Link
                    to={`/blog/${blogs[currentIndex + 1].slug}`}
                    className="flex items-center gap-2 text-[#005d90] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Next Article
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                ) : <div />}
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              <div className="bg-white rounded-2xl border border-[#d8e3fb] p-5 air-shadow sticky top-36">
                <h4 className="font-bold text-[#111c2d] mb-4">About the Author</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-[#0077b6] rounded-full flex items-center justify-center text-white font-bold text-xl">SK</div>
                  <div>
                    <p className="font-bold text-sm text-[#111c2d]">Dr. Shubham Kharat</p>
                    <p className="text-xs text-[#707881]">BDS, MDS (BHU)</p>
                  </div>
                </div>
                <p className="text-sm text-[#4d5b64] mb-4 leading-relaxed">
                  MDS-qualified endodontist and conservative dentist at Smize Dental Atelier, Tathawade, Pune. Specialises in root canal treatment, cosmetic dentistry, and smile makeovers.
                </p>
                <Link
                  to="/doctor/shubham-kharat"
                  className="text-[#005d90] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View Profile <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>

                <div className="mt-6 pt-6 border-t border-[#d8e3fb]">
                  <h4 className="font-bold text-[#111c2d] mb-3">Need Treatment?</h4>
                  <Link
                    to="/appointment"
                    className="block w-full bg-[#0077b6] text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-[#005d90] transition-colors mb-2"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+919272351881"
                    className="block w-full bg-[#f1f5f9] text-[#005d90] text-center py-3 rounded-xl font-semibold text-sm hover:bg-[#e2e8f0] transition-colors"
                  >
                    Call: 92723 51881
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.h2 variants={staggerItem} className="text-2xl font-bold text-[#005d90] mb-8">
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFill.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl overflow-hidden border border-sky-50 air-shadow group"
                >
                  <Link to={`/blog/${post.slug}`} className="flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold text-[#005d90] bg-[#e7eeff] px-2.5 py-1 rounded-full">{post.category}</span>
                      <h3 className="font-bold text-[#111c2d] mt-3 mb-2 group-hover:text-[#005d90] transition-colors line-clamp-2 text-sm">{post.title}</h3>
                      <p className="text-[#707881] text-xs">{post.readTime} · {post.date}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  )
}
