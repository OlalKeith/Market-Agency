import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
    </div>
  );
};

export default PrivacyPolicy;