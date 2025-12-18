import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Party Menu App",
    image: "/images/projects/partyMenuApp.png",
    description:
      "A mobile application that helps users to create and manage party menus with ease.",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/imran0494",
    previewUrl: "https://github.com/imran0494/Party_Menu_Search_App",
  },
  {
    id: 2,
    title: "React cards Slider",
    image: "/images/projects/cards-slider.png",
    description:
      "This is a cards slider app where different cards can move here and there by selecting them build using React.js",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imran0494/Card-Slider.git",
    previewUrl:
      "https://www.linkedin.com/posts/mohammad-imran-925782230_30dayschallenge-reactjs-framermotion-activity-7157453799106764800-z8hl?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "Currency Converter reactjs app",
    image: "/images/projects/currency-converter.jpeg",
    description:
      "This app use to convert currency of different nations using API and build using React.js",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imran0494",
    previewUrl:
      "https://www.linkedin.com/posts/mohammad-imran-925782230_30dayschallenge-reactjs-tailwindcss-activity-7153472372468076544-M8D5?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "Login and registeration form",
    image: "/images/projects/login-page.jpeg",
    description: "This is a Registration and Login page with beautiful UI.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imran0494/Login-Registration-Page.git",
    previewUrl: "https://registerloginpage.netlify.app/",
  },
  {
    id: 5,
    title: "Progress Bar showing percentage of skills",
    image: "/images/projects/progress-bar.jpeg",
    description:
      "This is a Progress Bar showing percentage of skills using circular progress bar having gradient color.",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/imran0494?tab=repositories",
    previewUrl:
      "https://www.linkedin.com/posts/mohammad-imran-925782230_30dayschallenge-webdevelopment-html5-activity-7152712268747575296-p2wB?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "Weather forecast app",
    image: "/images/projects/weather-app.jpeg",
    description:
      "This is a Weather forecast app which shows weather of different cities using API and build using React.js",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imran0494",
    previewUrl: "https://github.com/imran0494",
  },
  {
    id: 7,
    title: "Image Slider",
    image: "/images/projects/image-slider.jpeg",
    description: "This is a image slider using html css .",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/imran0494",
    previewUrl: "https://csshovermagic.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSetTag = (newTag) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6 ">
        <ProjectsTag
          name="All"
          onClick={() => handleSetTag("All")}
          isSelected={tag === "All"}
        />
        <ProjectsTag
          name="Web"
          onClick={() => handleSetTag("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectsTag
          name="Mobile"
          onClick={() => handleSetTag("Mobile")}
          isSelected={tag === "Mobile"}
        />
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

export default ProjectSection;
