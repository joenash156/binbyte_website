import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JoshuaImg from "../assets/team-members/joshua.jpg";
import FrancisImg from "../assets/team-members/francis.jpg";
import SamuelImg from "../assets/team-members/samuel-img.jpg";
import CourageImg from "../assets/team-members/courage.jpg";

interface TeamMemberData {
  id: number;
  name: string;
  position: string;
  image: string | null;
  expertise: string;
  bio: string;
  experience: string;
  education: string;
  skills: string[];
  achievements: string[];
  projects: {
    name: string;
    description: string;
    category: string;
    link?: string;
  }[];
  futureGoals: string[];
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

function TeamMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<TeamMemberData | null>(null);

  const teamMembersData: TeamMemberData[] = [
    {
      id: 1,
      name: "Francis Sewor",
      position: "President & CEO",
      image: FrancisImg,
      expertise: "Mobile Application Development, Business Strategy",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      experience: "2 years in software development and business leadership",
      education: "BSC Computer Engineering, Ashesi University",
      skills: ["Flutter", "Python", "FastAPI", "Dart", "Leadership", "Backend Development", "Mobile UI/UX"],
      achievements: ["Founded developers startup", "Mentored 10+ developers", "Developed 10+ mobile apps"],
      projects: [
        {
          name: "Donect Platform",
          description: "All platform to connect donors to communities in need",
          category: "API",
        },
        {
          name: "Scholars Opportunity Nexus",
          description: "Web application for discovering scholarship opportunities for students",
          category: "API",
        }
      ],
      futureGoals: [
        "Scale BinByte to become a leading tech education platform in Africa",
        "Launch AI-powered learning management system",
        "Establish partnerships with about 10 companies"
      ],
      socials: {
        linkedin: "https://linkedin.com/in/francis-sewor",
        github: "https://github.com/francis-sewor",
        email: "mailto:francis@binbyte.tech"
      }
    },
    {
      id: 2,
      name: "Samuel Kojo Anafi Antwi",
      position: "Frontend Lead & UI/UX Designer",
      image: SamuelImg || null,
      expertise: "UI/UX Design, Figma",
      bio: "I am a computer engineering student with a strong passion for software engineering and I am looking forward to becoming a well rounded software developer. I envision bringing on board innovative solutions which will have a lasting impact wherever I go.",
      experience: "2 years in UI/UX design and frontend development",
      education: "BSC Computer Engineering, <School>",
      skills: ["Figma", "Git", "Dart", "Flutter", "MongoDB", "PostgresSQL"],
      achievements: ["Designed scalable interface for couple of web applications", "Tutored learners in frontend mobile applications", "Developed web applications"],
      projects: [
        {
          name: "Scholars Opportunity Nexus",
          description: "Web application for discovering scholarship opportunities",
          category: "website",
          //link: "https://scholars.is-great.org/"
        },
        {
          name: "Donect Platform",
          description: "All platform to connect donors to communities in need",
          category: "website",
          link: "https://donect.is-great.org/"
        }
      ],
      futureGoals: [
        "Master advanced React patterns and architecture",
        "Build open-source UI component library",
        "Develop innovative mobile applications that solve real-world problems"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/samuel-kojo-anafi-antwi",
        github: "https://github.com/samuelantwi103",
        email: "mailto:samuelantwi103@gmail.com"
      }
    },
    {
      id: 3,
      name: "Courage Xoese Attikpo",
      position: "Backend Lead Coordinator",
      image: CourageImg ||  null,
      expertise: "Design API systems",
      bio: "I’m a passionate developer who enjoys building solutions that make people’s lives easier. I started my journey in tech with a curiosity about how software connects ideas to impact, and that curiosity quickly grew into a deep interest in backend and mobile development.So far, I’ve worked with FastAPI to build efficient backend systems and Flutter to create cross-platform mobile experiences. I also use PostgreSQL for database management, which helps me design reliable and scalable applications.Beyond coding, I’m driven by the idea of using technology to solve real problems, especially in education and human development.",
      experience: "1 years systems and API development",
      education: "BSc Computer Science, <School>",
      skills: ["FastAPI", "PostgresSQL", "Python", "Database Management", "Flutter"],
      achievements: ["Trained 5 students", "Design APIs for web applications"],
      projects: [
        {
          name: "Scholars Opportunity Nexus",
          description: "Comprehensive online learning management system",
          category: "API"
        },
        {
          name: "Donect Platform",
          description: "Data-driven insights for personalized learning",
          category: "API"
        }
      ],
      futureGoals: [
        "Develop AI-powered adaptive learning systems",
        "Build scalable backend architectures",
        "Expand training programs to 5+ countries"
      ],
      socials: {
        linkedin: "https://linkedin.com/in/emily-rodriguez",
        github: "https://github.com/attikpocourage",
        email: "mailto:attikpocourage33@gmail.com",
        instagram: "https://instagram.com/emily_rodriguez"
      }
    },
    {
      id: 4,
      name: "Joshua Adjei",
      position: "Frontend Lead Coordinator",
      image: JoshuaImg,
      expertise: "Frontend Development and Tutoring",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      experience: "2 years in web app development and design",
      education: "BS Computer Science, Ashesi University",
      skills: ["React", "JavaScript", "PHP", "Express.js", "Database Management", "IT Support", "TypeScript"],
      achievements: ["Built 5+ web apps", "Google Support Specialist Certificate", "Mentored 15+ students"],
      projects: [
        {
          name: "Donect",
          description: "Platform connecting donors to communities in need",
          category: "website",
          link: "https://donect.is-great.org/"
        },
        {
          name: "Scholars Opportunity Nexus",
          description: "Web application for discovering scholarship opportunities",
          category: "website"
        }
      ],
      futureGoals: [
        "Master advanced React patterns and architecture",
        "Build open-source UI component library",
        "Lead frontend team on enterprise projects"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/joshua-adjei-30b108275",
        github: "https://github.com/joenash156",
        email: "mailto:joenash156@gmail.com"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director",
      image: null,
      expertise: "Digital Marketing, Brand Strategy",
      bio: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      experience: "7+ years in digital marketing and brand management",
      education: "MBA Marketing, Harvard Business School",
      skills: ["Digital Marketing", "SEO/SEM", "Content Strategy", "Analytics", "Brand Management", "Social Media"],
      achievements: ["Grew brand awareness by 300%", "Google Ads certified", "Marketing Campaign of the Year"],
      projects: [
        {
          name: "BinByte Brand Redesign",
          description: "Complete brand identity and digital presence overhaul",
          category: "website"
        },
        {
          name: "Social Media Growth Campaign",
          description: "Multi-platform campaign reaching 1M+ users",
          category: "marketing"
        }
      ],
      futureGoals: [
        "Launch influencer marketing program for tech education",
        "Establish BinByte as top-of-mind tech training brand",
        "Create viral content series on programming careers"
      ],
      socials: {
        linkedin: "https://linkedin.com/in/lisa-wang",
        github: "https://github.com/lisa-wang",
        email: "mailto:lisa@binbyte.tech",
        instagram: "https://instagram.com/lisa_wang"
      }
    }
  ];

  useEffect(() => {
    const foundMember = teamMembersData.find(m => m.id === parseInt(id || ''));
    setMember(foundMember || null);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-aos="fade-up">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-user text-white text-9xl"></i>
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

        {/* Member Name Overlay */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {member.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="inline-flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
              <span>{member.position}</span>
            </span>
          </div>
          <p className="text-blue-100 text-lg">{member.expertise}</p>
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
              <p className="text-gray-700">{member.experience}</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-graduation-cap text-blue-600 mr-2"></i>
                Education
              </h3>
              <p className="text-gray-700">{member.education}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-code text-blue-600 mr-2"></i>
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-share-alt text-blue-600 mr-2"></i>
                Connect
              </h3>
              <div className="space-y-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin text-xl w-6"></i>
                    <span>LinkedIn</span>
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <i className="fab fa-github text-xl w-6"></i>
                    <span>GitHub</span>
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                  >
                    <i className="fab fa-instagram text-xl w-6"></i>
                    <span>Instagram</span>
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={member.socials.email}
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
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-user-circle text-blue-600 mr-3"></i>
                <span>About&nbsp;</span><span className="text-blue-800">{member.name}</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-trophy text-yellow-500 mr-3"></i>
                Key Achievements
              </h2>
              <div className="space-y-3">
                {member.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <i className="fas fa-check-circle text-green-500 mt-1 flex-shrink-0 text-lg"></i>
                    <span className="text-gray-800 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-project-diagram text-blue-600 mr-3"></i>
                Projects Worked On
              </h2>
              <div className="space-y-4">
                {member.projects.map((project, index) => (
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
                        <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
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

            {/* Future Goals */}
            <div className="bg-white rounded-2xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-rocket text-purple-500 mr-3"></i>
                Future Goals
              </h2>
              <div className="space-y-3">
                {member.futureGoals.map((goal, index) => (
                  <div>
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 font-medium pt-1">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default TeamMember;
