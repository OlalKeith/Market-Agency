import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [activeSection, setActiveSection] = useState('terms'); // 'terms' or 'privacy'
  const navigate = useNavigate();

  const handleTermsClick = (section, e) => {
    // Check if user is holding Ctrl/Cmd or middle-clicking for new tab
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      // Let the browser handle opening in new tab
      return;
    }
    
    e.preventDefault();
    setActiveSection(section);
    setShowTermsModal(true);
  };

  const handleDirectNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
          {/* Trademark Section */}
          <div>
            <img
              src="/ATLM_ALL_LOGOS-07.svg"
              alt="ATL Marketing Logo"
              className="h-auto w-4/5 max-w-[180px] md:max-w-[240px] lg:max-w-[280px]"
            />
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@abovethelinemarketing.com"
                  className="hover:underline"
                >
                  info@abovethelinemarketing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Terms Section - UPDATED */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms-of-service"
                  onClick={(e) => handleTermsClick('terms', e)}
                  className="hover:underline text-left block"
                  title="Click to view in modal, Ctrl+Click for new page"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleTermsClick('privacy', e)}
                  className="hover:underline text-left block"
                  title="Ctrl+Click for new page"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Socials Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Address */}
            <div>
              <h3 className="font-bold text-lg mb-4">Address</h3>
              <p>Nairobi, Kenya</p>
            </div>
            {/* Socials */}
            <div>
              <h3 className="font-bold text-lg mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/company/above-the-line-marketing"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/atl.marketing.ke?igsh=MW9mM3pkOHZjOWRhNQ=="
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@atl.marketing.ke?_t=ZM-8ucu0IpGYTv&_r=1"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-purple-400 text-center text-sm">
          Copyright © 2025 Above The Line Marketing.
        </div>
      </footer>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] mx-auto flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveSection('terms')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'terms'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => setActiveSection('privacy')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'privacy'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Privacy Policy
                </button>
              </div>
              <div className="flex items-center space-x-2">
                {/* Open in new page button */}
                <button
                  onClick={() => {
                    const path = activeSection === 'terms' ? '/terms-of-service' : '/privacy-policy';
                    window.open(path, '_blank');
                  }}
                  className="text-purple-500 hover:text-purple-700 text-sm font-medium px-2 py-1 rounded hover:bg-purple-50"
                  title="Open in new page"
                >
                  ↗
                </button>
                <button
                  className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl flex-shrink-0 p-1"
                  onClick={() => setShowTermsModal(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {activeSection === 'terms' ? (
                <div className="prose max-w-none">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
                  
                  <div className="space-y-6 text-gray-700">
                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Acceptance of Terms</h2>
                      <p>By accessing and using Above The Line Marketing's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Services</h2>
                      <p>Above The Line Marketing provides digital marketing, technology solutions, e-commerce optimization, and virtual assistance services. We reserve the right to modify, suspend, or discontinue any service at any time.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Payment Terms</h2>
                      <p>Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated. Late payments may result in service suspension.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Client Responsibilities</h2>
                      <p>Clients must provide accurate information, timely feedback, and necessary access to accounts/platforms required for service delivery. Clients are responsible for maintaining confidentiality of their account credentials.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Intellectual Property</h2>
                      <p>All strategies, methodologies, and proprietary processes remain the intellectual property of Above The Line Marketing. Client-specific deliverables become client property upon full payment.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Limitation of Liability</h2>
                      <p>Above The Line Marketing's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Termination</h2>
                      <p>Either party may terminate services with 30 days written notice. Immediate termination may occur for breach of terms or non-payment.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Governing Law</h2>
                      <p>These terms are governed by the laws of Kenya. Any disputes will be resolved through arbitration in Nairobi, Kenya.</p>
                    </section>

                    <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
                  </div>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
                  
                  <div className="space-y-6 text-gray-700">
                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Information We Collect</h2>
                      <p>We collect information you provide directly (contact details, business information), automatically (website analytics, cookies), and from third parties (social media platforms, advertising partners).</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">2. How We Use Your Information</h2>
                      <p>We use collected information to provide services, communicate with clients, improve our offerings, comply with legal obligations, and deliver targeted marketing campaigns.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Information Sharing</h2>
                      <p>We do not sell personal information. We may share information with service providers, business partners (with consent), for legal compliance, or in case of business transfers.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Data Security</h2>
                      <p>We implement industry-standard security measures including encryption, secure servers, access controls, and regular security audits to protect your information.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Your Rights</h2>
                      <p>You have the right to access, update, delete your personal information, opt-out of marketing communications, and request data portability. Contact us to exercise these rights.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Cookies and Tracking</h2>
                      <p>We use cookies for website functionality, analytics, and marketing. You can control cookie preferences through your browser settings.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Third-Party Services</h2>
                      <p>Our website may contain links to third-party services. We are not responsible for their privacy practices. Please review their privacy policies.</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Contact Information</h2>
                      <p>For privacy-related questions or to exercise your rights, contact us at: <br/>
                      Email: info@abovethelinemarketing.com<br/>
                      Address: Nairobi, Kenya</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Changes to This Policy</h2>
                      <p>We may update this privacy policy periodically. Significant changes will be communicated via email or website notification.</p>
                    </section>

                    <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
              <button
                onClick={() => {
                  const path = activeSection === 'terms' ? '/terms-of-service' : '/privacy-policy';
                  handleDirectNavigation(path);
                  setShowTermsModal(false);
                }}
                className="text-purple-500 hover:text-purple-700 font-medium text-sm"
              >
                View Full Page
              </button>
              <button
                className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors font-medium"
                onClick={() => setShowTermsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;