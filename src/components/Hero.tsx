import React from "react";
import { Megaphone, FileText, BarChart, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-white mx-auto container px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black bg-opacity-50"
        style={{
          backgroundImage: "url('/images/frontlogo.avif')",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-8 max-w-screen-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
        Welcome to Above the Line Marketing, <br />  Where Digital Innovation Meets Seamless Execution
        </h1>
      </div>

      {/* Category Bar */}
      <div className="absolute transform -translate-x-1/2 left-1/2 mb-12 w-11/12 md:w-10/12 bg-purple-600 text-white p-2 md:p-4" style={{ bottom: '-4rem' }}>
        <div className="flex flex-wrap md:flex-nowrap justify-around items-center gap-3 md:gap-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          <div className="flex items-center space-x-2 text-sm md:text-base whitespace-nowrap">
            <Megaphone className="w-4 h-4 md:w-5 md:h-5" />
            <span>Branding</span>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-base whitespace-nowrap">
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
            <span>Content</span>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-base whitespace-nowrap">
            <BarChart className="w-4 h-4 md:w-5 md:h-5" />
            <span>Strategy</span>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-base whitespace-nowrap">
            <Eye className="w-4 h-4 md:w-5 md:h-5" />
            <span>Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;