import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-2" data-aos="fade-up">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12 py-4">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
            <i className="fas fa-shield-alt text-blue-600 text-4xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: June 2025
          </p>
        </div>

        {/* Content */}
        <div className="md:p-12 space-y-8">
          {/* Introduction */}
          <section data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-info-circle text-blue-600 text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At BinByte Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services, training programs, and community.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-copyright text-purple-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                      Ownership of Materials
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      All materials, tutorials, and resources provided by BinByte remain the intellectual property of BinByte unless otherwise stated. This includes but is not limited to course content, videos, code samples, documentation, and training materials.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-exclamation-triangle text-red-600 mr-2"></i>
                      Usage Restrictions
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Members may not copy, distribute, or resell training resources without written authorization from BinByte Technologies. Unauthorized use or distribution of our materials is strictly prohibited and may result in legal action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-lock text-green-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-database text-green-600 mr-2"></i>
                      Data Collection and Usage
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Personal data provided (name, email, phone number, etc.) will be used strictly for community administration and communication purposes. We collect this information to:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Provide you with access to our training programs and resources</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Communicate important updates and announcements</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Improve our services and user experience</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Manage your membership and account</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-user-shield text-blue-600 mr-2"></i>
                      Data Protection Commitment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      BinByte will not sell or disclose member data to unauthorized third parties. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-balance-scale text-orange-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a member of the BinByte community, you have the following rights regarding your personal data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-eye text-orange-600 mr-2"></i>
                      Access
                    </h4>
                    <p className="text-gray-600 text-sm">Request access to your personal data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-edit text-orange-600 mr-2"></i>
                      Correction
                    </h4>
                    <p className="text-gray-600 text-sm">Request correction of inaccurate data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-trash text-orange-600 mr-2"></i>
                      Deletion
                    </h4>
                    <p className="text-gray-600 text-sm">Request deletion of your data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-ban text-orange-600 mr-2"></i>
                      Opt-out
                    </h4>
                    <p className="text-gray-600 text-sm">Unsubscribe from communications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-envelope text-blue-600 mr-3"></i>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-700">
                  <i className="fas fa-envelope text-blue-600"></i>
                  <a href="mailto:info@binbyte.tech" className="hover:text-blue-600 transition-colors duration-200">
                    info@binbyte.tech
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <i className="fas fa-phone text-blue-600"></i>
                  <a href="tel:+233256591970" className="hover:text-blue-600 transition-colors duration-200">
                    +233 (0) 25 659 1970
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-sync-alt text-yellow-600 text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Policy Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  BinByte Technologies reserves the right to update this Privacy Policy at any time. We will notify members of significant changes via email or through our platform. Your continued use of our services after any modifications indicates your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            <i className="fas fa-arrow-up"></i>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
