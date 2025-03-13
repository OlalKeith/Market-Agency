import React from "react";

const Benefits = () => {
  return (
    <section className="py-12 text-center max-w-screen-lg mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-purple-700">Why Work with Us</h2>
      <p className="text-gray-700 font-semibold mt-2">Expert Professionals</p>

      {/* Benefits Section */}
      <div className="mt-8 flex flex-col md:flex-row items-stretch text-center">
        {/* Data Driven */}
        <div className="w-full md:w-1/3 p-6 flex flex-col">
          <h3 className="text-xl font-semibold">Data Driven</h3>
          <p className="text-gray-600 mt-2 flex-grow">
            At Above The Line Marketing, we bring together a team of experts to 
            deliver exceptional results using advanced AI-driven solutions.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex h-auto border-l border-purple-500"></div>

        {/* Innovative Approach */}
        <div className="w-full md:w-1/3 p-6 flex flex-col">
          <h3 className="text-xl font-semibold">Innovative Approach</h3>
          <p className="text-gray-600 mt-2 flex-grow">
            Our innovative approach ensures that we stay ahead of the curve, 
            offering you the latest solutions tailored to your specific needs.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex h-auto border-l border-purple-500"></div>

        {/* Creative Solutions */}
        <div className="w-full md:w-1/3 p-6 flex flex-col">
          <h3 className="text-xl font-semibold">Creative Solutions</h3>
          <p className="text-gray-600 mt-2 flex-grow">
            Creativity is at the heart of everything we do. Our team is dedicated 
            to providing creative solutions that resonate with your audience and 
            drive real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
