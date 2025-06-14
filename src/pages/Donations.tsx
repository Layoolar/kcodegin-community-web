import React from 'react';
import { Heart, Gift, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donations = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Donate</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your gift can change a life today. Every donation is a seed of hope planted in the heart of a struggling community.
            </p>
          </div>
        </div>
      </section>

      {/* Donations Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in">Making Impact Through Giving</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in">
                Your support fuels our mission to build healthier, happier, and more resilient lives across Africa through grassroots health, education, and development projects.
              </p>
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Fund medical outreaches in underserved communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Support youth development and mentorship programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Empower women through livelihood programs</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ways to Donate</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">General Donation</h4>
                  <p className="text-gray-600">Support our overall mission and let us direct funds where they're needed most.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Project-Specific Donation</h4>
                  <p className="text-gray-600">Choose a specific program or initiative you'd like to support directly.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Giving</h4>
                  <p className="text-gray-600">Become a monthly supporter for sustained impact in communities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-16 animate-fade-in">
            <div className="text-center">
              <Gift className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Give an Honor, Tribute, or Memorial Donation</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Celebrate a life. Honor a legacy. Whether you're marking a birthday, celebrating a milestone, or remembering a loved one, an honorary donation is a meaningful way to give back.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 italic">
                  "In your honor, a child was treated. A family was healed. A community was restored."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center animate-bounce-in">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
              <p className="text-lg mb-6 opacity-90">
                Every contribution, no matter the size, creates ripples of positive change across communities in Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kcodegin@gmail.com"
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:scale-105 transform"
                >
                  Contact for Donation Info
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
        </div>
      </section>
    </div>
  );
};

export default Donations;
