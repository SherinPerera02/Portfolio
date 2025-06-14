import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A web app for task management.',
    tech: 'React, Node.js',
    github: 'https://github.com/username/project-one',
    image: 'gallery1.jpg'
  },
  {
    title: 'Project Two',
    description: 'Portfolio website.',
    tech: 'React, TailwindCSS',
    github: 'https://github.com/username/project-two',
    image: 'gallery2.jpg'
  },
  {
    title: 'Project Three',
    description: 'Weather app using API integration.',
    tech: 'React, OpenWeather API',
    github: 'https://github.com/username/project-three',
    image: 'gallery3.jpg'
  }
];

export default function Projects() {
  return (
    <section 
    id="projects"
    className="p-6 min-h-screen bg-gradient-to-b from-blue-950 to-green-950 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center mx-auto">Projects</h2>
      <p className="mb-6 text-lg text-center mx-auto">
        Here are some of the projects I’ve built during my academic journey.<br/> Each project reflects my passion for technology, problem-solving and user-centered design.
      </p>
      <div className="flex flex-col md:flex-row mb-8 gap-8 justify-center items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-900 p-6 rounded-lg shadow-lg w-full min-h-[60vh] max-w-xs flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full h-40 object-cover rounded transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm mb-4">Tech: {project.tech}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-black transition-colors duration-300 font-semibold mt-2"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}