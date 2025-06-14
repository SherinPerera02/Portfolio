import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white px-8 py-6 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Sherin Perera</div>
      <div className="space-x-12">
        {["home", "about", "projects", "contact"].map((section) => (
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
    </nav>
  );
}

