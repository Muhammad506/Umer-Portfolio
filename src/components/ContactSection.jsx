import React, { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactSection = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_k79h9fb",
        "template_74ta5ca",
        formRef.current,
        "XH-30Hvl4NcGTa1xb"
      )
      .then(
        (result) => {
          setSending(false);
          formRef.current.reset();

          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you shortly.",
            confirmButtonColor: "#CE7BFF",
            background: "#191919",
            color: "#ffffff",
            theme: "dark",
          });
        },
        (error) => {
          setSending(false);
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#f00",
            background: "#191919",
            color: "#ffffff",
            theme: "dark",
          });
        }
      );
  };

  const inputStyle =
    "w-full bg-transparent p-3 rounded border border-white/20 focus:border-secondary transition duration-200 outline-none placeholder-gray-400";
  const labelStyle = "block uppercase mb-1 text-sm text-gray-300";

  return (
    <section className="py-20" id="contact">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaEnvelope /> Contact
      </h2>
      <h2 className="text-5xl mb-6">
        Let's Work <span className="text-secondary">Together!</span>
      </h2>
      <div className="text-lg flex flex-col gap-2 text-gray-400 mb-10">
        <p>Have a project in mind or need more information?</p>
        <p>I’d love to hear from you!</p>
      </div>

      <div
        className="p-8 rounded-2xl 
                   bg-white/5 backdrop-blur-sm shadow-2xl border border-white/10 
                   max-w-4xl mx-auto"
      >
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
        >
          <div>
            <label className={labelStyle}>Full Name *</label>
            <input
              name="user_name"
              type="text"
              required
              placeholder="Your Full Name"
              className={inputStyle}
            />
          </div>
          <div>
            <label className={labelStyle}>Email *</label>
            <input
              name="user_email"
              type="email"
              required
              placeholder="Your email address"
              className={inputStyle}
            />
          </div>
          <div>
            <label className={labelStyle}>Phone (optional)</label>
            <input
              name="user_phone"
              type="text"
              placeholder="Your phone number"
              className={inputStyle}
            />
          </div>
          <div>
            <label className={labelStyle}>Subject *</label>
            <select
              name="subject"
              required
              className={`${inputStyle} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-zinc-800 text-gray-400">
                Select a subject
              </option>
              <option value="Full-Stack Development" className="bg-zinc-800">
                Full-Stack Development
              </option>
              <option
                value="AI Integration / Automation"
                className="bg-zinc-800"
              >
                AI Integration / Automation
              </option>
              <option value="Web App Consultation" className="bg-zinc-800">
                Web App Consultation
              </option>
              <option
                value="Collaboration / Partnership"
                className="bg-zinc-800"
              >
                Collaboration / Partnership
              </option>
              <option
                value="Job / Freelance Opportunity"
                className="bg-zinc-800"
              >
                Job / Freelance Opportunity
              </option>
              <option value="Other" className="bg-zinc-800">
                Other
              </option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelStyle}>Message *</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className={`${inputStyle} h-36`}
              required
            />
          </div>

          <div className="flex justify-center md:col-span-2 mt-6">
            <button
              type="submit"
              disabled={sending}
              className="bg-secondary text-white px-10 py-3 rounded-full 
               font-bold tracking-wider uppercase transition duration-300
               hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
               flex justify-center items-center"
            >
              {sending ? "Sending..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
