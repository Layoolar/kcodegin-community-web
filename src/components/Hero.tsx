
import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b596279c-ecb1-4964-99d1-f3293752572d.png" 
              alt="KCODEGIN Logo" 
              className="h-24 w-24 mx-auto object-contain mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Kings Community Development
            <span className="block text-amber-600">Global Initiative</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            "If we all look out for one another, no one will be left behind."
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Building compassionate, inclusive, and resilient communities through education, 
            healthcare, social integration, and empowerment initiatives across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#donations"
              className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
