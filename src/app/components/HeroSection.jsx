"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const resumePDF = "/Younus_syed_resume.pdf";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue to-blue-300 
            300"
            >
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Younus",
                1000,
                "a Software Engineer",
                1000,
                "a Aws Practitioner",
                1000,
                "a DevOps Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a software engineer, I'm passionate about crafting cutting-edge
            software solutions. I have diverse skills in programming languages,
            frameworks, and tools. I'm experienced in Linux administration and
            hold a Cloud Practitioner certification. Seeking an internship to
            apply my skills to solve intricate challenges and deliver innovative
            solutions.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-blue-500 
              to-blue-300 hover:bg-slate-200 text-white"
            >
              Contact me
            </Link>
            <Link
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-blue-500 
  to-blue-300 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400] lg:h-[400] sm:ml-20 relative">
            <Image
              src="/images/cute-boy.png"
              alt="cute-boy"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:-translate-x-1/4 sm:-translate-y-1/4 sm:top-1/4 sm:left-1/4"
              width={500}
              height={500}
          
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
