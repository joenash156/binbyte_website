import { Link } from "react-router-dom";
import WhyUsImg from "../../assets/other-images/why-us-img.png";


function WhyUs() {
  return (
    <section className="py-16 md:px-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Order 2 on mobile, 1 on lg */}
          <div className="order-2 lg:order-1 space-y-6" data-aos="fade-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose
                <span className="text-blue-600 block">BinByte Technologies?</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              At BinByte Technologies, we don't just teach programming, we transform lives through technology.
              Our unique approach combines hands-on learning with real-world project experience, ensuring our
              students are industry-ready from day one.
            </p>

            <div className="space-y-4" data-aos="fade-up">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert-Led Training</h3>
                  <p className="text-gray-600">Learn from professionals with real-world experience in cutting-edge technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-project-diagram text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Projects</h3>
                  <p className="text-gray-600">Build a portfolio of market-ready applications that showcase your skills to potential employers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-users text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600">Join a thriving community of developers who support each other's growth and success.</p>
                </div>
              </div>
            </div>

            <div className="pt-4" data-aos="fade-up">
              <Link to="/about-us" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-2/3">
                <i className="fas fa-arrow-right"></i>
                <span>Learn more</span>
              </Link>
            </div>
          </div>

          {/* Image - Order 1 on mobile, 2 on lg */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <img
                  src={WhyUsImg}
                  alt="Why Choose BinByte Technologies"
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl rounded-tl-none shadow-2xl border-4 border-white"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;