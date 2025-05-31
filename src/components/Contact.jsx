// src/components/Contact.jsx
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic front-end validation
    const form = formRef.current;
    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();
    if (!name || !email || !message) {
      setErrorMsg("All fields are required.");
      return;
    }

    setStatus("sending");

    // ─── Replace these with your actual IDs from EmailJS ───
    const SERVICE_ID = "service_t2uya1r";
    const TEMPLATE_ID = "template_satuaxm";
    const USER_ID = "l96qte7300CG8Oume";
    // ───────────────────────────────────────────────────────

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setStatus("success");
          form.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setErrorMsg("Failed to send message. Please try again later.");
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white flex items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        {/* ─── Header with Icon (now smaller) ─── */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4">
          <div className="flex items-center space-x-2">
            <FaEnvelopeOpenText className="text-white text-xl" />
            <h2 className="text-3xl font-extrabold text-white">Contact Me</h2>
          </div>
        </div>

        {/* ─── Form Container ─── */}
        <div className="px-8 py-8">
          {status === "success" ? (
            <div className="text-center">
              <p className="text-green-400 text-xl font-semibold mb-4">
                Thank you! Your message has been sent.
              </p>
              <FaPaperPlane className="text-green-400 text-3xl mx-auto" />
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {errorMsg && (
                <p className="text-red-400 text-sm text-center">{errorMsg}</p>
              )}

              {/* ─── Name Field ─── */}
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-700 placeholder-gray-400 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* ─── Email Field ─── */}
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-700 placeholder-gray-400 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* ─── Message Field ─── */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-700 placeholder-gray-400 text-white rounded-lg py-2 px-4 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              {/* ─── Submit Button ─── */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`flex items-center justify-center space-x-2 ${
                  status === "sending"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold px-6 py-2 rounded-lg transition`}
              >
                <span>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
                {status !== "sending" && <FaPaperPlane className="text-lg" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
