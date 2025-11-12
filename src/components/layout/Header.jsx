import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'organization', label: 'Organisasi' },
    { id: 'hobbies', label: 'Hobi' },
    { id: 'generations', label: 'Semester' },
    { id: 'evolution', label: 'Perkembangan' }
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Logo dengan Foto */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/profile.jpg" 
              alt="Prayer Yosua" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold tracking-tight">Prayer Yosua</h1>
              <p className="text-blue-200 text-sm">UNKLAB Informatics</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-200 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;