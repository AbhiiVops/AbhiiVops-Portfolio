"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

type TabDataType = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: TabDataType[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <span className="text-gradient font-semibold">Mobile Development:</span> Kotlin
        </li>
        <li>
          <span className="text-gradient font-semibold">Backend:</span> Django, FastAPI, Flask, Golang, Java, Python, SpringBoot
        </li>
        <li>
          <span className="text-gradient font-semibold">Devops Tools:</span> Ansible, Docker, Github Actions, Jenkins
        </li>
        <li>
          <span className="text-gradient font-semibold">Cloud:</span> AWS, Linux, Nginx
        </li>
        <li>
          <span className="text-gradient font-semibold">Database:</span> Firebase, MongoDB, MySQL, ORMs, PostgreSQL, Supabase
        </li>
        <li>
          <span className="text-gradient font-semibold">Platform:</span> Cloudflare, Streamlit, Vercel
        </li>
        <li>
          <span className="text-gradient font-semibold">Tools:</span> Docker Platform, Neovim, Postman, Git, Lens
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2 animate-fade-in">
        <li>Bhilai Institute of Technology, Durg</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2 animate-fade-in">
        <li><b>Azure AZ-900 Certification</b> - By Microsoft</li>
        <li><b>Jira Certification</b> - By Atlassian</li>
        <li><b>Postman Student Expert Certification</b> - By Postman</li>
        <li><b>Associate Android Developer</b> - By Internshala</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-4 space-y-2 animate-fade-in">
        <li><b>Unisys Semi Finalist 2024</b> - Organized by UNISYS</li>
        <li><b>SIH-Grand Finalist 2023</b> - Organized by Govt. of India</li>
        <li><b>SIDSET - Ideation Winner</b> - Organized by Postman</li>
        <li><b>BITSHINE'23 Hackathon Winner</b> - Organized by BIT</li>
        <li><b>Educator of the Year</b> - Awarded by Nerdy Academy</li>
      </ul>
    ),
  },
  {
    title: "Volunteering",
    id: "volunteering",
    content: (
      <ul className="list-disc pl-4 space-y-2 animate-fade-in">
        <li><b>CNCF Raipur Organizer⚡</b></li>
        <li><b>AWS Community Builder🔨</b></li>
        <li><b>Azure Developer Community Head🎧</b></li>
        <li><b>Micsrosoft Student Learn Ambassador🥑</b></li>
        <li><b>Postman Student Leader🧑‍🚀</b></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
        <Image src="/images/about-me.jpg" width={500} height={500} alt="About-Section Image" className="rounded-xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">I am a passionate and driven backend developer with a strong foundation in cloud computing, DevOps, and AI integration. My experience spans multiple internships where I have successfully developed and deployed scalable backend solutions. I have a proven track record of improving system performance, automating deployment processes, and ensuring seamless integration of backend APIs with frontend components. As an AWS Community Builder and a proactive learner, I continuously seek opportunities to enhance my skills and contribute to innovative projects. I thrive in collaborative environments and enjoy tackling complex challenges with creative and efficient solutions.
          </p>
          <div className="flex flex-row justify-start items-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("volunteering")}
              active={tab === "volunteering"}
            >
              Volunteering
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

<style jsx>{`
  .text-gradient {
    background: linear-gradient(to right, #a855f7, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`}</style>
