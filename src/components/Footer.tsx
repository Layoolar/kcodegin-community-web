
import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b596279c-ecb1-4964-99d1-f3293752572d.png" 
                alt="KCODEGIN Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">KCODEGIN</h3>
                <p className="text-gray-400 text-sm">Kings Community Development Global Initiative</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building compassionate, inclusive, and resilient communities through education, healthcare, social integration, and empowerment initiatives across Africa and beyond.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <Heart className="h-5 w-5" />
              <span className="italic">"If we all look out for one another, no one will be left behind."</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">What We Do</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Our Team</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Gallery</a></li>
              <li><a href="#membership" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Membership</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Partnership</a></li>
              <li><a href="#donations" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Donate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  No 1, Hospital Road, Asubiaro<br />
                  Osogbo, Osun State, Nigeria
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a href="mailto:kcodegin@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                  kcodegin@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <a href="tel:+2348136795490" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                  +234 813 679 5490
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 text-gray-300 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 text-gray-300 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 text-gray-300 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kings Community Development Global Initiative (KCODEGIN). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
