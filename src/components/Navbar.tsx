import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/about") {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about", { state: { scrollToContact: true } });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/about") {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about", { state: { scrollToServices: true } });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="text-black p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image - Replace text with image */}
        {/* <Link to="/" className="inline-block border-b-4 border-purple-500 pb-0 align-middle">
          <img
            src="/atlm-logo.png"
            alt="ATL Marketing Logo"
            className="h-auto w-4/5 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] -mb-1"
          />
        </Link> */}
        <Link to="/">
          <img
            src="/atlm-logo.png"
            alt="ATL Marketing Logo"
            className="h-auto w-4/5 max-w-[150px] md:max-w-[200px] lg:max-w-[240px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex space-x-6 items-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <li>
            <Link
              to="/"
              className={`hover:text-purple-300 transition-colors duration-200 ${
                location.pathname === "/" ? "text-purple-600 font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-purple-300 transition-colors duration-200 ${
                location.pathname === "/about"
                  ? "text-purple-600 font-bold"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="/contact"
              onClick={handleContactClick}
              className="hover:text-purple-300 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
          <li className="-mt-1">
            <button
              onClick={handleServicesClick}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 w-full md:w-auto"
            >
              Book Consultation!
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-purple-50 rounded-lg transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <ul
              className="flex flex-col py-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 hover:bg-purple-50 ${
                    location.pathname === "/" ? "text-purple-600 font-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 hover:bg-purple-50 ${
                    location.pathname === "/about"
                      ? "text-purple-600 font-bold"
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={handleContactClick}
                  className="block px-4 py-2 hover:bg-purple-50"
                >
                  Contact
                </a>
              </li>
              <li className="px-4 py-2">
                <button
                  onClick={handleServicesClick}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 w-full"
                >
                  Book Consultation!
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
