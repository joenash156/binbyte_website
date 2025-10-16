import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo/binbyte-logo.jpg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isMoreDropdownOpen) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isMoreDropdownOpen]);

  return (
    <header ref={headerRef} className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg fixed right-0 left-0 top-0 z-50">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile: Hamburger + Logo Group, Desktop: Just Logo */}
          <div className="flex items-center">
            {/* Mobile Hamburger Menu - Hidden on md and above */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:bg-blue-800 py-2 px-2 cursor-pointer rounded-lg focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              {/* <i className={`${isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"} text-2xl`}></i> */}
              <div className="flex flex-col space-y-1.5">
                <div className={`${isMobileMenuOpen ? "rotate-45 translate-y-2 " : ""} transition-all ease-in-out duration-300 w-7 h-1 rounded-lg bg-gray-100`}></div>
                <div className={`${isMobileMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"} transition-all ease-in-out duration-300 w-7 h-1 rounded-lg bg-gray-100`}></div>
                <div className={`${isMobileMenuOpen ? "-rotate-45 -translate-y-2 " : ""} transition-all ease-in-out duration-300 w-7 h-1 rounded-lg bg-gray-100`}></div>
              </div>
            </button>

            {/* Logo and Company Name */}
            <a
              href="/"
              className="flex items-center space-x-3 p-2 rounded-lg"
            >
              <img
                src={Logo}
                alt="BinByte Technologies"
                className="h-10 w-10 rounded-lg object-cover shadow-md"
              />
              <span className="text-white font-bold text-lg md:text-xl">
                BinByte Technologies
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:text-sm md:flex items-center space-x-2">
            <a
              href="/"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <i className="fas fa-home"></i>
              <span>HOME</span>
            </a>
            <a
              href="/about-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <i className="fas fa-info-circle"></i>
              <span>ABOUT US</span>
            </a>
            <a
              href="/contact-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <i className="fas fa-envelope"></i>
              <span>CONTACT US</span>
            </a>

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleMoreDropdown}
                className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
              >
                <i className="fas fa-plus"></i>
                <span>MORE</span>
                <i className={`fas fa-chevron-down transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${isMoreDropdownOpen
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                <div className="py-2">
                  <a
                    href="/learners"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    <i className="fas fa-graduation-cap text-blue-500"></i>
                    <span className="font-medium">LEARNERS</span>
                  </a>
                  <a
                    href="/projects"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    <i className="fas fa-project-diagram text-blue-500"></i>
                    <span className="font-medium">PROJECTS</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "max-h-96 opacity-100 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-blue-800">
            {/* Main Navigation Links */}
            <a
              href="/"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-home w-5"></i>
              <span>HOME</span>
            </a>
            <a
              href="/about-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-info-circle w-5"></i>
              <span>ABOUT US</span>
            </a>
            <a
              href="/contact-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-envelope w-5"></i>
              <span>CONTACT US</span>
            </a>

            {/* Separator */}
            <div className="border-t border-blue-700 my-2"></div>
            <div className="px-4 py-2">
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">More Links</span>
            </div>

            {/* Additional Links */}
            <a
              href="/learners"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-graduation-cap w-5"></i>
              <span>LEARNERS</span>
            </a>
            <a
              href="/projects"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-project-diagram w-5"></i>
              <span>PROJECTS</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;