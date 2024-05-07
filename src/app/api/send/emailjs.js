'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Image from 'next/image';


export default function Emailjs() {
  const [formValues, setFormValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);

  useEffect(() => {
    const { email, subject, message } = formValues;
    setIsFormIncomplete(!email || !subject || !message);
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "lmoiIWkqgOGyaGwcZ";
    emailjs.init(publicKey);

    const serviceID = "service_p1ssj3f";
    const templateID = "template_ju6bg6c";

    emailjs.sendForm(serviceID, templateID, e.target)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsEmailSent(true);
        setFormValues({
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/younussyed989">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/younus-syed-8457802a5/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter email..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={formValues.subject}
                onChange={handleInputChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleInputChange}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-300 hover:bg-black text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={isFormIncomplete}
            >
              Send Message
            </button>
            {isEmailSent && (
      <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
      )}
          </form>
      </div>
    </section>
  );
};