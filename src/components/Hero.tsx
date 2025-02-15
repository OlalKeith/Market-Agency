import React from "react";
import { Megaphone, FileText, BarChart, Eye } from "lucide-react";

const Hero = () => {
  return (
<section className="relative flex items-center justify-center h-screen text-white">
  {/* Overlay with background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black bg-opacity-50"
    style={{ backgroundImage: "url('/images/frontlogo.avif')" }}
  ></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center p-8">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      We Specialize in Strategy, <br /> Design & Marketing
    </h1>
  </div>

  {/* Green Category Bar */}
  <div className="absolute bottom-0 left-0 right-0 bg-green-700 text-white flex justify-around p-4 text-sm md:text-lg">
    <div className="flex items-center space-x-2">
    <Megaphone className="w-5 h-5" />
      <span>Branding</span>
    </div>
    <div className="flex items-center space-x-2">
    <FileText className="w-5 h-5" />
      <span>Content</span>
    </div>
    <div className="flex items-center space-x-2">
    <BarChart className="w-5 h-5" />
      <span>Strategy</span>
    </div>
    <div className="flex items-center space-x-2">
    <Eye className="w-5 h-5" />
      <span>Creative</span>
    </div>
  </div>
</section>

  );
};

export default Hero;


