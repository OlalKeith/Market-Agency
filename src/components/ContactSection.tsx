import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    business: '',
    challenge: '',
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it and show an alert
    console.log('Form submitted:', formData);
    alert('Thanks for your interest! We\'ll be in touch soon to schedule your free strategy session.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      business: '',
      challenge: '',
      service: ''
    });
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-10 p-5 border border-purple-500"
    >
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-4">Let's chat about your business challenges and see how we can help!</p>
        
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              className="border p-2 rounded w-full"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              className="border p-2 rounded w-full"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="border p-2 rounded w-full"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mt-4">
            <input
              type="text"
              name="business"
              placeholder="What type of business do you have? *"
              className="border p-2 rounded w-full"
              value={formData.business}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mt-4">
            <textarea
              name="challenge"
              placeholder="What's your biggest challenge right now? *"
              className="border p-2 rounded w-full"
              rows="3"
              value={formData.challenge}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="mt-4">
            <select
              name="service"
              className="border p-2 rounded w-full text-gray-700"
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="">Which area interests you most? *</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="tech-solutions">Tech Solutions</option>
              <option value="ecommerce">E-commerce</option>
              <option value="virtual-assistance">Virtual Assistance</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          
          <button
            onClick={handleSubmit}
            className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600 mt-6 w-full md:w-auto font-semibold"
          >
            Book Your Free Strategy Session
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-3">
          * Required fields. We'll contact you within 24 hours to schedule your free 30-minute strategy session.
        </p>
      </div>
      
      <div className="w-full md:w-1/2 p-5">
        <img
          src="/images/aboutlogo.jpg"
          alt="Team meeting"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactSection;