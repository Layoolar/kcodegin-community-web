
import React from 'react';
import { Heart, Users, Globe, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About KCODEGIN</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2015 with a powerful belief: love, dignity, and opportunity should not be reserved for a privileged few—but shared with all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 mb-6">
              In a world fractured by inequality, isolation, and inherited limitations, Kings Community Development Global Initiative (KCODEGIN) was founded with a single, powerful belief: love, dignity, and opportunity should not be reserved for a privileged few—but shared with all.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We are a non-governmental, people-centered movement committed to building compassionate, inclusive, and resilient communities through education, healthcare, social integration, and empowerment initiatives. At our core, we are bridge-builders, linking problems with solutions, pain with hope, and people with one another.
            </p>
            <p className="text-lg text-gray-700">
              KCODEGIN began as a simple dream: to form a global network of community-minded individuals and allies—ordinary people with an extraordinary drive to uplift those around them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h4>
              <p className="text-gray-600">Building stronger communities together</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Love-Driven</h4>
              <p className="text-gray-600">Compassion at the heart of everything</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-gray-600">Impacting communities across Africa</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Impact Driven</h4>
              <p className="text-gray-600">Sustainable and measurable change</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To awaken the spirit of humanity by mobilizing individuals, institutions, and networks to transform communities through love-driven service, shared knowledge, and sustainable development.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              A world where every human, regardless of background, can access the tools, opportunities, and support needed to live a life of dignity, health, purpose, and peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
