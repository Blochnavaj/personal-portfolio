import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

function ContactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "79db56d4-056c-4817-9a43-a8c7e6954b83");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success" });
      event.target.reset();
    } else {
      Swal.fire({ title: "Error!", text: "Please try again.", icon: "error" });
    }
  };

  return (
    <motion.div className="container mx-auto py-8 px-4" id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <input className="w-full p-3 border rounded-lg focus:ring-2 outline-none focus:ring-gray-600" type="text" placeholder="Your Name" name="name" required />
          <input className="w-full p-3 border rounded-lg focus:ring-2 outline-none focus:ring-gray-600" type="email" name="email" placeholder="Your Email" required />
          <textarea className="w-full p-3 border rounded-lg focus:ring-2 outline-none focus:ring-gray-600" name="message" rows="5" placeholder="How Can I Help You?" required></textarea>
          <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-700 transition">Get in Touch</button>
        </form>

        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-5xl font-bold">Let's <span className="text-indigo-600">Talk</span> About Your Project</h2>
          <p className="text-gray-600">Pushing creative limits to deliver high-quality, user-centric web experiences.</p>
          <a href="mailto:navaj.bloch22@gmail.com" className="block text-2xl font-semibold">navaj.bloch22@gmail.com</a>
          <a href="tel:+917383034778" className="block text-2xl font-semibold">+91-7383034778</a>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {/* Social icons here */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
