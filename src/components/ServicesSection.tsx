import React, { useState, useRef } from "react";

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
  const [selectedService, setSelectedService] = useState<{
    title: string;
    icon: string;
    description: string;
    details: {
      price: string;
      solve: string;
      includes: string[];
      bestFor: string;
    };
  } | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState("GMT+3");
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  
  const timezones = [
    "GMT+3",
    "GMT+2",
    "GMT+1",
    "GMT+0",
    "GMT-1",
    "GMT-2",
    "GMT-3",
    "GMT-4",
    "GMT-5",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarData = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days: (number | null)[] = []; 
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return {
      year,
      month,
      days,
    };
  };

  const calendar = generateCalendarData();

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  // Time slots
  const timeSlots = [
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
  ];

  // Function to handle service details modal
  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowDetailsModal(true);
  };

  // Function to handle booking modal
  const handleBooking = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  // Get month name
  const getMonthName = (date: Date | null) => {
    return date ? date.toLocaleString("default", { month: "long" }) : "Unknown Month";
  };

  // Get day names for the header
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Check if a day is today
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      calendar.month === today.getMonth() &&
      calendar.year === today.getFullYear()
    );
  };

  // Check if a day is in the past
  const isPastDate = (day) => {
    if (!day) return false;
    const today = new Date();
    const currentDate = new Date(calendar.year, calendar.month, day);
    today.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    return currentDate < today;
  };

  // Check if a day is selected
  const isSelectedDay = (day: number | null): boolean => {
    return (
      day !== null &&
      selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === calendar.month &&
      selectedDate?.getFullYear() === calendar.year
    );
  };

  // Function to select next available date
  const handleCheckNextAvailability = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setSelectedDate(tomorrow);
  };

  // Check if selected date is weekend (Saturday = 6, Sunday = 0)
  const isWeekend = (date: Date | null): boolean => {
    if (!date) return false;
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  return (
    <div
      id="services-section"
      className="py-10 bg-gray-100"
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
                onClick={() => handleShowDetails(service)}
              >
                More
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
        {/* Mobile indicator text */}
        <p className="mt-4 text-sm text-gray-500 italic md:hidden">
          Swipe or use arrows to see more services
        </p>
      </div>

      {/* Service Details Modal */}
      {showDetailsModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto flex flex-col max-h-[90vh]">
            {/* Modal header - fixed */}
            <div className="p-2 border-b border-gray-200">
              <h3 className="text-2xl font-bold">{selectedService?.title}</h3>
              <p className="text-gray-700">{selectedService?.details?.price}</p>
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
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
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
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm  bg-opacity-30 p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-6xl mx-auto flex flex-col max-h-[90vh]">
            {/* Back button */}
            <div className="p-4 border-b border-gray-200">
              <button 
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => setShowBookingModal(false)}
              >
                <span className="mr-2">←</span> Back
              </button>
            </div>
            
            {/* Booking header */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold">Schedule your service</h2>
              <p className="text-sm md:text-base text-gray-600">Check out our availability and book the date and time that works for you</p>
            </div>
            
            {/* Booking content - responsive layout */}
            <div className="flex flex-col xl:flex-row flex-1 overflow-hidden">
              {/* Calendar section */}
              <div className="w-full xl:w-1/3 p-4 border-b xl:border-b-0 xl:border-r border-gray-200 overflow-y-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h3 className="text-base md:text-lg font-semibold">Select a Date and Time</h3>
                  <div className="relative">
                    <button
                      className="flex items-center text-xs md:text-sm border border-gray-300 px-2 md:px-3 py-1 rounded hover:bg-gray-50"
                      onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                    >
                      <span>Timezone: {selectedTimezone}</span>
                      <span className="ml-2">▼</span>
                    </button>
                    {showTimezoneDropdown && (
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-[200px] md:min-w-[250px]">
                        {timezones.map((timezone, i) => (
                          <button
                            key={i}
                            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-xs md:text-sm"
                            onClick={() => {
                              setSelectedTimezone(timezone);
                              setShowTimezoneDropdown(false);
                            }}
                          >
                            {timezone}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Month navigation */}
                <div className="flex justify-between items-center mb-4">
                  <button onClick={() => navigateMonth(-1)} className="text-lg md:text-xl hover:text-purple-500">
                    ←
                  </button>
                  <h4 className="text-base md:text-lg font-medium">
                    {getMonthName(currentMonth)} {calendar.year}
                  </h4>
                  <button onClick={() => navigateMonth(1)} className="text-lg md:text-xl hover:text-purple-500">
                    →
                  </button>
                </div>
                
                {/* Calendar */}
                <div className="mb-6">
                  {/* Day header */}
                  <div className="grid grid-cols-7 mb-2">
                    {dayNames.map((day, i) => (
                      <div key={i} className="text-center text-xs md:text-sm font-medium p-1 md:p-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendar.days.map((day, i) => (
                      <div 
                        key={i} 
                        className={`
                          h-8 md:h-10 text-center flex items-center justify-center text-xs md:text-sm
                          ${!day ? "text-gray-300" : isPastDate(day) ? "text-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-gray-100"}
                          ${isToday(day) ? "text-purple-500 font-bold" : ""}
                          ${!!isSelectedDay(day) ? "bg-purple-500 text-white rounded-full" : ""}
                        `}
                        onClick={() => {
                          if (day && !isPastDate(day)) {
                            setSelectedDate(new Date(calendar.year, calendar.month, day));
                          }
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Check Next Availability or Selected date display */}
                {!selectedDate ? (
                  <div className="mb-4">
                    <button
                      className="w-full py-2 md:py-3 bg-purple-600 text-white rounded font-medium hover:bg-purple-700 text-sm md:text-base"
                      onClick={handleCheckNextAvailability}
                    >
                      Check Next Availability
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <h4 className="text-base md:text-lg font-medium">
                      Availability for&nbsp;
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h4>
                    {isWeekend(selectedDate) && (
                      <p className="text-gray-600 mt-2 text-sm md:text-base">No availability</p>
                    )}
                  </div>
                )}
                
                {/* Time slots for mobile/tablet */}
                {selectedDate && !isWeekend(selectedDate) && (
                  <div className="mb-6 xl:hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((time, i) => (
                        <button
                          key={i}
                          className={`
                            border border-gray-300 p-2 text-center rounded text-xs md:text-sm
                            ${selectedTime === time ? "bg-purple-500 text-white border-purple-500" : "hover:bg-gray-50"}
                          `}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Middle section - Time slots for desktop */}
              <div className="w-full xl:w-1/3 p-4 border-b xl:border-b-0 xl:border-r border-gray-200 overflow-y-auto">
                {selectedDate && !isWeekend(selectedDate) && (
                  <div className="hidden xl:block">
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time, i) => (
                        <button
                          key={i}
                          className={`
                            border border-gray-300 p-2 text-center rounded text-sm
                            ${selectedTime === time ? "bg-purple-500 text-white border-purple-500" : "hover:bg-gray-50"}
                          `}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right side - Service details */}
              <div className="w-full xl:w-1/3 p-4 flex flex-col">
                <div className="bg-gray-50 p-3 md:p-4 rounded flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base md:text-lg font-semibold">Service Details</h3>
                    <button className="text-lg">▲</button>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm md:text-base font-medium mb-2">
                      {selectedService?.title}
                    </h4>
                    {selectedDate && selectedTime && (
                      <p className="text-gray-700 text-xs md:text-sm mb-2">
                        {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
                      </p>
                    )}
                    <p className="text-gray-700 text-xs md:text-sm">San Francisco</p>
                    <p className="text-gray-700 text-xs md:text-sm">Staff Member #1</p>
                    <p className="text-gray-700 text-xs md:text-sm">1 hr</p>
                  </div>
                  
                  {/* Next button - disabled when no date/time selected or weekend */}
                  <button 
                    className={`w-full mt-4 md:mt-6 py-2 md:py-3 rounded font-medium text-sm md:text-base ${
                      selectedDate && selectedTime && !isWeekend(selectedDate)
                        ? "bg-purple-600 text-white hover:bg-purple-700" 
                        : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                    disabled={!selectedDate || !selectedTime || isWeekend(selectedDate)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;