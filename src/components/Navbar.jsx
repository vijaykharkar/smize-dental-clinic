import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import smizeLogo from '../assets/smizenewlogo.png'
import smizeLogo from '../assets/smizelogo.jpeg'


const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'Our Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const extraMobileLinks = [
  { to: '/pricing', label: 'Pricing' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/dashboard', label: 'Patient Dashboard' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30)
  })

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-9 w-full z-50 h-20 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,119,182,0.10)] border-b border-sky-50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="flex justify-between items-center px-8 h-full max-w-7xl mx-auto font-manrope">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="flex items-center gap-2.5 mt-15">
            <img src={smizeLogo} alt="Best Dental Clinic In Tathawade pune" className="h-40 w-40 rounded-full object-cover" />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
              className="relative"
            >
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors py-1 relative ${
                  isActive(link.to) ? 'text-sky-700 font-bold' : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-700 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <Link
            to="/contact"
            className="p-2 text-sky-700 hover:bg-sky-50 rounded-full transition-all hidden md:flex items-center"
            title="Emergency"
          >
            <span className="material-symbols-outlined">emergency</span>
          </Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/appointment"
              className="bg-[#0077b6] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#005d90] transition-all text-sm"
            >
              Book Appointment
            </Link>
          </motion.div>
          <motion.button
            className="md:hidden p-2 text-slate-600 hover:text-sky-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="material-symbols-outlined"
            >
              {mobileOpen ? 'close' : 'menu'}
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-sky-50 overflow-hidden"
          >
            <div className="px-8 py-6 space-y-1">
              {[...navLinks, ...extraMobileLinks].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-3 font-medium transition-colors ${
                      isActive(link.to) ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
