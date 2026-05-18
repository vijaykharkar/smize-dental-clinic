import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import smizeLogo from '../assets/smizenewlogo.png'
import smizeLogo from '../assets/smizelogo.jpeg'
import { services } from '../data/services'

const navLinks = [
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/about', label: 'Our Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const extraMobileLinks = [
  { to: '/insurance', label: 'Insurance' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()
  const dropdownTimeout = useRef(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30)
  })

  const isActive = (path) => location.pathname === path || (path === '/services' && location.pathname.startsWith('/services'))

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setServicesOpen(true)
  }
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-[30px] sm:top-[34px] md:top-9 w-full z-50 h-16 md:h-20 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,119,182,0.10)] border-b border-sky-50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 h-full max-w-7xl mx-auto font-manrope">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="flex items-center gap-2 mt-6">
            <img src={smizeLogo} alt="Best Dental Clinic In Tathawade pune" className="h-25 w-25 sm:h-25 sm:w-25 md:h-25 md:w-25 rounded-full object-cover shadow-sm" />
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
              onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
            >
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors py-1 relative flex items-center gap-1 ${
                  isActive(link.to) ? 'text-sky-700 font-bold' : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="material-symbols-outlined text-base"
                  >
                    expand_more
                  </motion.span>
                )}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-700 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-2xl shadow-2xl shadow-[#0077b6]/10 border border-[#d8e3fb] p-5 z-[100]"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="grid grid-cols-2 gap-1.5">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f0f9ff] transition-colors group/item"
                          >
                            <div className="w-9 h-9 bg-[#7cf8dd]/25 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#7cf8dd]/50 transition-colors">
                              <span className="material-symbols-outlined text-[#006b5b] text-lg">{s.icon}</span>
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-[#111c2d] group-hover/item:text-[#005d90] transition-colors truncate">{s.shortTitle}</p>
                              <p className="text-xs text-[#707881] truncate">{s.category}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#d8e3fb]">
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-center gap-2 py-2.5 text-[#005d90] font-bold text-sm hover:bg-[#f0f9ff] rounded-xl transition-colors"
                        >
                          View All Services <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
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
              className="bg-[#0077b6] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold hover:bg-[#005d90] transition-all text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book Now</span>
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
            className="md:hidden bg-white border-t border-sky-50 overflow-hidden max-h-[75vh] overflow-y-auto shadow-xl"
          >
            <div className="px-5 sm:px-8 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={`flex items-center justify-between w-full py-3 font-medium transition-colors ${
                          isActive(link.to) ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                        }`}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="material-symbols-outlined text-base"
                        >
                          expand_more
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-0.5">
                              {services.map((s) => (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="flex items-center gap-2.5 py-2.5 text-sm text-slate-500 hover:text-sky-700 transition-colors"
                                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                                >
                                  <span className="material-symbols-outlined text-base text-[#006b5b]">{s.icon}</span>
                                  {s.shortTitle}
                                </Link>
                              ))}
                              <Link
                                to="/services"
                                className="flex items-center gap-1.5 py-2.5 text-sm font-bold text-[#005d90]"
                                onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                              >
                                All Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      className={`block py-3 font-medium transition-colors ${
                        isActive(link.to) ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="pt-3 mt-3 border-t border-sky-50">
                {extraMobileLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + i) * 0.04, duration: 0.3 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
