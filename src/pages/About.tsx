import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection  from "../components/AboutSection.tsx";
import TeamSection  from "../components/TeamSection.tsx";
import ContactSection  from "../components/ContactSection.tsx";

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
    <div>
      <AboutSection />
      <div className="mt-12">
        <TeamSection />
      </div>
      <ContactSection />
    </div>
  );
};

export default About;


