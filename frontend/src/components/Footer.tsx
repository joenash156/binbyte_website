import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/binbyte-logo.jpg";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#04011a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="BinByte Technologies"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">BinByte Technologies</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering individuals and organizations through cutting-edge programming education and innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link to="/about-us" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Services
              </Link>
              <Link to="/contact-us" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/training" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Programming Training
              </Link>
              <Link to="/web-development" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Web Development
              </Link>
              <Link to="/mobile-apps" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Mobile Applications
              </Link>
              <Link to="/consulting" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Tech Consulting
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-blue-200 text-sm">
              Subscribe to our newsletter for the latest updates and tech insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-blue-900 border border-blue-800 rounded-l-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-600 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-200 focus:outline-none"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-blue-200">
                <i className="fas fa-envelope w-4"></i>
                <span>info@binbyte.tech</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-200">
                <i className="fas fa-phone w-4"></i>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-300 text-sm">
            © 2025 BinByte Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-blue-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-300 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-blue-300 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
