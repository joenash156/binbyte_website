import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DonectImg from "../assets/other-images/donect-img.jpg";
import LimbsImg from "../assets/other-images/3d_limbworks-img.jpg";
import SONImg from "../assets/other-images/son-logo.png";
import JoshuaImg from "../assets/team-members/joshua.jpg";
import FrancisImg from "../assets/team-members/francis.jpg";
import CourageImg from "../assets/team-members/courage.jpg";
import Logo from "../assets/logo/binbyte-logo.jpg";
import SamuelImg from "../assets/team-members/samuel-img.jpg";
import SedemImg from "../assets/hero-images/homepage-hero-img1.jpg";
import LutherImg from "../assets/hero-images/luther.jpg";
import SeyramImg from "../assets/hero-images/homepage-hero-img4.jpg";

interface ProjectData {
  id: number;
  name: string;
  category: string;
  status: string;
  image: string | null;
  description: string;
  fullDescription: string;
  websiteLink?: string;
  githubLink?: string;
  technologies: string[];
  features: string[];
  teamMembers: {
    id: number;
    name: string;
    role: string;
    type: "team" | "learner";
    image?: string | null;
  }[];
  duration: string;
  completionDate?: string;
}

function ProjectPage() {

  useEffect(() => {
    document.title = "BinByte Technologies | Project Details";
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);

  const projectsData: ProjectData[] = [
    {
      id: 1,
      name: "Donect",
      category: "website",
      status: "ongoing",
      image: DonectImg,
      description: "All platform to connect donors to communities in need.",
      fullDescription: "Donect is a comprehensive web platform designed to bridge the gap between generous donors and communities in need. The platform facilitates seamless connections, transparent donation tracking, and impactful community support. Built with modern web technologies, Donect ensures a user-friendly experience for both donors and recipients, making charitable giving more accessible and effective.",
      websiteLink: "https://donect.is-great.org/",
      githubLink: "https://github.com/FrancisSimple/DoNect_WebApp.git",
      technologies: ["React", "FastAPI", "TailwindCSS", "PostgreSQL"],
      features: [
        "Real-time donation tracking and transparency",
        "Secure payment integration with multiple payment methods",
        "Community verification and authentication system",
        "Donor dashboard with donation history and impact metrics",
        "Mobile-responsive design for accessibility",
        "Admin panel for managing communities and donations"
      ],
      teamMembers: [
        { id: 1, name: "Francis Serwor", role: "Backend Developer", type: "team", image: FrancisImg || null },
        { id: 2, name: "Samuel Kojo Anafi Antwi", role: "Frontend Developer", type: "team", image: SamuelImg || null },
        { id: 4, name: "Joshua Adjei", role: "Frontend Developer", type: "team", image: JoshuaImg || null },
        { id: 3, name: "Courage Attikpo", role: "Backend Developer", type: "team", image: CourageImg || null },
      ],
      duration: "5 months (ongoing)",
    },
    // {
    //   id: 2,
    //   name: "Scholars Opportunity Nexus API",
    //   category: "api",
    //   status: "completed",
    //   image: null,
    //   description: "API providing real-time opportunity data to students.",
    //   fullDescription: "The Scholars Opportunity Nexus API is a robust RESTful service that aggregates and provides real-time access to scholarship opportunities, internships, and academic programs for students. The API serves as a central hub for educational opportunities, making it easier for students to discover and apply for programs that match their profiles and aspirations.",
    //   githubLink: "https://github.com/binbyte/son-api",
    //   technologies: ["FastAPI", "PostgreSQL", "Redis", "JWT", "Docker"],
    //   features: [
    //     "RESTful API with comprehensive documentation",
    //     "Real-time opportunity updates and notifications",
    //     "Advanced search and filtering capabilities",
    //     "User authentication and authorization",
    //     "Rate limiting and caching for optimal performance",
    //     "Webhook support for third-party integrations"
    //   ],
    //   teamMembers: [
    //     { id: 1, name: "Joshua Adjei", role: "Lead Backend Developer", type: "learner" },
    //     { id: 5, name: "John Maxwell Luther", role: "Backend Developer", type: "learner" }
    //   ],
    //   duration: "4 months",
    //   completionDate: "December 2024"
    // },
    {
      id: 3,
      name: "3D Limbworks",
      category: "website",
      status: "completed",
      image: LimbsImg,
      description: "Website for a company that designs custom 3D printed prosthetic limbs solutions",
      fullDescription: "3D Limbworks is a modern, accessible website showcasing innovative prosthetic limb solutions created through advanced 3D printing technology. The site serves as both an informational platform and a gateway for patients to learn about custom prosthetic options, view previous work, and connect with the team for consultations.",
      websiteLink: "https://3dlimbworks.netlify.app/",
      githubLink: "https://github.com/binbyte/3d-limbworks",
      technologies: ["TypeScript", "TailwindCSS", "React", "Netlify"],
      features: [
        "Interactive 3D model viewer for prosthetic designs",
        "Patient testimonials and case studies",
        "Online consultation booking system",
        "Responsive design optimized for all devices",
        "Accessibility features for users with disabilities",
        "Educational resources about prosthetic technology"
      ],
      teamMembers: [
        { id: 4, name: "Joshua Adjei", role: "Frontend Developer", type: "team", image: JoshuaImg || null },
      ],
      duration: "3 months",
      completionDate: "September 2025"
    },
    {
      id: 4,
      name: "Scholars Opportunity Nexus",
      category: "website",
      status: "ongoing",
      image: SONImg,
      description: "Web application for managing and discovering scholarship opportunities for students",
      fullDescription: "Scholars Opportunity Nexus is a comprehensive web platform that revolutionizes how students discover and apply for scholarships, internships, and educational opportunities. The platform combines powerful search algorithms with user-friendly interfaces to match students with opportunities that align with their academic profiles, interests, and career goals.",
      githubLink: "https://github.com/binbyte/scholars-nexus",
      technologies: ["TypeScript", "FastAPI", "TailwindCSS", "PostgreSQL", "React", "Redux"],
      features: [
        "Personalized student dashboards",
        "Application tracking and deadline reminders",
        "Document management and storage",
        "Community forums and peer support",
        "Integration with educational institutions"
      ],
      teamMembers: [
        { id: 1, name: "Francis Serwor", role: "Backend Developer", type: "team", image: FrancisImg || null },
        { id: 2, name: "Samuel Kojo Anafi Antwi", role: "Frontend Developer", type: "team", image: SamuelImg || null },
        { id: 4, name: "Joshua Adjei", role: "Frontend Developer", type: "team", image: JoshuaImg || null },
        { id: 2, name: "Sedem Kporvi", role: "Backend Developer", type: "learner", image: SedemImg || null },
        { id: 5, name: "John Maxwell Luther", role: "Backend Developer", type: "learner", image: LutherImg || null },
        { id: 3, name: "Courage Attikpo", role: "Backend Developer", type: "team", image: CourageImg || null },
        { id: 3, name: "Seyram Letsu", role: "Backend Developer", type: "learner", image: SeyramImg || null },

      ],
      duration: "3 months (ongoing)"
    },
    {
      id: 5,
      name: "BinByte Technologies",
      category: "website",
      status: "completed",
      image: Logo || null,
      description: "Website for BinByte Technologies, showcasing our services, projects and wonderful team.",
      fullDescription: "The BinByte Technologies website serves as a comprehensive platform to showcase our innovative solutions, team expertise, and successful projects. With a focus on user experience and accessibility, the site provides detailed information about our services, case studies, and a blog featuring industry insights.",
      websiteLink: "https://binbytetechnologies.netlify.app",
      githubLink: "https://github.com/joenash156/binbyte_website",
      technologies: ["TypeScript", "TailwindCSS"],
      features: [
        "Responsive design for optimal viewing on all devices",
        "Detailed service and project showcases",
        "Team member profiles with expertise highlights",
      ],
      teamMembers: [
        { id: 4, name: "Joshua Adjei", role: "Frontend Developer", type: "team", image: JoshuaImg || null },
      ],
      duration: "1 month",
      completionDate: "October 2025"
    }
  ];

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id || ''));
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "website": return "bg-blue-100 text-blue-800";
      case "api": return "bg-green-100 text-green-800";
      case "mobile app": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "website": return "fas fa-globe";
      case "api": return "fas fa-server";
      case "mobile app": return "fas fa-mobile-alt";
      default: return "fas fa-code";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "completed" ? "bg-green-500" : "bg-orange-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className={`${getCategoryIcon(project.category)} text-white text-9xl`}></i>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-700/50 to-gray-500/20"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-4 md:left-8 z-10 inline-flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* Project Name Overlay */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className={`inline-flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(project.category)}`}>
              <i className={`${getCategoryIcon(project.category)}`}></i>
              <span className="capitalize">{project.category}</span>
            </span>
            <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold text-white ${getStatusColor(project.status)}`}>
              {project.status === "completed" ? (
                <i className="fas fa-check-circle mr-1"></i>
              ) : (
                <i className="fas fa-spinner mr-1"></i>
              )}
              {project.status}
            </span>
          </div>
          {/* Links */}
          <div className="flex justify-center gap-4">
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg"
              >
                <i className="fas fa-external-link-alt"></i>
                <span>Visit Website</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg"
              >
                <i className="fab fa-github"></i>
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                Project Info
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-gray-900 font-semibold">{project.duration}</p>
                </div>
                {project.completionDate && (
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="text-gray-900 font-semibold">{project.completionDate}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-gray-900 font-semibold capitalize">{project.status}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-code text-blue-600 mr-2"></i>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-users text-blue-600 mr-2"></i>
                Team Members
              </h3>
              <div className="space-y-3">
                {project.teamMembers.map((member, index) => (
                  <Link
                    key={index}
                    to={member.type === "team" ? `/team/${member.id}` : `/learner/${member.id}`}
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <i className="fas fa-user text-white"></i>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <i className="fas fa-arrow-right text-gray-400 group-hover:text-blue-600"></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-file-alt text-blue-600 mr-3"></i>
                About This Project
              </h2>
              <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-star text-yellow-500 mr-3"></i>
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-gray-800 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Our Work?
              </h3>
              <p className="text-blue-100 mb-6">
                Get in touch with us to discuss how we can help bring your ideas to life.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-envelope"></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
