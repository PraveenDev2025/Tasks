import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLaptop, FaPaperPlane } from "react-icons/fa";

export default function NormalContact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
  };

  return (
    <section className="container bg-white px-6 py-10 md:shadow-[0_0_35px_rgba(0,0,0,0.25)]">
      <div className="mb-[44px] text-[24px] font-[600] text-[#1e2434]">
        <h1>ANY QUERIES</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="relative flex items-center w-full">
            <FaUser className="absolute right-[20px] text-[#707582] text-[18px]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="relative flex items-center w-full">
            <FaEnvelope className="absolute right-[20px] text-[#707582] text-[18px]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative flex items-center w-full">
            <FaPhone className="absolute right-[20px] text-[#707582] text-[18px]" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Subject */}
          <div className="relative flex items-center w-full">
            <FaLaptop className="absolute right-[20px] text-[#707582] text-[18px]" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message */}
          <div className="relative flex items-center w-full md:col-span-2">
            <FaPaperPlane className="absolute right-[20px] top-[25px] text-[#707582] text-[18px]" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[120px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in resize-none"
              placeholder="Your Message..."
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded flex items-center gap-2 my-6"
        >
          <span className="text-lg">➜</span> SUBMIT
        </button>
      </form>
    </section>
  );
}
