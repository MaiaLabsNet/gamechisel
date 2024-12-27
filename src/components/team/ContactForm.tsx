// ContactForm.tsx

"use client";

// Imports
import React, { useState } from "react";
import SectionHeader from "../base/SectionHeader";

const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract form values
    const firstName = e.currentTarget["first-name"].value;
    const lastName = e.currentTarget["last-name"].value;
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;

    // Check if any field is empty
    if (!firstName || !lastName || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // Email regex to validate the format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset error message
    setError(null);

    // Prepare data for sending
    const data = { firstName, lastName, email, message };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/resend";

    // Prepare the request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send data to the server
    const response = await fetch(endpoint, options);

    // Handle response
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="container contx conty">
      <SectionHeader title="Write to Us" subtitle="Contact" description="" />

      <div className="relative flex flex-col bg-clip-border rounded-xl bg-[#0b0b0b] mx-auto">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          {/* Contact Information Section */}
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16">
            <h3 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
              Contact Information
            </h3>
            <p className="block antialiased text-inherit mb-8 text-base simple-text">
              Answer may take a while. Please be patient.
            </p>
            <div className="flex my-2 gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-white"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
              </svg>
              <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
                mail@gamechisel.com
              </h4>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                {/* First Name */}
                <div className="relative w-full min-w-[200px] h-16 mb-3">
                  <input
                    id="first-name" // Add id attribute
                    placeholder="Ben"
                    className="peer w-full h-full bg-transparent text-white font-sans font-normal border-b border-gray-300 focus:border-gray-300 placeholder-transparent focus:outline-none px-2 pt-6 pb-2 text-sm"
                    name="first-name"
                    disabled={emailSubmitted}
                  />
                  <label
                    htmlFor="first-name" // Associate label with input
                    className="unselectable absolute left-2 top-2 text-sm text-gray-800 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-gray-900"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative w-full min-w-[200px] h-16">
                  <input
                    id="last-name" // Add id attribute
                    placeholder="Kenobi"
                    className="peer w-full h-full bg-transparent text-white font-sans font-normal border-b border-gray-300 focus:border-gray-300 placeholder-transparent focus:outline-none px-2 pt-6 pb-2 text-sm"
                    name="last-name"
                    disabled={emailSubmitted}
                  />
                  <label
                    htmlFor="last-name" // Associate label with input
                    className="unselectable absolute left-2 top-2 text-sm text-gray-800 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-gray-900"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative w-full min-w-[200px] h-16 mb-8">
                <input
                  id="email" // Add id attribute
                  placeholder="eg. mail@gamechisel.com"
                  className="peer w-full h-full bg-transparent text-white font-sans font-normal border-b border-gray-300 focus:border-gray-300 placeholder-transparent focus:outline-none px-2 pt-6 pb-2 text-sm"
                  name="email"
                  disabled={emailSubmitted}
                />
                <label
                  htmlFor="email" // Associate label with input
                  className="unselectable absolute left-2 top-2 text-sm text-gray-800 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-gray-900"
                >
                  Your Email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative w-full min-w-[200px] h-32 mb-3 pb-6">
                <textarea
                  id="message" // Add id attribute
                  placeholder="Message"
                  className="peer w-full h-full bg-transparent text-white font-sans font-normal border-b border-gray-300 focus:border-gray-300 placeholder-transparent placeholder-focus:outline-none px-2 pt-6 pb-2 text-sm resize-none"
                  name="message"
                  disabled={emailSubmitted}
                />
                <label
                  htmlFor="message" // Associate label with textarea
                  className="unselectable absolute left-2 top-2 text-sm text-gray-800 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-gray-900"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              {!emailSubmitted && (
                <button
                  type="submit"
                  className="w-full h-12 py-2 px-4 text-sm text-white rounded-full font-semibold bg-gray-900 hover:bg-gray-800 transition-all"
                  disabled={emailSubmitted}
                >
                  Submit
                </button>
              )}
            </form>

            {/* Error message at the bottom */}
            {error && (
              <div className="mt-4 text-center text-red-600">
                <p>{error}</p>
              </div>
            )}

            {/* Success message */}
            {emailSubmitted && (
              <div className="mt-4 text-center text-gray-900">
                <p>Successfully Sent!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
