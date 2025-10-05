import MissionImg from "../../assets/other-images/our-mission-img.png";

function Mission() {
  return (
    <section className="py-16 lg:py-24 md:px-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Order 1 on all devices */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl rounded-tr-none -z-10"></div>
              <div className="transform -rotate-3 hover:-rotate-1 transition-transform duration-500">
                <img
                  src={MissionImg}
                  alt="Our Mission"
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl rounded-tr-none shadow-2xl border-4 border-white"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 rounded-full opacity-40 -z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-purple-300 rounded-full opacity-30 -z-20"></div>
            </div>
          </div>

          {/* Text Content - Order 2 on all devices */}
          <div className="order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our
                <span className="text-blue-600 block">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize access to quality programming education and empower individuals from all backgrounds
              to become skilled software developers who can solve real-world problems through technology.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-lightbulb text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Learning</h3>
                  <p className="text-gray-600">We create engaging, hands-on learning experiences that make complex programming concepts accessible to everyone.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-globe text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600">We strive to create solutions that address global challenges and make a positive impact on communities worldwide.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-handshake text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusive Excellence</h3>
                  <p className="text-gray-600">We foster an inclusive environment where diversity drives innovation and everyone can thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
