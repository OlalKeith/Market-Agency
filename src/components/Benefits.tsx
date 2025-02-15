import React from 'react';

const Benefits = () => {
    return (
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-green-600">Work with Us</h2>
        <p className="text-gray-600">We focus on Data, Innovation, and Creativity.</p>
  
        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600">Data Driven</h3>
            <p className="text-gray-600">We make decisions based on data.</p>
          </div>
  
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600">Innovation</h3>
            <p className="text-gray-600">We bring creative solutions to life.</p>
          </div>
  
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600">Creativity</h3>
            <p className="text-gray-600">We value originality in everything we do.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Benefits;
  