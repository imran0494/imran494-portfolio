import React, { useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native / React JS</li>
        <li>JavaScript / C++ </li>
        <li>MERN</li>
        <li>Tailsind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering in Computer Science</li>
        <li>Chandigarh University</li>
        <li>Score: 7.8 CGPA</li>
        <li>August 2020 - June 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS from Internshala Training</li>
        <li>Web Development Summer Training from Chandigarh University</li>
        <li>Front End Development Libraries</li>
        <li>MERN Stack Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          className="rounded-xl"
          src={"/images/about.jpg"}
          alt="About"
          width={600}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a passionate ReactJS and React Native developer, I specialize in
            crafting immersive and dynamic user interfaces for App (in IOS and
            Android) and web. Leveraging React&apos;s component-based
            architecture, I design scalable web and mobile applications with
            reusable and efficient UI components. I consume Rest APIs, manage
            state with Redux, and use Git and GitHub for version control and
            collaboration. My expertise extends to backend development with
            Node.js and programming in C++ and JavaScript, and I actively
            explore the exciting realms of Generative AI and AI tools. A quick
            learner with a flair for adopting cutting-edge technologies, I bring
            a versatile and innovative approach to every project I undertake.
          </p>
          <div className="flex flex-row text-xl mt-8">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
