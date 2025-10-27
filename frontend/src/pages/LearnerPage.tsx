import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SedemImg from "../assets/hero-images/homepage-hero-img1.jpg";
import LutherImg from "../assets/hero-images/luther.jpg";
import JoshuaImg from "../assets/hero-images/homepage-hero-img3.jpg";
import SeyramImg from "../assets/hero-images/homepage-hero-img4.jpg";
import EnochImg from "../assets/hero-images/enoch-img.jpg";

interface LearnerData {
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
  bio: string;
  experience: string;
  projects: {
    name: string;
    description: string;
    category: string;
    link?: string;
  }[];
  projectIdeas: string[];
}

function LearnerPage() {

  useEffect(() => {
    document.title = "BinByte Technologies | Learner Profile";
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [learner, setLearner] = useState<LearnerData | null>(null);

  const learnersData: LearnerData[] = [
    {
      id: 1,
      name: "Joshua Adjei",
      type1: "backend",
      type2: "",
      image: JoshuaImg,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git", "TypeScript", "Express.js", "Tailwind CSS", "MySQL"],
      socials: {
        linkedin: "https://linkedin.com/in/joshua-adjei",
        github: "https://github.com/joenash156",
        email: "mailto:joenash156@gmail.com"
      },
      bio: "I am a passionate IT Support Specialist and a web developer who enjoys creating dynamic and functional web applications. My main focus is on backend development and API integration, where I design systems that ensure smooth communication between different platforms. I love solving real-world problems through code, building tools that are efficient, scalable, and user-centered. Whether it’s developing secure server-side logic, connecting databases, or integrating third-party APIs, I’m driven by the challenge of making technology work seamlessly to improve user experience.",
      experience: "1 year in backend development",
      projects: [
        {
          name: "Scholars Opportunity Nexus API",
          description: "API providing real-time opportunity data to students.",
          category: "api",
        },
        {
          name: "Donect Web Application",
          description: "Web application connecting donors with students in need.",
          category: "website",
        },
        {
          name: "BinByte Technologies Website",
          description: "Website showcasing the services and projects of BinByte Technologies.",
          category: "website",
        }
      ],
      projectIdeas: [
        "Real-time Chat Application API",
        "Healthcare Management System",
      ]
    },
    {
      id: 2,
      name: "Sedem Kporvi",
      type1: "backend",
      type2: "mobile development",
      image: SedemImg,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git & Github", "Dart"],
      socials: {
        linkedin: "https://www.linkedin.com/in/sedem-kporvi",
        github: "https://github.com/sedemkporvi",
        email: "mailto:sedemkporvi50@gmail.com"
      },
      bio: "Though an electrical and electronics engineering student, my passion for backend development has only increased since I joined Binbyte. Through BinByte, I’ve move from uncertainty to confidence, learning how to design databases and build functional APIs. I aim to keep growing into a versatile developer who builds solutions that truly make an impact.",
      experience: "1 year in APIs and mobile development",
      projects: [
        {
          name: "Scholars Opportunity Nexus API",
          description: "API providing real-time opportunity data to students.",
          category: "api",
        },
      ],
      projectIdeas: [
        "E-Commerce Platform with AI Recommendations",
        "Social Media Dashboard Analytics",
      ]
    },
    {
      id: 3,
      name: "Seyram Letsu",
      type1: "backend",
      type2: "mobile development",
      image: SeyramImg,
      skills: ["FastAPI", "Dart", "PostgreSQL", "Git", "Flutter", "Firebase"],
      socials: {
        linkedin: "https://www.linkedin.com/in/seyram-letsu",
        github: "https://github.com/seyramletsu555-web",
        email: "mailto:seyramletsu555@gmail.com"
      },
      bio: "I’m a passionate Mechanical Engineering student exploring the world of technology through product design and software development. I’m currently building my skills as a backend developer with FastAPI and Python, and as a frontend developer using Flutter for mobile applications. I can build efficient and secure APIs, manage databases with SQLAlchemy and Alembic, and design clean, scalable backend architectures. On the frontend, I can craft responsive and intuitive mobile interfaces using Flutter’s powerful widgets, bringing user experiences to life through thoughtful design and functionality. Beyond coding, I’m driven by the desire to solve real-world problems and create digital products that make everyday life simpler, smarter, and more sustainable. I’m constantly learning, experimenting, and growing toward becoming a well-rounded full-stack developer with an eye for impact.",
      experience: "1 year in mobile and backend development",
      projects: [
        {
          name: "Byte Tracker API",
          description: "API for tracking...",
          category: "api",
        },
        {
          name: "Scholars Opportunity Nexus API",
          description: "API providing real-time opportunity data to students.",
          category: "api",
        }
      ],
      projectIdeas: [
        "Mental Health Support Mobile App",
        "AI-Powered Personal Finance Manager",
        "Augmented Reality Shopping Experience",
      ]
    },
    {
      id: 4,
      name: "David Surname",
      type1: "flutter",
      type2: "backend",
      image: null,
      skills: ["Flutter", "Dart", "Firebase", "Mobile UI", "REST APIs"],
      socials: {
        linkedin: "https://linkedin.com/in/david-wilson",
        github: "https://github.com/david-wilson",
        instagram: "https://instagram.com/david_wilson"
      },
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
      experience: "1+ year in mobile development",
      projects: [
        {
          name: "Recipe Sharing App",
          description: "Social platform for sharing recipes",
          category: "mobile app",
        }
      ],
      projectIdeas: [
        "Travel Planning Assistant App",
        "Language Learning Game",
        "Smart Home Control Application"
      ]
    },
    {
      id: 5,
      name: "John Maxwell Luther",
      type1: "backend",
      type2: "",
      image: LutherImg,
      skills: ["FastAPI", "Machine Learning", "PostgreSQL", "Git", "Python", "MATLAB"],
      socials: {
        linkedin: "https://www.linkedin.com/in/john-maxwell-luther",
        github: "https://github.com/Maxwell1560",
        email: "mailto:john@example.com"
      },
      bio: "I am a young enthusiast with passion in biomedical engineering focused on building technologies that address healthcare challenges in my community and country. My interests lie at the intersection of healthcare, data, and technology, particularly in developing tools that improve diagnosis, accessibility, and treatment for people in low-resource settings. Over time, I’ve gained experience in backend development using Python and FastAPI, as well as basics in machine learning. I enjoy working on projects that combine medical knowledge with computational solutions, such as tracking drug availability, modeling genetic data, or optimizing hospital systems. Beyond coding, I value collaboration, mentorship, and learning from real-world problems. My long-term goal is to use biomedical innovation and software development to advance public health outcomes in Africa.",
      experience: "1 year in backend development and Machine Learning",
      projects: [
        {
          name: "Scholar's Opportunity Nexus API",
          description: "API providing real-time opportunity data to students.",
          category: "api",
        },
        {
          name: "Byte Tracker",
          description: "Modern application for tracking...",
          category: "api"
        }
      ],
      projectIdeas: [
        "AI-Powered Code Review Tool",
        "Predictive Analytics Dashboard",
        "Automated Content Generation System"
      ]
    },
    {
      id: 6,
      name: "Enoch Tetteh Nartey",
      type1: "backend",
      type2: "",
      image: EnochImg || null,
      skills: ["FastAPI", "Python", "PostgreSQL", "Git & Github"],
      socials: {
        linkedin: "https://linkedin.com/in/enoch-tetteh-nartey",
        github: "https://github.com/Enoch130?tab=repositories",
        email: "enochnartey130@gmail.com"
      },
      bio: "I have always been passionate about the use of technology in business. This inspired me to study Management Information Systems foundation in Ashesi University. I enjoy tackling technical challenges, learning new technologies, and collaborating with teams to bring ideas to life. My goal is to continue growing as a backend engineer while contributing to impactful projects that enhance user experience.",
      experience: "Few months in backend development",
      projects: [
        // {
        //   name: "Restaurant Booking System",
        //   description: "Online reservation platform for restaurants",
        //   category: "website",
        //   link: "https://restaurant-booking.com"
        // },
        // {
        //   name: "Payment Gateway Integration",
        //   description: "Secure payment processing API",
        //   category: "api",
        // }
      ],
      projectIdeas: [
        "Marketplace for Freelancers",
        "Event Management Platform",
        "Customer Relationship Management System"
      ]
    }
  ];

  useEffect(() => {
    const foundLearner = learnersData.find(l => l.id === parseInt(id || ''));
    setLearner(foundLearner || null);
  }, [id]);

  if (!learner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Learner Not Found</h1>
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

  const getTypeColor = (type: string) => {
    switch (type) {
      // case "frontend": return "bg-blue-100 text-blue-800";
      case "backend": return "bg-green-100 text-green-800";
      case "web development": return "bg-purple-100 text-purple-800";
      case "mobile development": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {learner.image ? (
          <img
            src={learner.image}
            alt={learner.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-user text-white text-9xl"></i>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-gray-600/30 to-gray-300/20"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-4 md:left-8 z-10 inline-flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* Learner Name Overlay */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {learner.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {learner.type1 && (
              <span className={`inline-flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold ${getTypeColor(learner.type1)}`}>
                <span className="capitalize">{learner.type1}</span>
              </span>
            )}
            {learner.type2 && (
              <span className={`inline-flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold ${getTypeColor(learner.type2)}`}>
                <span className="capitalize">{learner.type2}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Experience */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-briefcase text-blue-600 mr-2"></i>
                Experience
              </h3>
              <p className="text-gray-700">{learner.experience}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-code text-blue-600 mr-2"></i>
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {learner.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-share-alt text-blue-600 mr-2"></i>
                Connect
              </h3>
              <div className="space-y-3">
                {learner.socials.linkedin && (
                  <a
                    href={learner.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin text-xl w-6"></i>
                    <span>LinkedIn</span>
                  </a>
                )}
                {learner.socials.github && (
                  <a
                    href={learner.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <i className="fab fa-github text-xl w-6"></i>
                    <span>GitHub</span>
                  </a>
                )}
                {learner.socials.instagram && (
                  <a
                    href={learner.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                  >
                    <i className="fab fa-instagram text-xl w-6"></i>
                    <span>Instagram</span>
                  </a>
                )}
                {learner.socials.email && (
                  <a
                    href={learner.socials.email}
                    className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors duration-200"
                  >
                    <i className="fas fa-envelope text-xl w-6"></i>
                    <span>Email</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-up">
            {/* Bio */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-user-circle text-blue-600 mr-3"></i>
                <span>About&nbsp;</span><span className="text-blue-800">{learner.name}</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">{learner.bio}</p>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-project-diagram text-blue-600 mr-3"></i>
                Projects Worked On
              </h2>
              <div className="space-y-4">
                {learner.projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg hover:bg-blue-100 transition-colors duration-200"
    
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-700 mb-2">{project.description}</p>
                        <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 capitalize">
                          {project.category}
                        </span>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          title="Visit Project"
                        >
                          <i className="fas fa-external-link-alt text-xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Ideas */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                Project Ideas
              </h2>
              <div className="space-y-3">
                {learner.projectIdeas.map((idea, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:shadow-md transition-all duration-200"
              
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium pt-1">{idea}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerPage;
