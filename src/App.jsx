import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import TopBar from './components/TopBar'
import WhatsAppButton from './components/WhatsAppButton'
import EnhancedHomePage from './pages/EnhancedHomePage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import AppointmentPage from './pages/AppointmentPage'
import ContactPage from './pages/ContactPage'
import DoctorProfilePage from './pages/DoctorProfilePage'
import FAQPage from './pages/FAQPage'
import GalleryPage from './pages/GalleryPage'
import InsurancePage from './pages/InsurancePage'
import BlogPage from './pages/BlogPage'
import DashboardPage from './pages/DashboardPage'
import PricingPage from './pages/PricingPage'
import PatientExperiencePage from './pages/PatientExperiencePage'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<EnhancedHomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctor/shubham-kharat" element={<DoctorProfilePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/patient-experience" element={<PatientExperiencePage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
      <LoadingScreen />
      <BrowserRouter>
        <TopBar />
        <AppRoutes />
        <WhatsAppButton />
      </BrowserRouter>
    </>
  )
}

export default App
