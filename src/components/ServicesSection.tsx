import React, { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";

const services = [
  {
    title: "Digital Marketing Mastery",
    icon: "📈",
    description:
      "Boost your brand with expert SEO, social media, and ad strategies.",
    details: {
      price: "From $300/month",
      solve:
        "SEO struggles, low social media engagement, ineffective ads, email marketing challenges, and lack of authentic brand content.",
      includes: [
        "SEO Optimization: On-page & technical SEO to boost search rankings.",
        "Social Media Strategy & Content Creation: Tailored content for platforms like Facebook, Instagram, and TikTok (other platforms available at an added cost).",
        "User-Generated Content (UGC) Management: Design campaigns, curate audience content, and handle rights management for authentic brand storytelling.",
        "Paid Ad Management: Google, Facebook, and Instagram ad campaigns (ad budget not included).",
        "Email Marketing Campaigns & Automation: Personalized email sequences to nurture leads and drive conversions.",
        "Monthly Performance Reports: Clear, actionable insights to refine your marketing strategy.",
      ],
      bestFor:
        "Businesses looking to grow brand awareness, build community trust, and increase conversions.",
    },
  },
  {
    title: "Smart Tech Solutions",
    icon: "🤖",
    description:
      "Seamless tech solutions for website, automation, and AI integration.",
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
    description:
      "Optimize your online store for higher conversions and smoother logistics.",
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
    title: "Data & Analytics Clarity",
    icon: "📊",
    description:
      "Unlock the power of data to drive smarter business decisions.",
    details: {
      price: "From $350/month",
      solve:
        "Unclear business metrics, customer insights, and performance tracking.",
      includes: [
        "Google Analytics setup & insights",
        "Custom dashboard reporting",
        "Customer behavior analysis",
        "Data-driven marketing recommendations",
      ],
      bestFor: "Businesses looking to make smarter decisions with data.",
    },
  },
  {
    title: "Virtual Assistance",
    icon: "🖥️",
    description: "Delegate tasks and focus on what matters most.",
    details: {
      price: "From $250/month",
      solve:
        "Time-consuming admin tasks, scheduling headaches, business process inefficiencies.",
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
  {
    title: "Product Prototypes & Concept Development",
    icon: "🔧",
    description: "Turn ideas into tangible prototypes before mass production.",
    details: {
      price: "From $800/project",
      solve: "Turning ideas into tangible prototypes before mass production.",
      includes: [
        "3D modeling & rendering",
        "Product design consultation",
        "Prototype sourcing & development",
        "Material & cost analysis",
        "Manufacturing recommendations",
      ],
      bestFor: "Startups & businesses developing new products.",
    },
  },
  {
    title: "International Shipping & Customs Advisory",
    icon: "🚢",
    description:
      "Expert guidance on international shipping, compliance, and logistics.",
    details: {
      price: "From $100/session",
      solve:
        "Compliance challenges, cost inefficiencies, tariff complexities, documentation struggles, shipping and clearance delays, and strategic gaps in international shipping.",
      includes: [
        "Simplified customs compliance – Guidance on documentation & import/export regulations.",
        "Cost-saving strategies – Advice on duty fees, tariffs, and optimal shipping methods.",
        "Courier selection & logistics optimization – Helping you choose the best carrier for your shipments.",
        "Educational resources – Digital guides & webinars like 'How to Import to Kenya' or 'How to Ship Internationally.'",
      ],
      bestFor:
        "Importers, exporters, e-commerce businesses, and entrepreneurs expanding globally.",
    },
  },
  {
    title: "Product Photography Package",
    icon: "📷",
    description: "Enhance your brand with professional product photography.",
    details: {
      price: "From $150",
      solve:
        "Poor product presentation, lack of high-quality visuals, inconsistent branding, and low online conversion rates.",
      includes: [
        "High-Quality Product Shots: Crisp, professional images tailored for websites and social media.",
        "Lifestyle Photography: Showcase products in real-life settings to enhance relatability and desirability.",
        "Image Editing & Optimization: Color correction, background removal, and resizing for web and social platforms.",
      ],
      bestFor:
        "E-commerce stores, product-based businesses, online sellers, and service providers showcasing portfolios.",
    },
  },
  {
    title: "Media & Social Media Training",
    icon: "📢",
    description: "Maximize your online visibility and content strategy skills.",
    details: {
      price: "From $100/session",
      solve:
        "Lack of online visibility, inconsistent branding, content strategy confusion, and missed PR opportunities.",
      includes: [
        "Social Media Strategy & Platform Management: Learn how to build effective content calendars, understand algorithms, and automate workflows.",
        "Content Creation & Branding: Learn photography, video basics, and how to create visually cohesive content.",
        "Media Handling & PR Skills: Learn how to prepare for press interviews, handle crisis communication, and craft compelling press releases.",
        "Analytics & Growth Insights: Learn to interpret key metrics and refine your strategy for better results.",
      ],
      bestFor:
        "Business owners, marketing teams, content creators, and personal brands wanting to maximize their digital presence.",
    },
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[number]
  >(null);

  return (
    <div
      id="services-section"
      className="py-10 bg-gray-100"
      // style={{ fontFamily: "'Playfair Display', serif" }}
    >
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
                onClick={() => setSelectedService(service)}
              >
                More
              </button>
              <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mt-auto">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
        {/* Mobile indicator text */}
        <p className="mt-4 text-sm text-gray-500 italic md:hidden">
          Swipe or use arrows to see more services
        </p>
      </div>

      {/* Modal with fixed height and scrollable content */}
      {selectedService && (
        <Dialog
          open={true}
          onClose={() => setSelectedService(null)}
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 p-4 z-50"
        >
          <div className="bg-white rounded-lg w-full max-w-md mx-auto flex flex-col max-h-[90vh]">
            {/* Modal header - fixed */}
            <div className="p-2 border-b border-gray-200">
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              <p className="text-gray-700">{selectedService.details.price}</p>
            </div>
            
            {/* Modal content - scrollable */}
            <div className="overflow-y-auto p-4 flex-grow">
              <p className="text-gray-600 italic mb-2">
                <strong>Solve:</strong> {selectedService.details.solve}
              </p>
              <div className="mb-4">
                <strong>Includes:</strong>
                <ul className="list-disc pl-5 text-left text-gray-700 mt-2">
                  {selectedService.details.includes.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700">
                <strong>Best for:</strong> {selectedService.details.bestFor}
              </p>
            </div>
            
            {/* Modal footer - fixed at bottom */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ServicesSection;