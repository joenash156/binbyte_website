import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import DonectImg from "../assets/other-images/donect-img.jpg";
import LimbsImg from "../assets/other-images/3d_limbworks-img.jpg";
import SONImg from "../assets/other-images/son-logo.png";

interface Project {
  id: number;
  name: string;
  category: string;
  status: string;
  image: string | null;
  description: string;
  websiteLink?: string;
  technologies: string[];
}

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const heroImages = [DonectImg, LimbsImg, SONImg];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const projects: Project[] = [
    {
      id: 1,
      name: "Donect",
      category: "website",
      status: "ongoing",
      image: DonectImg || null,
      description: "All platform to connect donors to communities in need.",
      websiteLink: "https://donect.is-great.org/",
      technologies: ["React", "FastAPI", "TailwindCSS", "PostgreSQL"]
    },
    {
      id: 2,
      name: "Scholars Opportunity Nexus API",
      category: "api",
      status: "completed",
      image: null,
      description: "API providing real-time opportunity data to students.",
      technologies: ["FastAPI", "PostgreSQL"]
    },
    {
      id: 3,
      name: "3D Limbworks",
      category: "website",
      status: "completed",
      image: LimbsImg || null,
      description: "Website for a company that designs custom 3D printed prosthetic limbs solutions",
      websiteLink: "https://3dlimbworks.netlify.app/",
      technologies: ["TypeScript", "TailwindCSS"]
    },
    {
      id: 4,
      name: "Scholars Opportunity Nexus",
      category: "website",
      status: "ongoing",
      image: SONImg || null,
      description: "Web application for managing and discovering scholarship opportunities for students",
      websiteLink: "",
      technologies: ["TypeScript", "FastAPI", "TailwindCSS", "PostgreSQL"]
    },
    {
      id: 5,
      name: "Donect API",
      category: "api",
      status: "ongoing",
      image: null,
      description: "API for providing real-time data for donors who want to contribute, and communities in need.",
      technologies: ["FastAPI", "PostgreSQL"]
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedStatus]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "website":
        return "bg-blue-100 text-blue-800";
      case "api":
        return "bg-green-100 text-green-800";
      case "mobile app":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "website":
        return "fas fa-globe";
      case "api":
        return "fas fa-server";
      case "mobile app":
        return "fas fa-mobile-alt";
      default:
        return "fas fa-code";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "completed" ? "bg-green-500" : "bg-orange-500";
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
      {/* Hero Carousel Section */}
      <section className="relative h-92 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/50 to-blue-700/30"></div>
          </div>
        ))}

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-bounce">
              Our Amazing
              <span className="block text-blue-600">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto">
              Explore the innovative solutions we've built for businesses and communities
            </p>
          </div>
        </div>

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
            Browse Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the diverse range of projects we've delivered, from websites to mobile apps and APIs.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search projects by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-auto appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="website">Website</option>
                <option value="api">API</option>
                <option value="mobile app">Mobile App</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full lg:w-auto appearance-none  border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600 font-medium text-center md:text-left bg-green-400/20 rounded-lg px-4 py-3">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  data-aos="fade-up" data-aos-delay={index * 100}
                >
                  {/* Project Image/Icon */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <i className={`${getCategoryIcon(project.category)} text-white text-5xl`}></i>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                        <i className={`${getCategoryIcon(project.category)} text-xs`}></i>
                        <span className="capitalize">{project.category}</span>
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                        {project.status === "completed" ? (
                          <i className="fas fa-check-circle mr-1"></i>
                        ) : (
                          <i className="fas fa-spinner mr-1"></i>
                        )}
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      <Link
                        to={`/project/${project.id}`}
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right text-sm"></i>
                      </Link>

                      {project.websiteLink && (
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                          title="Visit Website"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                    }`}
                >
                  <i className="fas fa-chevron-left mr-2"></i>
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${currentPage === index + 1
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                    }`}
                >
                  Next
                  <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            )}
          </>
        ) : (
          /* No Results */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-folder-open text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filter options.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedStatus("all");
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

export default Projects;
