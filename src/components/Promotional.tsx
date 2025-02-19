import React from "react";

const Promotional = () => {
  return (
    <section className="border border-purple-500 p-6  md:p-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-4xl font-semibold text-purple-700">Let’s Meet!</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. 
          It’s easy. Just click “Edit Text” or double click me to add 
          your own content and make changes to the font.
        </p>
        <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600">
          Book Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src="/images/test.avif" 
          alt="Meeting" 
          className="w-full h-auto border border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Promotional;


  