import AboutUsHeroImg from "../../assets/hero-images/about-us-hero-img.jpg";

function AboutUsHeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${AboutUsHeroImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-500/50 to-blue-400/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Who Are We?
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto">
          BinByte Technologies empowers individuals and organizations through
          cutting-edge programming education and innovative software solutions.
          We bridge the gap between technical skills and real-world problem-solving,
          training aspiring developers to create meaningful impact while delivering
          market-ready projects that drive digital transformation.
        </p>

        {/* Optional Call-to-Action Button */}
        <div className="mt-10">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Our Mission
          </button>
        </div>
      </div>

      {/* Animated Scroll Down Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 text-white hover:text-blue-200 focus:outline-none transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center space-y-2">
          <i className="fas fa-chevron-down text-2xl"></i>
          <span className="text-sm font-medium">Scroll down</span>
        </div>
      </button>
    </section>
  );
}

export default AboutUsHeroSection;