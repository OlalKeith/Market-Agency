import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
    </div>
  );
};

export default TermsOfService;