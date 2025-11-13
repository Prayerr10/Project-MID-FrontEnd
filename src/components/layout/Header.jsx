import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'hobbies', label: 'Hobi' },
    { id: 'generations', label: 'Semester' },
    { id: 'evolution', label: 'Akademik' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/profile-header.jpg" 
              alt="Prayer Yosua" 
              className="w-10 h-10 rounded-lg object-cover border border-gray-300"
            />
            <div>
              <h1 className="font-semibold text-gray-900">Kaawoan, Prayer Yosua Immanuel</h1>
              <p className="text-sm text-gray-500">Universitas Klabat</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;