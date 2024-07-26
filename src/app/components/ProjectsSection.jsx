"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chess Minigame",
    description: "chess mini-game seamlessly integrates advanced topics, such as Exception Handling, Version Control, Multithreading, and Socket Programming. ",tag: ["All", "Web"],
    image: "/images/projects/Chess.png",
    gitUrl: "https://github.com/ysyed9/Chess",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ai-Chatbot",
    description: "A multi-turn conversational AI application designed to engage users in interactive conversations. With Gemini Chatbot, users can ask questions, receive responses, and main conversation history",
    image: "/images/projects/AI-Chatbot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ysyed9/gemini",
    previewUrl: "https://gemini-ten-gilt.vercel.app/",
  },
  {
    id: 3,
    title: "Python Projects",
    description: " Python projects that showcase my proficiency in a wide range of Python coding skills, spanning from fundamental to advanced levels.",
    image: "/images/projects/Python.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/younussyed01/Python",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AWS Cloud Architect: Scalable 3-Tier Infrastructure",
    description: " scalable 3-tier AWS architecture on Red Hat Linux 9. Configured Apache, Tomcat, MongoDB. Ensured loose coupling for independent server operation. Integrated proxy for seamless communication between all servers. ",
    image: "/images/projects/AWS.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A portfolio website built with Next.js and Tailwind CSS. It showcases your skills, projects, and achievements in an elegant and responsive design",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ysyed9/Portfolio-Website.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">       
      
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
