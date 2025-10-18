import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg1 from "../../assets/hero-images/homepage-hero-img1.jpg";
import HeroImg2 from "../../assets/hero-images/homepage-hero-img2.jpg";
import HeroImg3 from "../../assets/hero-images/homepage-hero-img3.jpg";
import HeroImg4 from "../../assets/hero-images/homepage-hero-img4.jpg";


function HomepageHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: HeroImg1,
      title: "Transform Your Future with Programming Skills",
      subtitle: "Master programming skills that solve real-world problems and launch your tech career"
    },
    {
      image: HeroImg2,
      title: "Build Tomorrow's Solutions Today",
      subtitle: "From innovative software development to cutting-edge digital solutions for modern businesses"
    },
    {
      image: HeroImg3,
      title: "Your Journey to Tech Excellence",
      subtitle: "Join thousands of developers who've transformed their careers with our comprehensive training programs"
    },
    {
      image: HeroImg4,
      title: "Empowering Developers, Enabling Innovation",
      subtitle: "We equip you with the skills and experience to create impactful software solutions that drive change"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-700/50 to-gray-400/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-10">
            {slides[currentSlide].subtitle}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/about-us" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <i className="fas fa-rocket"></i>
              <span>Learn more</span>
            </Link>

            <Link to="/projects" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <i className="fas fa-play-circle"></i>
              <span>View Our Projects</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Scroll Down Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 text-white hover:text-gray-300 focus:outline-none transition-all duration-300 animate-bounce z-20"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center space-y-2">
          <i className="fas fa-chevron-down text-2xl"></i>
          <span className="text-sm font-medium">Scroll</span>
        </div>
      </button>
    </section>
  );
}

export default HomepageHeroSection;