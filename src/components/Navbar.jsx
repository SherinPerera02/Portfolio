import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["home", "about", "projects", "contact"];
  return (
    <nav className="bg-blue-950 text-white px-4 py-4 flex justify-between items-center shadow-md relative z-50">
      <div className="text-xl font-bold">Sherin Perera</div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        {sections.map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            whileHover={{ scale: 1.15, color: "#38bdf8" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="transition-colors duration-200"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.a>
        ))}
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-950 flex flex-col items-center py-4 z-50 md:hidden shadow-lg animate-fade-in">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="py-2 text-lg w-full text-center border-b border-blue-900 last:border-b-0 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </div>
      )}
    </nav>
  );
}

