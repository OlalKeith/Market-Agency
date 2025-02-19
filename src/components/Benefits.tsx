import React from "react";

const Benefits = () => {
  return (
    <section className="py-12 text-center max-w-screen-lg mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-purple-700">Work with Us</h2>
      <p className="text-gray-700 mt-2">
        I'm a title. Click here to add your own text and edit me.
      </p>

      {/* Benefits Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center text-center">
        {/* Data Driven */}
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-xl font-semibold">Data Driven</h3>
          <p className="text-gray-600 mt-2">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-24 border-l border-purple-500"></div>

        {/* Innovation */}
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-xl font-semibold ">Innovation</h3>
          <p className="text-gray-600 mt-2">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-24 border-l border-purple-500"></div>

        {/* Creativity */}
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-xl font-semibold">Creativity</h3>
          <p className="text-gray-600 mt-2">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
