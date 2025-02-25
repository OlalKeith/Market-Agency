import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8" style={{ fontFamily: "'Playfair Display', serif" }}>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Trademark Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">ABOVE THE LINE MARKETING</h3>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:sadakahindi@gmail.com" className="hover:underline">
              info@abovethelinemarketing.com
              </a>
            </li>
           
          </ul>
        </div>

        {/* Address & Socials Section - Stacking on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Address</h3>
            <p>Nairobi, Kenya</p>
            <p>Syokimau</p>
            <p>0000</p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li><a href="https://pinterest.com" className="hover:underline">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-purple-400 text-center text-sm">
        Copyright © 2025 Above The Line Marketing.
      </div>
    </footer>
  );
};

export default Footer;
