import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/about") {
      // If already on About page, just scroll down
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to About page and scroll down after load
      navigate("/about", { state: { scrollToContact: true } });
    }
  };

  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ABOVE THE LINE MARKETING</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          {/* <li><Link to="/" className="hover:text-gray-300">Works</Link></li> */}
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><a href="/contact" onClick={handleContactClick} className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



