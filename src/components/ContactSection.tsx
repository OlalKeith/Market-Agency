import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact-section" className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-10 p-5 border border-purple-500" style={{ fontFamily: "'Playfair Display', serif" }}>
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-3xl font-semibold text-black mb-4">Ready to Dive In?</h2>
        <p className="text-gray-600">Reach Out!</p>
        <form className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name *" className="border p-2 rounded w-full" required />
            <input type="text" placeholder="Last name *" className="border p-2 rounded w-full" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="email" placeholder="Email *" className="border p-2 rounded w-full" required />
            <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
          </div>
          <textarea placeholder="Message" className="border p-2 rounded w-full mt-4" rows="4"></textarea>
          <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 mt-4">Submit</button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <img src="/images/contactpic.jpg" alt="Team meeting" className="rounded-lg shadow-lg filter blur-sm grayscale" />
      </div>
    </div>
  );
};

export default ContactSection;