import React, { useState } from 'react';

interface WhatsAppSupportProps {
  phoneNumber: string; // Format: country code + number (e.g., "254712345678")
  companyName?: string;
  supportHours?: string;
  welcomeMessage?: string;
}

const WhatsAppSupportWidget: React.FC<WhatsAppSupportProps> = ({
  phoneNumber,
  companyName = "Support Team",
  supportHours = "Mon-Fri 9AM-6PM",
  welcomeMessage = "Hi! How can we help you today?"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  // Predefined messages for your branding/marketing business
  const predefinedMessages = [
    "I'm interested in Digital Marketing Mastery",
    "I need help with Smart Tech Solutions",
    "I want to discuss E-Commerce Success Kit",
    "I need creative design services",
    "and more...",
  ];

  const handleWhatsAppRedirect = (message: string) => {
    const finalMessage = message || customMessage || "Hi! I'm interested in your services.";
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Close widget after redirect
    setIsOpen(false);
    setSelectedMessage("");
    setCustomMessage("");
  };

  const handleQuickMessage = (message: string) => {
    if (message === "Other (custom message)") {
      setSelectedMessage("custom");
    } else {
      handleWhatsAppRedirect(message);
    }
  };

  const isBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    // Business hours: 8 AM - 6 PM, Mon-Fri (East Africa Time)
    return day >= 1 && day <= 5 && hour >= 8 && hour < 18;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 mb-4 overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{companyName}</h3>
                <p className="text-xs opacity-90">
                  {isBusinessHours() ? "🟢 Online" : "🟡 We'll respond soon"} • {supportHours}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {selectedMessage !== "custom" ? (
              <>
                <div className="mb-4">
                  <p className="text-gray-700 text-sm mb-2">{welcomeMessage}</p>
                  <p className="text-xs text-gray-500">Choose a topic to get started:</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  {predefinedMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickMessage(message)}
                      className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-purple-50 hover:border-purple-200 rounded-lg transition-all duration-200 border border-gray-200"
                    >
                      {message}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project:
                  </label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Describe your branding/marketing needs..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedMessage("")}
                    className="flex-1 py-2 px-4 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => handleWhatsAppRedirect(customMessage)}
                    disabled={!customMessage.trim()}
                    className="flex-1 py-2 px-4 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Send
                  </button>
                </div>
              </>
            )}
            
            {selectedMessage !== "custom" && (
              <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-xs text-purple-700">
                  💬 This will open WhatsApp where we can discuss your project in detail.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        aria-label="Open WhatsApp Support"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            {!isBusinessHours() && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </button>
      
      {/* Notification badge */}
      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
          !
        </div>
      )}
    </div>
  );
};

export default WhatsAppSupportWidget;