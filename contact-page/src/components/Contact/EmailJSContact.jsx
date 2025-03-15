import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLaptop,
  FaPaperPlane,
} from "react-icons/fa";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "This field is required.";
  }

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "This field is required.";
  }

  if (!values.subject) {
    errors.subject = "This field is required.";
  }

  if (!values.message) {
    errors.message = "This field is required.";
  }

  return errors;
};

export default function EmailJSContact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            alert("Message sent successfully!");
            resetForm();
          },
          () => {
            alert("Failed to send message, please try again.");
          }
        );
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <section className="container bg-white px-6 py-10 md:shadow-[0_0_35px_rgba(0,0,0,0.25)]">
      <div className="mb-[44px] text-[24px] font-[600] text-[#1e2434]">
        <h1>ANY QUERIES</h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <div className="relative flex items-center w-full">
              <FaUser className="absolute right-[20px] text-[#707582] text-[18px]" />
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
                placeholder="Your Name"
              />
            </div>
            {/* name field error */}
            {formik.errors.name ? (
              <div className="text-[#707582] pt-2">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <div className="relative flex items-center w-full">
              <FaEnvelope className="absolute right-[20px] text-[#707582] text-[18px]" />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
                placeholder="Email Address"
              />
            </div>
            {/* email field error */}
            {formik.errors.email ? (
              <div className="text-[#707582] pt-2">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <div className="relative flex items-center w-full">
              <FaPhone className="absolute right-[20px] text-[#707582] text-[18px]" />
              <input
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
                placeholder="Phone Number"
              />
            </div>
            {/* phone field error */}
            {formik.errors.phone ? (
              <div className="text-[#707582] pt-2">{formik.errors.phone}</div>
            ) : null}
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <div className="relative flex items-center w-full">
              <FaLaptop className="absolute right-[20px] text-[#707582] text-[18px]" />
              <input
                type="text"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                className="w-full bg-white h-[58px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in"
                placeholder="Subject"
              />
            </div>
            {/* subject field error */}
            {formik.errors.subject ? (
              <div className="text-[#707582] pt-2">{formik.errors.subject}</div>
            ) : null}
          </div>

          {/* Message */}
          <div className="flex flex-col w-full md:col-span-2">
            <div className="relative flex items-center">
              <FaPaperPlane className="absolute right-[20px] top-[25px] text-[#707582] text-[18px]" />
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="w-full h-[120px] text-[18px] border border-[#e1e8e4] text-[#707582] px-[10px] py-[20px] pr-[50px] focus:outline-none focus:border-black transition-all duration-300 ease-in resize-none"
                placeholder="Your Message..."
              />
            </div>
            {/* message field error */}
            {formik.errors.message ? (
              <div className="text-[#707582] pt-2">{formik.errors.message}</div>
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded flex items-center gap-2 my-6 cursor-pointer"
        >
          <span className="text-lg">➜</span> SUBMIT
        </button>
      </form>
    </section>
  );
}
