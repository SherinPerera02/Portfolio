import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col items-center justify-center shadow-inner">
      <div className="text-lg font-semibold mb-2">Sherin Perera</div>
      <div className="text-sm mb-2">© {new Date().getFullYear()} All rights reserved.</div>
      <div className="flex space-x-6">
       <a
          href="mailto:your.email@example.com"
          className="hover:text-blue-400 transition-colors duration-200 flex items-center"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200 flex items-center"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200 flex items-center"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}