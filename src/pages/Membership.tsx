import React from 'react';
import { Users, CheckCircle, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const benefits = [
    "Be Part of a Purpose-Driven Network",
    "Contribute to Life-Changing Projects",
    "Gain Valuable Experience Through Volunteering & Outreach",
    "Receive Opportunities for Local & International Collaboration",
    "Get Recognized as a Change Ambassador in Your Community",
    "Access Trainings, Events, Certificates & Mentorship"
  ];

  const memberTypes = [
    "Volunteers",
    "Healthcare professionals",
    "Students",
    "Educators",
    "Entrepreneurs",
    "Philanthropists",
    "Private and public organizations"
  ];

  const involvement = [
    "Join a medical outreach team",
    "Support rural development projects",
    "Lend your skills in media, health, education or logistics",
    "Advocate for equity and sustainability",
    "Organize local fundraising drives",
    "Partner with us through your organization or brand"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Join the Movement</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At KCODEGIN, meaningful change does not happen in isolation—it begins with people. People like you.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Become a Member?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Membership is open to all—regardless of background, profession, or location:</p>
              <ul className="space-y-3">
                {memberTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Become a Member?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How You Can Get Involved</h3>
              <ul className="space-y-4">
                {involvement.map((way, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{way}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white text-center">
            <Globe className="h-12 w-12 mx-auto mb-4 animate-bounce-in" />
            <h3 className="text-3xl font-bold mb-6">We Believe in You. We Believe in Teamwork. We Believe in Love.</h3>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              KCODEGIN isn't just an organization—it's a family of dreamers, doers, and change agents. Whether you're a professional with years of experience or someone with only time and heart to give, you matter here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kcodegin@yahoo.com"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:scale-105"
              >
                Send Expression of Interest
              </a>
              <Link
                to="/contact"
                className="bg-amber-600 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
