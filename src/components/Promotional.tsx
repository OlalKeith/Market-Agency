import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Promotional = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/about") {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about", { state: { scrollToServices: true } });
    }
    // setIsMenuOpen(false);
  };

  return (
    <section className="border border-purple-500 p-6  md:p-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div
        className="w-full md:w-1/2 p-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <h2 className="text-4xl font-semibold text-purple-700">Let’s Talk!</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Your business deserves smart, seamless, and impactful digital
          solutions. Whether you're looking to streamline operations, boost your
          online presence, generate product prototypes, review your
          international shipping strategy, or automate workflows, we’ve got the
          expertise to make it happen. No fluff, no long waits—just real
          solutions, tailored for you.
        </p>
        <button
          onClick={handleServicesClick}
          className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600"
        >
          Discover Solutions
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full h-auto border border-purple-500 shadow-lg"
          src="/images/letstalklogo.jpg"
          alt="Meeting"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Promotional;
