import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection.tsx";
import TeamSection from "../components/TeamSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";
import SEOHead from "../components/SEOHead.tsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        document
          .getElementById("contact-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
  <>
      <SEOHead
        title="About Us - Above The Line Marketing | Leading Brand Agency in Nairobi, Kenya"
        description="Discover Above The Line Marketing's story, our expert team, and innovative approach to brand development. We help Kenyan businesses create powerful brand identities that drive growth and success."
        keywords="above the line marketing, about us, brand agency team nairobi, marketing consultants kenya, brand strategy experts, creative agency story"
        canonicalUrl="/about"
      />

      <motion.div className="bg-gray-50">
        {/* About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <AboutSection />
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <ServicesSection />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <ContactSection />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
