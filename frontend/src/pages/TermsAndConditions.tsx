import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TermsAndConditions() {

  useEffect(() => {
    document.title = "BinByte Technologies | Terms and Conditions";
  }, []);

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
          <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
            <i className="fas fa-file-contract text-purple-600 text-4xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            BinByte Community Membership Agreement
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: June 2025
          </p>
        </div>

        {/* Content */}
        <div className="md:p-12 space-y-8">
          {/* Introduction */}
          <section data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-handshake text-blue-600 text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions ("Agreement") govern participation in the BinByte Community. By completing the membership form and submitting your details, you acknowledge that you have read, understood, and agreed to the following terms.
                </p>
              </div>
            </div>
          </section>

          {/* Membership Eligibility */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-check text-green-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Membership Eligibility</h2>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 leading-relaxed flex items-start">
                      <i className="fas fa-check-circle text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                      <span>Membership is open to individuals interested in technology, programming, and community-driven learning.</span>
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 leading-relaxed flex items-start">
                      <i className="fas fa-check-circle text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                      <span>Members must provide accurate personal details including full name, email address, and any other required information.</span>
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-700 leading-relaxed flex items-start">
                      <i className="fas fa-exclamation-circle text-yellow-600 mr-2 mt-1 flex-shrink-0"></i>
                      <span>BinByte reserves the right to verify information provided and deny membership where necessary.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Membership Contribution */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-money-bill-wave text-purple-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Membership Contribution</h2>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-calendar-alt text-purple-600 mr-2"></i>
                      Monthly Fee
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Each member is required to contribute <span className="font-bold">GH₵ 10.00 (Ten Ghana Cedis)</span> monthly as a membership fee.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-gift text-blue-600 mr-2"></i>
                      Benefits Included
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      This contribution grants members access to:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Community resources and materials</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Training tutorials and documentation</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Mentorship and guidance</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Support from the BinByte community</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="fas fa-ban text-red-600 mr-2"></i>
                      Important Notice
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      All payments are <span className="font-bold">non-refundable</span>, regardless of whether the member utilizes the available resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Non-Refundable Policy */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-times-circle text-red-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Policy</h2>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Once paid, contributions <span className="font-bold">cannot be refunded</span> under any circumstances, including but not limited to:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-circle text-red-600 mr-3 mt-1.5 text-xs flex-shrink-0"></i>
                      <span>Non-participation in training sessions</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-circle text-red-600 mr-3 mt-1.5 text-xs flex-shrink-0"></i>
                      <span>Limited usage of resources</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-circle text-red-600 mr-3 mt-1.5 text-xs flex-shrink-0"></i>
                      <span>Discontinuation of membership by the member</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                    By agreeing to these terms, the member expressly waives any right to request or demand a refund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Member Responsibilities */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-tasks text-orange-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Member Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Members are expected to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-heart text-orange-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-900">Respectful Engagement</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Engage respectfully with other members and mentors</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-book-reader text-orange-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-900">Proper Usage</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Use community resources for personal and educational development only</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-shield-alt text-orange-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-900">No Redistribution</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Avoid sharing or redistributing BinByte's training materials without written consent</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-exclamation-triangle text-orange-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-900">Consequences</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Misuse may result in suspension or termination without refund</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BinByte Responsibilities */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-building text-indigo-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">BinByte Responsibilities</h2>
                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-gray-700 leading-relaxed mb-4">BinByte will provide:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-video text-indigo-600 mr-3 mt-1 flex-shrink-0"></i>
                      <span>Access to tutorials, mentorship, and other learning resources</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-users text-indigo-600 mr-3 mt-1 flex-shrink-0"></i>
                      <span>Opportunities for community collaboration and growth</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <i className="fas fa-hands-helping text-indigo-600 mr-3 mt-1 flex-shrink-0"></i>
                      <span>Guidance and support to members within available capacity</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
                      While BinByte strives to maintain consistent resources, it does not guarantee uninterrupted access or availability at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Membership Termination */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-times text-red-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Membership Termination</h2>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-3">Membership may be terminated if:</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-times text-red-600 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Monthly contributions are not made</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-times text-red-600 mr-3 mt-1 flex-shrink-0"></i>
                        <span>A member violates community rules</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <i className="fas fa-times text-red-600 mr-3 mt-1 flex-shrink-0"></i>
                        <span>A member engages in conduct harmful to the reputation or well-being of the community</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold">
                      <i className="fas fa-exclamation-triangle text-orange-600 mr-2"></i>
                      Termination does not entitle the member to any refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amendments */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-edit text-teal-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amendments</h2>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500 space-y-3">
                  <p className="text-gray-700 leading-relaxed flex items-start">
                    <i className="fas fa-check text-teal-600 mr-2 mt-1 flex-shrink-0"></i>
                    <span>BinByte reserves the right to update or amend these Terms and Conditions at any time.</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed flex items-start">
                    <i className="fas fa-check text-teal-600 mr-2 mt-1 flex-shrink-0"></i>
                    <span>Members will be notified of any significant changes. Continued membership after notification implies acceptance of the updated terms.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-check-double text-blue-600 mr-3"></i>
                Acceptance Confirmation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting the membership form, I confirm that:
              </p>
              <div className="space-y-3 bg-white p-4 rounded-lg">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-3 mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700">I have read and understood these Terms and Conditions</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-3 mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700">I agree to make a non-refundable monthly contribution of GHC 10.00</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-3 mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700">I accept the responsibilities and conditions outlined above</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8" data-aos="fade-up">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-envelope text-purple-600 mr-3"></i>
                Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-700">
                  <i className="fas fa-envelope text-purple-600"></i>
                  <a href="mailto:info@binbyte.tech" className="hover:text-purple-600 transition-colors duration-200">
                    info@binbyte.tech
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <i className="fas fa-phone text-purple-600"></i>
                  <a href="tel:+233256591970" className="hover:text-purple-600 transition-colors duration-200">
                    +233 (0) 25 659 1970
                  </a>
                </div>
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

export default TermsAndConditions;
