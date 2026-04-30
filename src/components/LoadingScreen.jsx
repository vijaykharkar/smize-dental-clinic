import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import smizeLogo from '../assets/smizelogo.jpeg'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8 font-manrope"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <motion.img
              src={smizeLogo}
              alt="Smize Dental Atelier"
              className="w-20 h-20 rounded-full object-cover"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-extrabold text-sky-700 tracking-tight"
            >
              SMIZE DENTAL ATELIER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-sm text-slate-400"
            >
              Enriching a Legacy of Smiles...
            </motion.p>
          </motion.div>

          <div className="w-52 h-1 bg-sky-50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sky-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
