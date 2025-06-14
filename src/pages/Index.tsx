
import React from 'react';
import { Heart, Users, Globe, Award, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Gallery from '../components/Gallery';
import Membership from '../components/Membership';
import Partnership from '../components/Partnership';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Membership />
      <Partnership />
      <Donations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
