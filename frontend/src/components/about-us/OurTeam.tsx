import { Link } from "react-router-dom";
import JoshuaImg from "../../assets/team-members/joshua.jpg";
import FrancisImg from "../../assets/team-members/francis.jpg";

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Francis Sewor",
      position: "President & CEO",
      image: FrancisImg || null,
      expertise: "Backend Development, Business Strategy",
      socials: {
        linkedin: "https://www.linkedin.com/in/francis-sewor-123456",
        instagram: "https://www.instagram.com/francis_sewor/",
        github: "https://github.com/francis-sewor",
        email: "mailto:francis.sewor@ashesi.edu.gh"
      }
    },
    {
      id: 2,
      name: "Samuel Antwi",
      position: "Project Lead Coordinator",
      image: null,
      expertise: "UI/UX Design",
      socials: {
        linkedin: "https://www.linkedin.com/in/samuel-antwi-123456",
        instagram: "https://www.instagram.com/samuel_antwi/",
        github: "https://github.com/samuel-antwi",
        email: "mailto:samuel.antwi@example.com"
      }
    },
    {
      id: 3,
      name: "Attikpo Courage",
      position: "Backend Lead Coordinator",
      image: null,
      expertise: "Backend Development",
      socials: {
        linkedin: "https://www.linkedin.com/in/attikpo-courage-123456",
        instagram: "https://www.instagram.com/attikpo_courage/",
        github: "https://github.com/attikpo-courage",
        email: "mailto:attikpo.courage@example.com"
      }
    },
    {
      id: 4,
      name: "Joshua Adjei",
      position: "Frontend Lead Coordinator",
      image: JoshuaImg || null,
      expertise: "Fullstack Development",
      socials: {
        linkedin: "https://www.linkedin.com/in/joshua-adjei-123456",
        instagram: "https://www.instagram.com/joshua_adjei/",
        github: "https://github.com/joenash156",
        email: "mailto:joshua.adjei@ashesi.edu.gh"
      }
    },
    {
      id: 5,
      name: "Benjamin Gottah",
      position: "Frontend Lead Coordinator",
      image: null,
      expertise: "Web Application Design",
      socials: {
        linkedin: "https://www.linkedin.com/in/benjamin-gottah-123456",
        instagram: "https://www.instagram.com/benjamin_gottah/",
        github: "https://github.com/benjamin-gottah",
        email: "mailto:benjamin.gottah@example.com"
      }
    }
  ];

  return (
    <section className="pt-16 lg:pt-24 pb-6 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="text-blue-600 block">Expert Team</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of passionate professionals brings together years of good experience
            and a shared commitment to empowering the next generation of developers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            
            <div key={member.id} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Profile Image/Icon - Top section */}
                <div className="relative h-86 md:h-60 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <i className="fas fa-user text-white text-6xl"></i>
                  )}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                </div>

                {/* Member Info - Bottom section */}
                <div className="p-6 text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.expertise}
                  </p>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <Link
                      to={`/team/${member.id}`}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* Social Icons */}
                  <div className="flex items-center justify-center space-x-4 pb-6">
                    {member.socials && (
                      <div className="flex items-center space-x-4">
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200">
                          <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 bg-clip-text text-transparent transition-colors duration-200">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                          <i className="fab fa-github fa-lg"></i>
                        </a>
                        <a href={member.socials.email} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors duration-200">
                          <i className="fas fa-envelope fa-lg"></i>
                        </a>
                      </div>

                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision of transforming lives through technology.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-envelope"></i>
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
