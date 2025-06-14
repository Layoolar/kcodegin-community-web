
import React from 'react';
import { Heart, ArrowRight, Users, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/b596279c-ecb1-4964-99d1-f3293752572d.png" 
                alt="KCODEGIN Logo" 
                className="h-24 w-24 mx-auto object-contain mb-6 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Kings Community Development
              <span className="block text-amber-600 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Global Initiative
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium">
              "If we all look out for one another, no one will be left behind."
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building compassionate, inclusive, and resilient communities through education, 
              healthcare, social integration, and empowerment initiatives across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/about"
                className="group bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/donations"
                className="group bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">Building stronger communities through collaborative action and love-driven service.</p>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-600">Transforming lives across Africa and beyond through sustainable development initiatives.</p>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Purpose Driven</h3>
                <p className="text-gray-600">Every action guided by our mission to create dignity, health, and opportunity for all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our global network of change-makers and help us build a world where everyone has the opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Our Mission
            </Link>
            <Link
              to="/contact"
              className="bg-amber-600 text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
