import VisionImg from "../../assets/other-images/our-vision-img.png";

function Vision() {
  return (
    <section className="py-16 lg:py-24 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Order 2 on mobile, 1 on lg */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our
                <span className="text-purple-600 block">Vision</span>
              </h2>
              <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading catalyst in the global digital transformation by creating a world where
              technology serves humanity, and every individual has the opportunity to contribute to
              innovative solutions that shape our future.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-rocket text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Ready Skills</h3>
                  <p className="text-gray-600">Preparing the next generation of developers with cutting-edge technologies and emerging industry trends.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-network-wired text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Connected Ecosystem</h3>
                  <p className="text-gray-600">Building a thriving ecosystem that connects learners, mentors, and industry leaders for collaborative growth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-infinity text-pink-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Limitless Possibilities</h3>
                  <p className="text-gray-600">Empowering individuals to break barriers and achieve their full potential in the ever-evolving tech landscape.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <i className="fas fa-eye"></i>
                <span>See Our Vision in Action</span>
              </button>
            </div>
          </div>

          {/* Image - Order 1 on mobile, 2 on lg */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl rounded-tl-none -z-10"></div>
              <div className="transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <img
                  src={VisionImg}
                  alt="Our Vision"
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl rounded-tl-none shadow-2xl border-4 border-white"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-300 rounded-full opacity-40 -z-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-300 rounded-full opacity-30 -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
