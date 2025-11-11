import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo/binbyte-logo.jpg";
import { Link } from "react-router";

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
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Hamburger + Logo Group, Desktop: Just Logo */}
          <div className="flex items-center flex-1 min-w-0">
            {/* Mobile Hamburger Menu - Hidden on lg and above */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:bg-blue-800 py-2 px-2 cursor-pointer rounded-lg focus:outline-none transition-all duration-200 mr-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1.5">
                <div className={`${isMobileMenuOpen ? "rotate-45 translate-y-2 " : ""} transition-all ease-in-out duration-300 w-6 sm:w-7 h-0.5 sm:h-1 rounded-lg bg-gray-100`}></div>
                <div className={`${isMobileMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"} transition-all ease-in-out duration-300 w-6 sm:w-7 h-0.5 sm:h-1 rounded-lg bg-gray-100`}></div>
                <div className={`${isMobileMenuOpen ? "-rotate-45 -translate-y-2 " : ""} transition-all ease-in-out duration-300 w-6 sm:w-7 h-0.5 sm:h-1 rounded-lg bg-gray-100`}></div>
              </div>
            </button>

            {/* Logo and Company Name */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 p-1 sm:p-2 rounded-lg flex-shrink-0"
            >
              <img
                src={Logo}
                alt="BinByte Technologies"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover shadow-md flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="company-name text-white font-bold text-base md:text-lg lg:text-xl xl:text-2xl leading-tight truncate">
                  BinByte Technologies
                </span>
                <span className="slogan text-orange-200 text-[10px] sm:text-xs md:text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-none">
                  Empowering Individuals and Organizations.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop/Tablet Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-1.5 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm"
            >
              <i className="fas fa-home"></i>
              <span>HOME</span>
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-1.5 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm"
            >
              <i className="fas fa-info-circle"></i>
              <span>ABOUT US</span>
            </Link>
            <Link
              to="/contact-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-1.5 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm"
            >
              <i className="fas fa-envelope"></i>
              <span>CONTACT US</span>
            </Link>

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleMoreDropdown}
                className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-1.5 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm"
              >
                <i className="fas fa-plus"></i>
                <span>MORE</span>
                <i className={`fas fa-chevron-down transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-48 xl:w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${isMoreDropdownOpen
                ? 'opacity-100 visible transform translate-y-0'
                : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                <div className="py-2">
                  <Link
                    to="/learners"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    <i className="fas fa-graduation-cap text-blue-500 w-5"></i>
                    <span className="font-medium text-xs xl:text-sm">LEARNERS</span>
                  </Link>
                  <Link
                    to="/projects"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    <i className="fas fa-project-diagram text-blue-500 w-5"></i>
                    <span className="font-medium text-xs xl:text-sm">PROJECTS</span>
                  </Link>
                  <Link
                    to="/apply-to-learn"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 whitespace-nowrap hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    <i className="fas fa-file-signature text-blue-500 w-5"></i>
                    <span className="font-medium text-xs xl:text-sm">APPLY TO LEARN</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "max-h-[500px] opacity-100 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-blue-800">
            {/* Main Navigation Links */}
            <Link
              to="/"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-home w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">HOME</span>
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-info-circle w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">ABOUT US</span>
            </Link>
            <Link
              to="/contact-us"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-envelope w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">CONTACT US</span>
            </Link>

            {/* Separator */}
            <div className="border-t border-blue-700 my-2"></div>
            <div className="px-4 py-2">
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">More Links</span>
            </div>

            {/* Additional Links */}
            <Link
              to="/learners"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-graduation-cap w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">LEARNERS</span>
            </Link>
            <Link
              to="/projects"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-project-diagram w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">PROJECTS</span>
            </Link>
            <Link
              to="/apply-to-learn"
              className="text-white hover:bg-blue-800 hover:bg-opacity-50 flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-file-signature w-5 flex-shrink-0"></i>
              <span className="text-sm sm:text-base">APPLY TO LEARN</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;