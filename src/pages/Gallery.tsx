import React from 'react';
import { Camera } from 'lucide-react';

const images = [
  {
    src: "/lovable-uploads/d1e6b49f-2415-4613-9ceb-82e04ffae764.png",
    alt: "Community health consultation and documentation",
    title: "Community Health Outreach"
  },
  {
    src: "/lovable-uploads/bb13ab70-cfd9-45b5-a3fc-1437030b3537.png",
    alt: "Healthcare team providing medical services to community members",
    title: "Medical Support Services"
  },
  {
    src: "/lovable-uploads/cbccdf30-931f-4cb8-ba62-57675b46de3b.png",
    alt: "Healthcare professional conducting medical examinations",
    title: "Mobile Medical Clinic"
  },
  {
    src: "/lovable-uploads/21316f9c-3d99-43c4-b8a6-86d736e00b23.png",
    alt: "Students in classroom receiving education",
    title: "Educational Programs"
  },
  {
    src: "/lovable-uploads/40efbced-ce42-4f70-9179-8738ad9fab2f.png",
    alt: "Community education session in progress",
    title: "Community Education"
  },
  {
    src: "/lovable-uploads/0520d7a7-83d7-4069-a4b4-54ffeab4e691.png",
    alt: "Youth mentorship and training session",
    title: "Youth Development"
  },
  {
    src: "/lovable-uploads/9b89c417-375f-43bb-b0d5-7ba5c0a71630.png",
    alt: "Educational presentation to students",
    title: "Educational Outreach"
  },
  {
    src: "/lovable-uploads/4133cc2d-0758-4dcd-8145-8ea279fb138e.png",
    alt: "Students celebrating with certificates",
    title: "Achievement Recognition"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Impact Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the transformative power of community action through our photo gallery showcasing real impact across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stories of Hope and Transformation */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Stories of Hope and Transformation</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Every image tells a story of lives touched, communities transformed, and hope restored. These moments capture the essence of our mission in action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
