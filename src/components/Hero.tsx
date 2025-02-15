import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/frontlogo.avif')" }}
    >
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          We Specialize in Strategy, Design & Marketing
        </h1>
      </div>
    </section>
  );
};

export default Hero;
