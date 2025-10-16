import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JoshuaImg from "../assets/team-members/joshua.jpg";
import FrancisImg from "../assets/team-members/francis.jpg";

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
      image: FrancisImg || null,
      expertise: "Mobile Application Development, Business Strategy",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      experience: "3 years in software development and business leadership",
      education: "BSC Computer Engineering, Ashesi University",
      skills: ["Flutter", "Python", "FastAPI", "Dart", "Leadership", "Backend Development"],
      achievements: ["Founded developers startup", "Mentored 10+ developers", "Developed 10+ mobile apps"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO & Lead Developer",
      image: null,
      expertise: "System Architecture, DevOps",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      experience: "8+ years in system architecture and cloud technologies",
      education: "BS Software Engineering, MIT",
      skills: ["AWS", "Docker", "Kubernetes", "Microservices", "Java", "Go"],
      achievements: ["Built scalable systems for 1M+ users", "AWS Certified Solutions Architect", "Open source contributor"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Training",
      image: null,
      expertise: "Educational Technology, Curriculum Design",
      bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      experience: "12+ years in education and training development",
      education: "PhD Educational Technology, UC Berkeley",
      skills: ["Curriculum Design", "Learning Analytics", "Python", "Data Science", "Public Speaking"],
      achievements: ["Trained 10,000+ students", "Published 20+ research papers", "Education Innovation Award"]
    },
    {
      id: 4,
      name: "Joshua Adjei",
      position: "Frontend Lead Coordinator",
      image: JoshuaImg || null,
      expertise: "Frontend Development and Tutoring",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      experience: "2 years in web app development and design",
      education: "BS Computer Science, Ashesi University",
      skills: ["React", "JavaScript", "PHP", "Express.js", "Database Management", "IT Support"],
      achievements: ["Built 5 web apps", "Google Support Specialist Certificate"]
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
      achievements: ["Grew brand awareness by 300%", "Google Ads certified", "Marketing Campaign of the Year"]
    }
  ];

  useEffect(() => {
    const foundMember = teamMembersData.find(m => m.id === parseInt(id || ''));
    setMember(foundMember || null);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-aos="fade-up">
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
    <div className="min-h-screen pt-8 pb-16" data-aos="fade-up">
      <div className="container mx-auto px-1 md:px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 group inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 ml-2 animate-pulse"
        >
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform duration-200 mt-0.5"></i>
          <span>Back to Team</span>
        </button>

        {/* Member Profile */}
        <div className="rounded overflow-hidden">
          {/* Header Section */}
          <div className="text-white text-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] md:h-[800px] object-cover object-top"
              />
            ) : (
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-white/20 flex items-center justify-center border-4 border-white shadow-lg">
                <i className="fas fa-user text-white text-5xl"></i>
              </div>
            )}
            <div className="p-6 bg-blue-900 rounded-b">
              <h1 className="text-3xl md:text-4xl font-bold my-2">{member.name}</h1>
              <p className="text-xl text-blue-100 mr-2">{member.position}</p>
              <p className="text-blue-100 pb-4">{member.expertise}</p>
            </div>

          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8" data-aos="fade-up">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-user-circle text-blue-600 mr-3"></i>
                About
              </h2>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="fas fa-briefcase text-blue-600 mr-2"></i>
                  Experience
                </h3>
                <p className="text-gray-700">{member.experience}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="fas fa-graduation-cap text-blue-600 mr-2"></i>
                  Education
                </h3>
                <p className="text-gray-700">{member.education}</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-cogs text-blue-600 mr-2"></i>
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

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-trophy text-blue-600 mr-2"></i>
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
