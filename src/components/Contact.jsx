import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/movnobab', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(true);
    }
  }

  return (
    <section 
      id="contact"
      className="bg-gradient-to-b from-green-950 to-gray-900 text-white p-10 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <p className="mb-6 text-lg text-center">
        I’m always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out!</p>
      <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-12 w-full max-w-2xl flex flex-col items-center">
        {submitted ? (
          <div className="text-gray-200 text-lg font-semibold">Thank you! Your message has been sent.</div>
        ) : (
          <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-black transition-colors duration-300 font-semibold mt-2 cursor-pointer"
            >
              Send Message
            </button>
            {error && (
              <div className="text-red-400 text-sm mt-2">Sorry, something went wrong. Please try again later.</div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}