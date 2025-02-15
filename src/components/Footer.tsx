import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">TRADEMARK®</h3>
          <p>© 2025 by TRADEMARK. Powered by Olal.</p>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a>
          <a href="https://www.facebook.com" className="hover:underline">Facebook</a>
          <a href="https://www.instagram.com" className="hover:underline">Instagram</a>
          <a href="https://www.pinterest.com" className="hover:underline">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;