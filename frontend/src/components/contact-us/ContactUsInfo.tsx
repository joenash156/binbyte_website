function ContactUsInfo() {
  return (
    <div className="order-1 space-y-8 md:px-16">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Let's Connect
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ready to start your tech journey or discuss a project? We're here to help you every step of the way.
        </p>
      </div>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <i className="fas fa-phone text-blue-600 text-xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
            <a
              href="tel:+15551234567"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              +1 (555) 123-4567
            </a>
            <p className="text-gray-500 text-sm mt-1">Mon - Fri, 9AM - 6PM EST</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <i className="fas fa-envelope text-green-600 text-xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
            <a
              href="mailto:info@binbyte.tech"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              info@binbyte.tech
            </a>
            <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <i className="fas fa-map-marker-alt text-purple-600 text-xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
            <p className="text-gray-600">
              123 Tech Street<br />
              Innovation District<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <i className="fas fa-clock text-orange-600 text-xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUsInfo;
