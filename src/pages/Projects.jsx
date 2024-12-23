/* eslint-disable react/prop-types */

import {Earth, Github } from "lucide-react";
const ProjItems = ({ name, duration, desc, tech, gitlinks, websitelink, img }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-lg  transition-all hover:scale-105 flex flex-col h-[32rem] md:h-[34rem]">
      <div className="relative w-full h-auto mb-1 overflow-hidden rounded-lg rounded-b-none">
        <img
          src={img || "/api/placeholder/400/320"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-5 ">
        <div className="space-y-3 flex-grow">
          <div className="text-gray-400 text-xs ">{duration}</div>
          
          <h3 className="text-white text-xl font-bold tracking-tight shadow-none">{name}</h3>
          
          {/* Description - adjusted line height and opacity */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 w-full h-24">{desc}</p>

          {/* Tech Stack - refined pill design */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-gray-800/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Links - bottom aligned with white pill styling */}
        <div className="flex items-center gap-4 pt-6">
          {websitelink && (
            <a
              href={websitelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              <Earth size={14} />
              Website
            </a>
          )}
          {gitlinks && (
            <a
              href={gitlinks}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
const Projects = () => {
  const projdata = [
    
    {
      name: "LUCIA A LLM-FER Assistant",
      duration: "December 2023 - March 2024",
      desc: "An innovative AI assistant integrating Large Language Models (LLMs) with Facial Emotion Recognition (FER) for real-time emotional interaction and enhanced user engagement.",
      tech: ["Python", "TensorFlow", "OpenCV", "Gemma","LLM","Natural Language Processing"],
      gitlinks:
        "https://github.com/amaan-p/LUCIA-A-LLM-FER-Hybrid-Assistant",
      websitelink: null,
      img: "/LUCIA.png",
    },

    {
      name: "MPPC Property Expert Website",
      duration: "July 2023 - August 2023",
      desc: "Built a website for a real estate consultancy firmshowcasing property listings and services to potential clients. It featured a backend with user authentication to allow updates of property listings, integration with testimonials, and optimized for SEO.",
      tech: ["HTML", "CSS", "Svelte","Sveltekit","PostgreSQL"],
      gitlinks: null,
      websitelink: "https://www.mppcpropertyexpert.in/",
      img: "/mppc1.png",
    },
    {
      name: "ReEarth",
      duration: "December 2022 - Febuary 2023",
      desc: "a recycling based application made with Flutter, Firebase, and Supabase. The project included a client and vendor app, offering real-time pricing for recycling materials, booking pickups, and a marketplace for used goods to promote sustainability",
      tech: ["Dart", "Flutter", "Firebase", "Supabase","PostgreSQL","AWS Lambda"],
      gitlinks: "https://github.com/amaan-p/ReEarth",
      websitelink: null,
      img: "/Reearth.png",
    },
    {
      name: "Kayana EPOS Website",
      duration: "October 2022 - June 2023",
      desc: "Developed a website for Kayana.co.uk, one of the largest EPOS providers in the UK. The site was created from scratch using WordPress, PHP, and Elementor.",
      tech: ["PHP", "Wordpress","Elementor", "Figma", "Yoast SEO"],
      gitlinks: null,
      websitelink: "https://www.kayana.co.uk/",
      img: "/kayana.png",
    },
 
  ];

  return (
    <>
      <div className="flex flex-col items-center p-8 pt-2 sm:pt-8 md:mb-[30%] mb-[7%] mt-2">
        <div className="max-w-xl">
          <div className="text-center">
            <div className="bg-white text-md pt-1 pb-1 rounded-lg font-medium w-36 mx-auto">
              My Projects
            </div>
            <div>
              <div className="text-white font-bold text-3xl md:text-4xl pt-2">
                Check out my latest work
              </div>
            </div>
            <div>
              <div className="text-gray-300 font-light text-sm pt-1 pb-10 mt-1 p-5">
                I{"'"}ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-col-1 gap-[0.4rem]">
                {projdata.map((project, index) => (
                  <ProjItems key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
