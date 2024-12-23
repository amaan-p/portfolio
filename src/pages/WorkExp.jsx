/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useEffect,useRef } from "react";
// Individual work experience item component
// react/prop-types
const WorkItem = ({ company, role, duration, logo, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (contentRef.current) {
        setHeight(isExpanded ? contentRef.current.scrollHeight+10 : 0);
      }
    }, [isExpanded]);
  
    return (
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-full overflow-hidden bg-white/10">
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white">{company}</h3>
                <ChevronRight
                  size={15}
                  className={`transform transition-transform duration-300 ease-in-out text-gray-400 group-hover:text-white
                    ${isExpanded ? "rotate-90" : ""}`}
                />
              </div>
              <p className="text-gray-400 font-medium text-xs md:text-sm">{role}</p>
            </div>
          </div>
          <span className="text-gray-400 text-xs md:text-sm">{duration}</span>
        </div>
  
        {/* Expandable content */}
        <div
          style={{ height: `${height}px` }}
          className="transition-[height] duration-300 ease-in-out overflow-hidden"
        >
          <div ref={contentRef} className="mt-2 ml-11  text-white font-light text-sm tracking-wide leading-5">
            <div className="pl-4">{details}</div>
          </div>
        </div>
      </div>
    );
  };


const WorkExp = () => {
  const experiences = [
    {
      company: "Browserous",
      role: "Founder",
      duration: "April 2023 - March 2024",
      logo: "/browserous.png",
      details: "Founded and led a team of 5 developers to deliver end-to-end web design and development solutions. Built 5+ websites, including e-commerce platforms, blogs, and portfolios, using WordPress and React.js. Styled websites with HTML and TailwindCSS, employing SEO strategies and performance optimizations to drive over 2,000 visitors across client websites.",
    },
    {
      company: "Neki Infosys",
      role: "SDE Intern",
      duration: "August 2022 - July 2023",
      logo: "/neki.png",
      details: "Built a WordPress website for the renowned E-POS provider, Kayana, enhancing their online presence and driving 1,000 organic visitors. Optimized JavaScript code on Legacy Websites, achieving a 40% boost in website performance.",
    },
  ];

  return (
    <div className=" flex flex-col items-center p-8">
      <div className="max-w-2xl w-full">
        <h2 className="text-white font-medium text-lg mb-4">Work Experience</h2>
        {experiences.map((exp, index) => (
          <WorkItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
