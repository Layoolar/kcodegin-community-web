
import React from 'react';
import { Heart, Users, Leaf, BookOpen, Scale, Home } from 'lucide-react';

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At KCODEGIN, we don't just respond to needs, we anticipate them. We don't just offer charity, we build capacity. And we don't just speak of love—we demonstrate it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Impact Philosophy</h3>
            <p className="text-lg">
              Whether you're an individual with a big heart, a community leader, a donor, or an organization looking to partner, there is a place for you here. Join us in rewriting stories, rebuilding dignity, and restoring hope across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
