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
            confirmButtonColor: "#23b06c",
            background: "#191919",
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
          });
        }
      );
  };

  return (
    <section className="py-20" id="contact">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaEnvelope /> Contact
      </h2>
      <h2 className="text-5xl mb-6">
        Let's Work <span className="text-secondary">Together!</span>
      </h2>
      <div className="text-lg flex flex-col gap-2 text-gray-400 mb-6">
        <p>Have a project in mind or need more information?</p>
        <p>I’d love to hear from you!</p>
        <p>
          Fill out the form below, and I’ll get back to you as soon as possible:
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
      >
        <div>
          <label className="block uppercase mb-1">Full Name *</label>
          <input
            name="user_name"
            type="text"
            required
            placeholder="Your Full Name"
            className="w-full bg-zinc-800 p-2 rounded"
          />
        </div>
        <div>
          <label className="block uppercase mb-1">Email *</label>
          <input
            name="user_email"
            type="email"
            required
            placeholder="Your email address"
            className="w-full bg-zinc-800 p-2 rounded"
          />
        </div>
        <div>
          <label className="block uppercase mb-1">Phone (optional)</label>
          <input
            name="user_phone"
            type="text"
            placeholder="Your phone number"
            className="w-full bg-zinc-800 p-2 rounded"
          />
        </div>
        <div>
          <label className="block uppercase mb-1">Subject *</label>
          <select
            name="subject"
            required
            className="w-full bg-zinc-800 p-2 rounded text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="Full-Stack Development">
              Full-Stack Development
            </option>
            <option value="AI Integration / Automation">
              AI Integration / Automation
            </option>
            <option value="Web App Consultation">Web App Consultation</option>
            <option value="Collaboration / Partnership">
              Collaboration / Partnership
            </option>
            <option value="Job / Freelance Opportunity">
              Job / Freelance Opportunity
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block uppercase mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here ..."
            className="w-full bg-zinc-800 p-2 rounded h-32"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={sending}
            className="bg-secondary text-white px-6 py-2 rounded-full mt-4"
          >
            {sending ? "Sending..." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
