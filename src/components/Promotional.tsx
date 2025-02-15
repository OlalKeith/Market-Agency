import React from 'react';

const Promotional = () => {
    return (
      <section className="py-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-green-600">Let’s Meet!</h2>
          <p className="text-gray-600 mt-2">
            We are ready to discuss your next project. Click below to book a meeting.
          </p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md">Book Now</button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/images/test.avif" alt="Meeting" className="rounded-lg shadow-md" />

        </div>
      </section>
    );
  };
  
  export default Promotional;
  