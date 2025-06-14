import { motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section
      id="home"
       className="bg-gradient-to-b from-blue-950 to-green-950 text-white p-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-left">
      
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl text-lg md:mr-12"
        >
          <h1 className="text-3xl font-bold">Hi, I'm Sherin Perera</h1>
          <h3 className="text-xl mt-2">
            I’m an undergraduate student in Information Technology at the Institute of Technology, University of Moratuwa
          </h3>
          <p className="mt-4 text-lg">
            This website is my personal portfolio, a place where I introduce myself, share what I’ve learned and highlight the projects I’ve built during my academic journey.
          </p>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-black transition-colors duration-300 font-semibold mt-2 cursor-pointer">
            Hire Me
          </button>
        </motion.div>
       
       <motion.img
          src="MyProffile.jpeg"
          alt="Profile"
          className="rounded-full mb-8 md:mb-0 md:ml-12 w-100 h-100 shadow-lg object-cover"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
        />
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}