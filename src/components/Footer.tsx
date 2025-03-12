import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8" >
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Trademark Section */}
        <div>
          <img
            src="/ATLM_ALL_LOGOS-07.svg"
            alt="ATL Marketing Logo"
            className="h-auto w-4/5 max-w-[150px] md:max-w-[200px] lg:max-w-[240px]"
          />
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
          </div>
          {/* Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/above-the-line-marketing" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/atl.marketing.ke?igsh=MW9mM3pkOHZjOWRhNQ==" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@atl.marketing.ke?_t=ZM-8ucu0IpGYTv&_r=1" className="hover:underline">TikTok</a></li>
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
