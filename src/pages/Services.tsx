
import React from 'react';
import { Heart, Users, Leaf, BookOpen, Scale, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Medical Outreach & Health Education",
      description: "Improving access to healthcare in underserved areas, in line with SDG 3.",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Users,
      title: "Youth Development & Mentorship",
      description: "Empowering the youth demographic, aligned with CSocD and CPD priorities.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Scale,
      title: "Community Advocacy & Social Mobilization",
      description: "Promoting inclusive civic participation and social cohesion.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: BookOpen,
      title: "Women's Empowerment & Livelihood Programs",
      description: "Advancing gender equity as outlined by the CSW.",
      color: "text-pink-600 bg-pink-50"
    },
    {
      icon: Home,
      title: "Peacebuilding & Cultural Re-integration",
      description: "Fostering social stability and post-conflict healing in fragile regions.",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Leaf,
      title: "Environmental Education & Climate Resilience",
      description: "Supporting ecological justice and sustainable living.",
      color: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">What We Do</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At KCODEGIN, we don't just respond to needs, we anticipate them. We don't just offer charity, we build capacity. And we don't just speak of love—we demonstrate it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Impact Philosophy */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Our Impact Philosophy</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Whether you're an individual with a big heart, a community leader, a donor, or an organization looking to partner, there is a place for you here. Join us in rewriting stories, rebuilding dignity, and restoring hope across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/partnership"
                className="inline-flex items-center space-x-2 bg-amber-600 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 shadow-lg"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
