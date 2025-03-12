import React from "react";
import { Megaphone, FileText, BarChart, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white mx-auto container px-4">
      {/* Background Image - With Reduced Width */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full min-h-screen bg-center sm:bg-top opacity-90 transition-all duration-500 z-0 w-full md:w-5/6 lg:w-11/12"
        style={{
          backgroundImage: "url('/images/frontlogo.jpg')",
          backgroundSize: "cover", // Changed from default 'cover' to 'contain'
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-8 max-w-screen-lg">
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          // style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Elevate Your Business, <br /> Unleash Your Brand's Potential
        </h1>
      </div>

      {/* Category Bar */}
      <div
        className="absolute transform -translate-x-1/2 left-1/2 mb-12 w-11/12 md:w-10/12 bg-purple-600 text-white p-4 z-10"
        style={{ bottom: "-4rem" }}
      >
        <div
          className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-6 text-center"
          // style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <div className="flex items-center space-x-3 text-lg md:text-xl flex-1 min-w-[140px] justify-center">
            <Megaphone className="w-6 h-6 md:w-7 md:h-7" />
            <span>Branding</span>
          </div>
          <div className="flex items-center space-x-3 text-lg md:text-xl flex-1 min-w-[140px] justify-center">
            <FileText className="w-6 h-6 md:w-7 md:h-7" />
            <span>Content</span>
          </div>
          <div className="flex items-center space-x-3 text-lg md:text-xl flex-1 min-w-[140px] justify-center">
            <BarChart className="w-6 h-6 md:w-7 md:h-7" />
            <span>Strategy</span>
          </div>
          <div className="flex items-center space-x-3 text-lg md:text-xl flex-1 min-w-[140px] justify-center">
            <Eye className="w-6 h-6 md:w-7 md:h-7" />
            <span>Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;