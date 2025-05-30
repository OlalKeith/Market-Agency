import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

type Service = {
  title: string;
  icon: string;
  description: string;
  calendlyUrl: string;
  details: {
    price: string;
    solve: string;
    includes: string[];
    bestFor: string;
  };
};

const services: Service[] = [
  {
    title: "Digital Marketing Mastery",
    icon: "📈",
    description: "Boost your brand with expert SEO, social media, and ad strategies.",
    calendlyUrl: "https://calendly.com/abovethelinemarketing-info/30min",
    details: {
      price: "From $300/month",
      solve: "SEO struggles, low social media engagement, ineffective ads, email marketing challenges, and lack of authentic brand content.",
      includes: [
        "SEO Optimization: On-page & technical SEO to boost search rankings.",
        "Social Media Strategy & Content Creation: Tailored content for platforms like Facebook, Instagram, and TikTok (other platforms available at an added cost).",
        "User-Generated Content (UGC) Management: Design campaigns, curate audience content, and handle rights management for authentic brand storytelling.",
        "Paid Ad Management: Google, Facebook, and Instagram ad campaigns (ad budget not included).",
        "Email Marketing Campaigns & Automation: Personalized email sequences to nurture leads and drive conversions.",
        "Monthly Performance Reports: Clear, actionable insights to refine your marketing strategy.",
      ],
      bestFor: "Businesses looking to grow brand awareness, build community trust, and increase conversions.",
    },
  },
  {
    title: "Smart Tech Solutions",
    icon: "🤖",
    description: "Seamless tech solutions for website, automation, and AI integration.",
    calendlyUrl: "https://calendly.com/abovethelinemarketing-info/30min",
    details: {
      price: "From $500/project",
      solve: "Website issues, automation challenges, AI integration.",
      includes: [
        "Website development & redesign",
        "Custom automation workflows (chatbots, email triggers)",
        "AI-powered customer support setup",
        "CRM & business tool integration",
      ],
      bestFor: "Businesses needing seamless tech solutions.",
    },
  },
  {
    title: "E-Commerce Success Kit",
    icon: "🛒",
    description: "Optimize your online store for higher conversions and smoother logistics.",
    calendlyUrl: "https://calendly.com/abovethelinemarketing-info/30min",
    details: {
      price: "From $400/month",
      solve: "Online store setup, payment issues, logistics optimization.",
      includes: [
        "Online store creation (Shopify, WooCommerce, custom)",
        "Payment gateway & checkout optimization",
        "Order fulfillment & logistics advisory",
        "Conversion rate optimization",
        "Abandoned cart recovery strategies",
      ],
      bestFor: "E-commerce brands & retailers.",
    },
  },
  {
    title: "Virtual Assistance",
    icon: "🖥️",
    description: "Delegate tasks and focus on what matters most.",
    calendlyUrl: "https://calendly.com/abovethelinemarketing-info/30min",
    details: {
      price: "From $250/month",
      solve: "Time-consuming admin tasks, scheduling headaches, business process inefficiencies.",
      includes: [
        "Inbox & calendar management",
        "Data entry & research",
        "Customer support & chat handling",
        "Travel & event planning",
        "E-commerce order processing",
      ],
      bestFor: "Entrepreneurs & busy professionals needing extra hands.",
    },
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Function to handle service details modal
  const handleShowDetails = (service: Service) => {
    setSelectedService(service);
    setShowDetailsModal(true);
  };

  // Function to handle booking modal
  const handleBooking = (service: Service) => {
    setSelectedService(service);
    setShowBookingModal(true);
    setBookingConfirmed(false);
  };

  // Listen for Calendly events via postMessage API
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        console.log('Calendly event:', e.data.event);
        
        // Handle different Calendly events
        if (e.data.event === 'calendly.event_scheduled') {
          console.log('Event scheduled:', e.data.payload);
          setBookingConfirmed(true);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  // Check availability function (can be kept for other uses)
  const checkAvailability = async (serviceType: string) => {
    // This could call your backend or Calendly API to check real availability
    // For now, just a placeholder
    console.log(`Checking availability for ${serviceType}`);
    return true;
  };

  return (
    <div id="services-section" className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="overflow-x-auto flex space-x-6 px-4 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-72 bg-white shadow-lg rounded-lg p-6 text-center flex flex-col"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <button
                className="text-purple-500 underline my-2 mb-4"
                onClick={() => handleShowDetails(service)}
              >
                More Details
              </button>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mt-auto"
                onClick={() => handleBooking(service)}
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 italic md:hidden">
          Swipe or use arrows to see more services
        </p>
      </div>

      {/* Service Details Modal */}
      {showDetailsModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold">{selectedService?.title}</h3>
              <p className="text-gray-700">{selectedService?.details?.price}</p>
            </div>

            <div className="overflow-y-auto p-4 flex-grow">
              <p className="text-gray-600 italic mb-4">
                <strong>Solves:</strong> {selectedService.details.solve}
              </p>
              <div className="mb-4">
                <strong>Includes:</strong>
                <ul className="list-disc pl-5 text-left text-gray-700 mt-2">
                  {selectedService.details.includes.map((item, idx) => (
                    <li key={idx} className="mb-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700">
                <strong>Best for:</strong> {selectedService.details.bestFor}
              </p>
            </div>

            <div className="p-4 border-t border-gray-200 flex gap-3">
              <button
                className="flex-1 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                onClick={() => {
                  setShowDetailsModal(false);
                  handleBooking(selectedService);
                }}
              >
                Book Now
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Calendly Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-auto flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Book Your Consultation</h2>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedService.title} - {selectedService.details.price}
                </p>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setShowBookingModal(false)}
              >
                ×
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {!bookingConfirmed ? (
                <div className="h-full">
                  <InlineWidget
                    url={selectedService?.calendlyUrl}
                    styles={{ 
                      height: '600px',
                      width: '100%'
                    }}
                  />
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for booking <strong>{selectedService?.title}</strong>
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    You'll receive a confirmation email with all the details shortly.
                  </p>
                  <button
                    className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600"
                    onClick={() => setShowBookingModal(false)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;