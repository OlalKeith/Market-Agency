import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Works from "./pages/Works.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import WhatsAppSupportWidget from "./components/WhatsAppSupportWidget.tsx"; // Add this import

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => setIsPageLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isPageLoading ? (
      
        <motion.div
          className="flex items-center justify-center min-h-screen bg-gray-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 2000); // Simulate 2s loading
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {initialLoading ? (
          // 🔄 Initial App Load Spinner
          <motion.div
            className="flex items-center justify-center min-h-screen bg-gray-100"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
<div className="w-24 h-24 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
</motion.div>
        ) : (
          <div className="font-sans min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
            
           {/* WhatsApp Support Widget - Add this */}
      <WhatsAppSupportWidget 
        phoneNumber="254723629102" // Replace with your Kenyan WhatsApp number
        companyName="Your Brand Agency"
        supportHours="Mon-Fri 9AM-5PM EAT"
        welcomeMessage="Hi! Let's discuss how we can elevate your brand. How can we help?"
      />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;