import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState('Skills');

  const content = {
        Skills: (
      <div>
        <strong className="text-2xl mb-6 block">Technical Skills</strong>
        <div className="w-full px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 w-full">
  {[
    {
      icon: <FaPython className="text-5xl text-yellow-300 mb-3" />,
      title: "Python",
      type: "Programming",
      desc: "Experienced in scripting, automation and data analysis."
    },
    {
      icon: <FaJava className="text-5xl text-orange-400 mb-3" />,
      title: "Java",
      type: "Programming",
      desc: "Object-oriented programming for backend and Android apps."
    },
    {
      icon: <FaReact className="text-5xl text-cyan-400 mb-3" />,
      title: "React",
      type: "Frontend",
      desc: "Building interactive and dynamic user interfaces."
    },
    {
      icon: <FaJs className="text-5xl text-yellow-400 mb-3" />,
      title: "JavaScript",
      type: "Frontend",
      desc: "Core scripting for web interactivity and logic."
    },
    {
      icon: <FaHtml5 className="text-5xl text-orange-500 mb-3" />,
      title: "HTML",
      type: "Frontend",
      desc: "Structuring web pages with semantic markup."
    },
    {
      icon: <FaCss3Alt className="text-5xl text-blue-400 mb-3" />,
      title: "CSS",
      type: "Frontend",
      desc: "Styling and responsive design for modern UIs."
    },
    {
      icon: <FaNodeJs className="text-5xl text-green-400 mb-3" />,
      title: "Node.js",
      type: "Backend",
      desc: "Server-side scripting and REST API development."
    },
    {
      icon: <FaGitAlt className="text-5xl text-orange-300 mb-3" />,
      title: "Git",
      type: "Version Control",
      desc: "Collaboration and code management with GitHub."
    }
  ].map((skill, idx) => (
    <motion.div
      key={skill.title}
      className="bg-gray-900 bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center w-full h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      {skill.icon}
      <span className="text-xl font-bold mb-2">{skill.title}</span>
      <span className="text-sm text-blue-200 mb-2">{skill.type}</span>
      <span className="text-base text-gray-300 text-center">{skill.desc}</span>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    ),

    Education: (
      <p>
        <strong>Education</strong> <br />
        Information Technology at the Institute of Technology,<br />
        University of Moratuwa<br/>
        2023 Present<br/>
        Pursuing a comprehensive degree program focused on software engineering, web development, database system and modern computing technologies. <br/>Gained hands-on experience through academic projects, group work and practical labs, with a strong emphasis on user-centered design and real-world application development.
      </p>
    ),


    Goals: (
      <p>
        <strong>Career Aspiration</strong> <br />
        To become a full-stack developer focused on user-centered design.
      </p>
    )
  };

  const tabs = Object.keys(content);

  return (
    <section 
      id="about"
      className="bg-gradient-to-b from-green-950 to-blue-950 text-white p-10 min-h-screen flex flex-col items-center justify-start">
      
      <div className="text-3xl font-bold mb-6">About Me</div>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              activeTab === tab ? 'bg-white text-blue-900' : 'bg-blue-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-3/4 text-center text-lg"
      >
        {content[activeTab]}
      </motion.div>
    </section>
  );
}