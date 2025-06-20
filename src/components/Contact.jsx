import React from 'react';

export default function Contact() {
  return (
    <section 
      id="contact"
      className="bg-gradient-to-b from-green-950 to-gray-900 text-white p-10 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <p className="mb-6 text-lg text-center">
        I’m always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out!</p>
      <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-12 w-full max-w-2xl flex flex-col items-center">
        <form className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-black transition-colors duration-300 font-semibold mt-2 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}