import React from 'react';
import { Handshake, Target, Award, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partnership = () => {
  const partnerTypes = [
    "Community leaders or traditional rulers with influence",
    "Philanthropists or social investors looking to make lasting impact",
    "Landlord associations or youth groups",
    "University students or academic institutions",
    "NGOs, corporate bodies, or faith-based organizations",
    "Global business executives seeking to expand CSR footprint"
  ];

  const offerings = [
    "Shared Vision and Collaborative Project Design",
    "Strategic Alignment With Sustainable Development Goals (SDGs)",
    "Opportunity to Drive High-Impact Community Programs",
    "Recognition and Visibility Across Our Platforms and Events",
    "Impact Reports and Documentation for Institutional Use",
    "Honors, Awards & Public Acknowledgment"
  ];

  const needs = [
    "Community health outreaches and mobile clinics",
    "Maternal and child health programs",
    "Educational and youth empowerment campaigns",
    "Environmental and sanitation projects",
    "Food, water, and shelter access initiatives",
    "Leadership and skills development",
    "Policy advocacy and public enlightenment"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Partnership</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we build stronger communities through intentional collaboration and purposeful alliances.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in">Our Philosophy on Partnership</h3>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                We don't just seek support—we build purposeful alliances with individuals, institutions, and organizations that share our vision for a better world.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="animate-fade-in">
              <Target className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Partner With Us</h3>
              <ul className="space-y-3">
                {partnerTypes.map((type, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in">
              <Award className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer Partners</h3>
              <ul className="space-y-3">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in">
              <Globe2 className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Need Partners For</h3>
              <ul className="space-y-3">
                {needs.map((need, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-6">LET'S MAKE AFRICA THE LAND OF POSSIBILITIES</h3>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              With our boots on the ground, and your influence, resources, or expertise, we can transform underserved communities into centers of opportunity and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kcodegin@yahoo.com"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:scale-105 transform"
              >
                Contact for Partnership
              </a>
              <Link
                to="/contact"
                className="bg-amber-600 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 shadow-lg hover:scale-105 transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
