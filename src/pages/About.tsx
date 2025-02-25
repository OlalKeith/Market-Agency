import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";  // Import Framer Motion
import AboutSection from "../components/AboutSection.tsx";
import TeamSection from "../components/TeamSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to ensure the section is loaded
    }
  }, [location]);

  return (
    <motion.div
      className="bg-gray-50"
      initial={{ opacity: 0, y: 20 }}  // Start position (invisible, slightly lower)
      animate={{ opacity: 1, y: 0 }}   // End position (visible, at correct position)
      exit={{ opacity: 0, y: -20 }}    // Exit animation (fade out)
      transition={{ duration: 0.5 }}   // Smooth transition
    >
      <AboutSection />
      <div className="mt-12">
        {/* <TeamSection /> */}
        <ServicesSection/>
      </div>
      <ContactSection />
    </motion.div>
  );
};

export default About;



