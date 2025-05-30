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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.business || !formData.challenge || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const FORM_ID = process.env.REACT_APP_FORMSPREE_ID;
           
      if (!FORM_ID) {
        throw new Error('Form configuration missing');
      }

      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          business: formData.business,
          challenge: formData.challenge,
          service: formData.service,
          subject: `New Strategy Session Request from ${formData.firstName}`
        }),
      });

      if (response.ok) {
        alert('Thanks for your interest! We\'ll be in touch within 24 hours to schedule your free strategy session.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          business: '',
          challenge: '',
          service: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-10 p-5 border border-purple-500"
    >
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-3xl font-semibold text-black mb-4">
          🚀 Ready to Get Started?
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
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              className="border p-2 rounded w-full"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div className="mt-4">
            <select
              name="service"
              className="border p-2 rounded w-full text-gray-700"
              value={formData.service}
              onChange={handleInputChange}
              disabled={isSubmitting}
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
            disabled={isSubmitting}
            className={`${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-purple-500 hover:bg-purple-600'
            } text-white px-6 py-3 rounded mt-6 w-full md:w-auto font-semibold flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Book Your Free Strategy Session'
            )}
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