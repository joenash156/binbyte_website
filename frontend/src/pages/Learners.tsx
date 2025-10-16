import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import SedemImg from "../assets/hero-images/homepage-hero-img1.jpg";
import LutherImg from "../assets/hero-images/luther.jpg";
import JoshuaImg from "../assets/hero-images/homepage-hero-img3.jpg";
import SeyramImg from "../assets/hero-images/homepage-hero-img4.jpg";



interface Learner {
  id: number;
  name: string;
  type1: string;
  type2: string;
  image: string | null;
  skills: string[];
  socials: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    email?: string;
  };
}

function Learners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [SedemImg, LutherImg, JoshuaImg, SeyramImg];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const learners: Learner[] = useMemo(() => [
    {
      id: 1,
      name: "Joshua Adjei",
      type1: "backend",
      type2: "",
      image: JoshuaImg || null,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git"],
      socials: {
        linkedin: "https://linkedin.com/in/joshua-adjei",
        github: "https://github.com/joenash156",
        email: "mailto:joenash156@gmail.com"
      }
    },
    {
      id: 2,
      name: "Sedem K",
      type1: "backend",
      type2: "web development",
      image: SedemImg || null,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git"],
      socials: {
        linkedin: "https://linkedin.com/in/sedem-k",
        github: "https://github.com/sedem-k",
        instagram: "https://instagram.com/sedem_k"
      }
    },
    {
      id: 3,
      name: "Seyram Letsu",
      type1: "backend",
      type2: "flutter",
      image: SeyramImg || null,
      skills: ["FastAPI", "Dart", "PostgreSQL", "Git"],
      socials: {
        linkedin: "https://www.linkedin.com/in/seyram-letsu",
        github: "https://github.com/seyramletsu555-web",
        email: "seyramletsu555@gmail.com"
      }
    },
    {
      id: 4,
      name: "David Surname",
      type1: "flutter",
      type2: "backend",
      image: null,
      skills: ["Flutter", "Dart", "Firebase", "Mobile UI"],
      socials: {
        linkedin: "https://linkedin.com/in/david-wilson",
        github: "https://github.com/david-wilson",
        instagram: "https://instagram.com/david_wilson"
      }
    },
    {
      id: 5,
      name: "John Maxwell Luther",
      type1: "backend",
      type2: "web development",
      image: LutherImg || null,
      skills: ["FastAPI", "Machine Learning", "PostgreSQL", "Git"],
      socials: {
        linkedin: "https://www.linkedin.com/in/john-maxwell-luther",
        github: "https://github.com/Maxwell1560",
        email: "mailto:john@example.com"
      }
    },
    {
      id: 6,
      name: "James Emmanuel ",
      type1: "backend",
      type2: "web development",
      image: null,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git"],
      socials: {
        linkedin: "https://linkedin.com/in/james-anderson",
        github: "https://github.com/james-anderson",
        instagram: "https://instagram.com/james_anderson"
      }
    }
  ], []);

  const filteredLearners = useMemo(() => {
    return learners.filter(learner => {
      const matchesSearch = learner.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || learner.type1 === selectedType || learner.type2 === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType, learners]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "frontend":
        return "bg-blue-100 text-blue-800";
      case "backend":
        return "bg-green-100 text-green-800";
      case "web development":
        return "bg-purple-100 text-purple-800";
      case "flutter":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "frontend":
        return "fas fa-palette";
      case "backend":
        return "fas fa-server";
      case "web development":
        return "fas fa-globe";
      case "flutter":
        return "fas fa-mobile-alt";
      default:
        return "fas fa-code";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
      {/* Hero Carousel Section */}
      <section className="relative h-80 md:h-80 overflow-hidden">
        {/* Carousel Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Deep Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 via-blue-600/40 to-blue-500/30"></div>
          </div>
        ))}

        {/* Carousel Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Meet Our Talented
              <span className="block text-blue-200">Learners</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto">
              Discover the amazing individuals mastering technology and building the future
            </p>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-8" data-aos="fade-up">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Community</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our talented learners who are mastering various technologies and building amazing projects.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-blue-50/20 rounded-2xl mb:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search learners by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative md:w-auto">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full md:w-auto appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="web development">Web Development</option>
                <option value="flutter">Flutter</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600 font-medium text-center md:text-left bg-green-400/20 rounded-lg px-4 py-3">
              {filteredLearners.length} Learner{filteredLearners.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Learners Grid */}
        {filteredLearners.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLearners.map((learner, index) => (
              <div
                key={learner.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Profile Image/Icon - Full width */}
                <div className="relative h-80 md:h-60 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {learner.image ? (
                    <img
                      src={learner.image}
                      alt={learner.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <i className="fas fa-user text-white text-5xl"></i>
                  )}
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    {learner.type1 && (
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(learner.type1)}`}>
                      <i className={`${getTypeIcon(learner.type1)} text-xs`}></i>
                      <span className="capitalize">{learner.type1}</span>
                    </span>
                    )}
                    {learner.type2 && (
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(learner.type2)}`}>
                        <i className={`${getTypeIcon(learner.type2)} text-xs`}></i>
                        <span className="capitalize">{learner.type2}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Learner Info */}
                <div className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {learner.name}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {learner.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {learner.skills.length > 3 && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        +{learner.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-3">
                    {learner.socials.linkedin && (
                      <a
                        href={learner.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
                      >
                        <i className="fab fa-linkedin fa-lg"></i>
                      </a>
                    )}
                    {learner.socials.github && (
                      <a
                        href={learner.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                      >
                        <i className="fab fa-github fa-lg"></i>
                      </a>
                    )}
                    {learner.socials.instagram && (
                      <a
                        href={learner.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-600 transition-colors duration-200"
                      >
                        <i className="fab fa-instagram fa-lg"></i>
                      </a>
                    )}
                    {learner.socials.email && (
                      <a
                        href={learner.socials.email}
                        className="text-gray-500 hover:text-red-600 transition-colors duration-200"
                      >
                        <i className="fas fa-envelope fa-lg"></i>
                      </a>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-2">
                    <Link
                      to={`/learner/${learner.id}`}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No learners found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filter options.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Learners;
