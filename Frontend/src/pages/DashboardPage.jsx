import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'
import { staggerContainer, staggerItem } from '../utils/animations'

const quickActions = [
  { icon: 'calendar_add_on', label: 'Book Appointment', to: '/appointment', color: 'bg-[#0077b6] text-white' },
  { icon: 'receipt_long', label: 'View Records', to: '/dashboard', color: 'bg-[#7cf8dd]/30 text-[#006b5b]' },
  { icon: 'payments', label: 'Pay Invoice', to: '/insurance', color: 'bg-[#cde5ff] text-[#005d90]' },
  { icon: 'message', label: 'Message Us', to: '/contact', color: 'bg-[#f0f3ff] text-[#4d5b64]' },
]

const recentActivity = [
  { icon: 'check_circle', text: 'Dental cleaning completed', date: 'Nov 10, 2024', color: 'text-[#006b5b]' },
  { icon: 'calendar_today', text: 'Follow-up appointment scheduled', date: 'Nov 8, 2024', color: 'text-[#005d90]' },
  { icon: 'receipt_long', text: 'Invoice #4821 paid – $180', date: 'Nov 5, 2024', color: 'text-[#707881]' },
  { icon: 'medical_information', text: 'X-Ray results uploaded', date: 'Nov 1, 2024', color: 'text-[#707881]' },
]

const healthMetrics = [
  { label: 'Plaque Index', value: 'Good', score: 78, icon: 'dentistry', color: '#006b5b' },
  { label: 'Gum Health', value: 'Excellent', score: 92, icon: 'health_and_safety', color: '#0077b6' },
  { label: 'Treatment Progress', value: '60%', score: 60, icon: 'trending_up', color: '#005d90' },
]

export default function DashboardPage() {
  return (
    <PageTransition>
    <div className="bg-[#f0f3ff] text-[#111c2d] font-manrope antialiased min-h-screen">
      <Navbar />
      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-sky-50 min-h-screen pt-8 px-6 space-y-1 fixed top-20 left-0 bottom-0 overflow-y-auto">
          <p className="text-xs font-bold text-[#707881] uppercase tracking-widest px-4 mb-4">Navigation</p>
          {[
            { icon: 'dashboard', label: 'Dashboard', active: true },
            { icon: 'calendar_today', label: 'Appointments', active: false },
            { icon: 'receipt_long', label: 'Records', active: false },
            { icon: 'payments', label: 'Billing', active: false },
            { icon: 'message', label: 'Messages', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                item.active
                  ? 'bg-[#0077b6] text-white'
                  : 'text-[#4d5b64] hover:bg-sky-50'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <div className="mt-auto pb-8 pt-8">
            <div className="bg-[#f0f3ff] rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-4xl text-[#0077b6] mb-2 block">emergency</span>
              <p className="text-sm font-semibold text-[#111c2d] mb-1">Dental Emergency?</p>
              <a href="tel:9272351881" className="text-xs text-[#0077b6] font-bold hover:underline">92723 51881</a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8">
          {/* Welcome Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <motion.div variants={staggerItem}>
              <h1 className="text-2xl font-bold text-[#111c2d]">Good morning, Alex 👋</h1>
              <p className="text-[#4d5b64] mt-1">Here's an overview of your dental health journey.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#7cf8dd] flex items-center justify-center font-bold text-[#007261] text-lg">
                A
              </div>
              <div>
                <p className="font-semibold text-sm text-[#111c2d]">Alex Johnson</p>
                <p className="text-xs text-[#707881]">Patient ID: #2841</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Upcoming Appointment Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-[#0077b6] rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[#cde5ff] text-sm mb-1">NEXT APPOINTMENT</p>
                <h2 className="text-2xl font-bold mb-1">Routine Check-up &amp; Cleaning</h2>
                <div className="flex flex-wrap items-center gap-6 text-sm mt-3">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">calendar_today</span>December 15, 2024</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">schedule</span>10:00 AM – 10:45 AM</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">person</span>Dr. Shubham Kharat</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/appointment" className="bg-white text-[#005d90] px-6 py-3 rounded-xl font-bold hover:bg-[#e7eeff] transition-colors text-sm">
                  Reschedule
                </Link>
                <button className="bg-[#ba1a1a]/80 text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ba1a1a] transition-colors text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {quickActions.map((action) => (
              <motion.div key={action.label} variants={staggerItem} whileHover={{ y: -4 }}>
              <Link
                to={action.to}
                className={`${action.color} p-6 rounded-2xl flex flex-col items-center gap-3 font-semibold text-sm air-shadow transition-all duration-200 text-center block`}
              >
                <span className="material-symbols-outlined text-3xl">{action.icon}</span>
                {action.label}
              </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 air-shadow border border-sky-50"
            >
              <h3 className="font-bold text-[#111c2d] mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-4 pb-4 border-b border-slate-50 last:border-0"
                  >
                    <span className={`material-symbols-outlined text-xl mt-0.5 ${item.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#111c2d] text-sm">{item.text}</p>
                      <p className="text-xs text-[#707881] mt-1">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Health Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 air-shadow border border-sky-50"
            >
              <h3 className="font-bold text-[#111c2d] mb-6">Health Metrics</h3>
              <div className="space-y-6">
                {healthMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl" style={{ color: m.color }}>{m.icon}</span>
                        <span className="font-medium text-[#111c2d]">{m.label}</span>
                      </div>
                      <span className="font-bold text-sm" style={{ color: m.color }}>{m.value}</span>
                    </div>
                    <div className="w-full bg-[#f0f3ff] rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${m.score}%`, backgroundColor: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-[#4d5b64]">Last assessment: <span className="font-semibold text-[#111c2d]">November 10, 2024</span></p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
    </PageTransition>
  )
}
