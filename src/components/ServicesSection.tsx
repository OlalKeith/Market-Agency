import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const services = [
    {
      title: "Digital Marketing Mastery",
      icon: "📈",
      description: "Boost your brand with expert SEO, social media, and ad strategies.",
      details: {
        price: "From $300/month",
        solve: "SEO struggles, social media engagement, ineffective ads, and email marketing.",
        includes: [
          "SEO optimization (on-page & technical)",
          "Social media strategy & content creation",
          "Paid ad management (Google, Facebook, Instagram)",
          "Email marketing campaigns & automation",
          "Monthly performance reports",
        ],
        bestFor: "Businesses looking to grow brand awareness & conversions.",
      },
    },
    {
      title: "Smart Tech Solutions",
      icon: "🤖",
      description: "Seamless tech solutions for website, automation, and AI integration.",
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
      description: "Unlock the power of data to drive smarter business decisions.",
      details: {
        price: "From $350/month",
        solve: "Unclear business metrics, customer insights, and performance tracking.",
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
      description: "Expert guidance on international shipping, compliance, and logistics.",
      details: {
        price: "From $100/session",
        solve: "Compliance challenges, cost inefficiencies, tariff complexities, documentation struggles, shipping and clearance delays, and strategic gaps in international shipping.",
        includes: [
          "Simplified customs compliance – Guidance on documentation & import/export regulations.",
          "Cost-saving strategies – Advice on duty fees, tariffs, and optimal shipping methods.",
          "Courier selection & logistics optimization – Helping you choose the best carrier for your shipments.",
          "Educational resources – Digital guides & webinars like ‘How to Import to Kenya’ or ‘How to Ship Internationally.’",
        ],
        bestFor: "Importers, exporters, e-commerce businesses, and entrepreneurs expanding globally.",
      },
    },
  ];
  

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState<null | typeof services[number]>(null);

  return (
    <div className="py-10 bg-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="overflow-x-auto flex space-x-6 px-4 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-72 bg-white shadow-lg rounded-lg p-6 text-center flex flex-col"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
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
      </div>

      {/* Modal */}
      {selectedService && (
        <Dialog open={true} onClose={() => setSelectedService(null)} className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-20">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-gray-700">{selectedService.details.price}</p>
            <p className="text-gray-600 italic my-2">{selectedService.details.solve}</p>
            <ul className="list-disc pl-5 text-left text-gray-700">
              {selectedService.details.includes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">
              <strong>Best for:</strong> {selectedService.details.bestFor}
            </p>
            <button
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ServicesSection;

