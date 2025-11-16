import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

interface LearningCategory {
  id: number;
  title: string;
  icon: string;
  description: string;
  features: string[];
  duration: string;
  level: string;
  isAvailable: boolean;
  googleFormLink?: string;
  unavailableMailLink?: string;
  color: {
    bg: string;
    icon: string;
    button: string;
    badge: string;
  };
}

function ApplyToLearn() {
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "BinByte Technologies | Apply to Learn";
  }, []);

  const categories: LearningCategory[] = [
    {
      id: 1,
      title: "Backend Development",
      icon: "fas fa-server",
      description: "Master server-side programming, databases, and API development to build powerful backend systems.",
      features: [
        "Python & FastAPI",
        "Database Management (PostgreSQL)",
        "API Design",
        "Authentication & Security",
        "Git & GitHub",
        "Project-Based Learning"
      ],
      duration: "3-6 Months",
      level: "Beginner to Intermediate",
      isAvailable: false,
      unavailableMailLink: "mailto:binbytetech@gmail.com?subject=Kindly Notify Me About Backend Development Program&body=Hello BinByte Team,%0D%0A%0D%0AI would like to be notified when the Backend Development program becomes available.%0D%0A%0D%0AThank you!",
      googleFormLink: "https://forms.gle/tzgmupbnNfJiti4u7",
      color: {
        bg: "from-green-50 to-emerald-50",
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        badge: "bg-green-100 text-green-800"
      }
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "fas fa-mobile-alt",
      description: "Learn to create beautiful, cross-platform mobile applications using modern frameworks.",
      features: [
        "Flutter & Dart",
        "State Management",
        "Mobile Frontend Design",
        "Cross-Platform Apps Development",
        "App Deployment"
      ],
      duration: "3-6 Months",
      level: "Beginner to Intermediate",
      isAvailable: true,
      unavailableMailLink: "mailto:binbytetech@gmail.com?subject=Kindly Notify Me About Mobile Development Program&body=Hello BinByte Team,%0D%0A%0D%0AI would like to be notified when the Mobile Development program becomes available.%0D%0A%0D%0AThank you!",
      googleFormLink: "https://forms.gle/dU8M1Z5rtA7DqWTy9",
      color: {
        bg: "from-orange-50 to-amber-50",
        icon: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        badge: "bg-orange-100 text-orange-800"
      }
    },
    {
      id: 3,
      title: "Web Development",
      icon: "fas fa-globe",
      description: "Build responsive, modern websites and web applications using cutting-edge technologies.",
      features: [
        "HTML, CSS & JavaScript",
        "React & TypeScript",
        "Responsive Design",
        "Tailwind CSS",
        "Frontend Frameworks",
        "Web Deployment"
      ],
      duration: "3-6 Months",
      level: "Beginner to Intermediate",
      isAvailable: false,
      googleFormLink: "https://forms.gle/tzgmupbnNfJiti4u7",
      unavailableMailLink: "mailto:binbytetech@gmail.com?subject=Kindly Notify Me About Web Development Program&body=Hello BinByte Team,%0D%0A%0D%0AI would like to be notified when the Web Development program becomes available.%0D%0A%0D%0AThank you!",
      color: {
        bg: "from-purple-50 to-violet-50",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        badge: "bg-purple-100 text-purple-800"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20" data-aos="fade-up">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        {/* <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button> */}

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
            <i className="fas fa-graduation-cap text-blue-600 text-5xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Learning Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your path and join our community of learners. Transform your passion into expertise with hands-on training and real-world projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.color.bg} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={category.id * 100}
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 ${category.color.icon} bg-white rounded-xl flex items-center justify-center shadow-md`}>
                    <i className={`${category.icon} text-3xl`}></i>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.color.badge}`}>
                    {category.level}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    {category.duration}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 pb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  What You'll Learn
                </h3>
                <ul className="space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm">
                      <i className={`fas fa-check-circle ${category.color.icon} mr-2 mt-0.5 flex-shrink-0`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-6 border-t border-gray-200">
                {category.isAvailable ? (
                  <a
                    href={category.googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${category.color.button} text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Apply Now</span>
                  </a>
                ) : (
                  <div className="space-y-3">
                    <button
                      disabled
                      className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <i className="fas fa-lock"></i>
                      <span>Unavailable Now</span>
                    </button>
                    <a
                      href={category.unavailableMailLink}
                      className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <i className="fas fa-envelope"></i>
                      <span>Get Notified</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Learn With BinByte?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chalkboard-teacher text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                  <p className="text-gray-600 text-sm">Learn from experienced developers with real-world industry experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-project-diagram text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hands-On Projects</h3>
                  <p className="text-gray-600 text-sm">Build real applications and create an impressive portfolio</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-users text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600 text-sm">Join a vibrant community of learners and developers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-certificate text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Ready</h3>
                  <p className="text-gray-600 text-sm">Gain skills that employers are actively seeking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to us for more information about our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:binbytetech@gmail.com"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-envelope"></i>
                <span>Email Us</span>
              </a>
              <a
                href="tel:+233256591970"
                className="inline-flex items-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <i className="fas fa-phone"></i>
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyToLearn;
