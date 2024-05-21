"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "VelocityView⚡",
    description: "VelocityView is a high-performance API built with Hono, Next.js, and Cloudflare, designed to deliver lightning-fast query results in milliseconds.",
    image: "/images/projects/VelocityView.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhiiVops/VelocityView",
    previewUrl: "https://github.com/AbhiiVops/VelocityView",
  },
  {
    id: 2,
    title: "WebThreadLoom🧵",
    description: "WebThreadLoom is an implementations of Java web servers using different concurrency models: Single Threaded, Multithreaded, and ThreadPool. The web servers are implemented using Java's ServerSocket and Socket classes to handle client requests. The web servers are tested using JMeter to measure their performance under different loads.",
    image: "/images/projects/WebThreadLoom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhiiVops/WebThreadLoom",
    previewUrl: "https://github.com/AbhiiVops/WebThreadLoom",
  },
  {
    id: 3,
    title: "Flask Web Application",
    description: "This is a basic Flask web application along with a CI/CD pipeline implemented using GitHub Actions and deployed using AWS Elastic Beanstalk and stored in an AWS S3 bucket. The pipeline automates the testing and deployment process of the web application.",
    image: "/images/projects/FlaskApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhiiVops/flask-app-eric-robotics",
    previewUrl: "https://github.com/AbhiiVops/flask-app-eric-robotics",
  },
  {
    id: 4,
    title: "Imagini",
    description: "Imagini: AI-driven platform automating content creation tasks like image generation, video production, code generation, and music composition.",
    image: "/images/projects/Imagini.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/AbhiiVops/Imagini",
    previewUrl: "https://github.com/AbhiiVops/Imagini",
  },
  {
    id: 5,
    title: "Community Events Management Platform",
    description: "This is a Community Events Management Platform! This platform allows users to manage community events, including registration, creation, updating, deletion, and RSVP functionalities architected using Django",
    image: "/images/projects/EventManage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhiiVops/Event-management-Platform",
    previewUrl: "https://github.com/AbhiiVops/Event-management-Platform",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id} // Corrected: key prop should be here
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
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
