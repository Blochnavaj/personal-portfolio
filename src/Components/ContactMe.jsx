 import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "79db56d4-056c-4817-9a43-a8c7e6954b83");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(res => res.json());

    if (res.success) {
      Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success" });
      event.target.reset();
    } else {
      Swal.fire({ title: "Error!", text: "Please try again.", icon: "error" });
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Form Section */}
        <form
          onSubmit={onSubmit}
          className="bg-white p-8 shadow-lg rounded-xl space-y-6 border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Send me a message 📬</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="How can I help you?"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
          >
            Get in Touch
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Let’s <span className="text-orange-500">talk</span> about your project
          </h2>
          <p className="text-gray-600 text-lg">
            I love collaborating and solving problems with clean, scalable code. Whether you're starting a new project or need improvements — let's connect!
          </p>
          <div className="space-y-2 text-xl font-medium">
            <a href="mailto:navaj.bloch22@gmail.com" className="block text-gray-800 hover:text-orange-500 transition">
              📧 navaj.bloch22@gmail.com
            </a>
            <a href="tel:+917383034778" className="block text-gray-800 hover:text-orange-500 transition">
              📞 +91-73830-34778
            </a>
          </div>
          <div className="flex gap-5 text-orange-500 text-xl mt-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/bloch-navaj" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-700 transition" />
            </a>
            <a href="https://github.com/Blochnavaj" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-700 transition" />
            </a>
            <a href="mailto:navaj.bloch22@gmail.com">
              <FaEnvelope className="hover:text-gray-700 transition" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMe;
