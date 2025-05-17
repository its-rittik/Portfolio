import React from 'react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Work Experience', to: 'work' },
  { name: 'Research', to: 'research' },
  { name: 'Projects', to: 'projects' },
  { name: 'Volunteering', to: 'volunteering' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#10111A] sticky top-0 z-50 border-b border-[#23243a]">
      <div className="text-2xl font-bold text-yellow-500">R</div>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <button
            key={link.to}
            onClick={() => handleScroll(link.to)}
            className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 