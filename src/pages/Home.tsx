import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead.tsx";
import Hero from "../components/Hero.tsx";
import Benefits from "../components/Benefits.tsx";
import Promotional from "../components/Promotional.tsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <>
      <SEOHead
      title="About Us - Above The Line Marketing | Leading Brand Agency in Nairobi"
        description="Discover Above The Line Marketing's story, our expert team, and innovative approach to brand development. We help Kenyan businesses create powerful brand identities that drive growth and success."
        keywords="above the line marketing, about us, brand agency team nairobi, marketing consultants kenya, brand strategy experts, creative agency story"
        canonicalUrl="/"
      />

      <motion.div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Hero />
        </motion.div>

        {/* Promotional Section */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is in view
          variants={fadeInUp}
        >
          <Promotional />
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Benefits />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
