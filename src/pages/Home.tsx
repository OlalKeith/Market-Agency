import React from "react";
import { motion } from "framer-motion";  // Import Framer Motion
import Hero from "../components/Hero.tsx";
import Benefits from "../components/Benefits.tsx";
import Promotional from "../components/Promotional.tsx";

const Home = () => {
  return (
    <motion.div
      className="bg-gray-50 min-h-screen"  // Added background color & full height
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="mt-12">
        <Promotional />
      </div>
      <Benefits />
    </motion.div>
  );
};

export default Home;

