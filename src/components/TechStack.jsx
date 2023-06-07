import React, { useState } from "react";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { SiNetlify, SiJavascript, SiTypescript, SiTailwindcss, SiMysql } from "react-icons/si";
import { RiNpmjsLine } from "react-icons/ri";
import { DiReact, DiSass } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineJavascript } from "react-icons/md";

const tech = [
  {
    "Storage and Deployment": [
      {
        name: "Github",
        Icon: AiFillGithub,
      },
      {
        name: "Netfily",
        Icon: SiNetlify,
      },
      {
        name: "NPM",
        Icon: RiNpmjsLine,
      },
    ],
  },
  {
    "Programming Languages": [
      {
        name: "JavaScript",
        Icon: SiJavascript,
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
      },
    ],
  },
  {
    "Frontend Technologies": [
      {
        name: "HTML",
        Icon: AiOutlineHtml5,
      },
      {
        name: "React",
        Icon: DiReact,
      },
      {
        name: "Next",
        Icon: TbBrandNextjs,
      },
      {
        name: "TailwindCSS",
        Icon: SiTailwindcss,
      },
      {
        name: "SASS",
        Icon: DiSass,
      },
    ],
  },
  {
    "Backend and Database": [
      {
        name: "Express.js",
        Icon: MdOutlineJavascript,
      },
      {
        name: "MySQL",
        Icon: SiMysql,
      },
    ],
  },
];

export default function TechStack() {
  const [activeTechIndex, setActiveTechIndex] = useState(2);

  return (
    <div className="flex flex-col pt-6">
      <h2 className="text-primary text-2xl flex items-center gap-x-4 pb-4">
        Technologies that I use <hr className="w-32 lg:w-64 opacity-50" />
      </h2>
      <div className="flex justify-center">
        {tech.map((category, index) => {
          const categoryName = Object.keys(category)[0];

          return (
            <button
              key={index}
              className={`font-inter h-16 w-full px-0 lg:px-6 py-3 pt-2 text-sm hover:bg-opacity-40 hover:text-purple rounded-sm hover:purple hover:opacity-100 hover:bg-purple transition-all duration-200 ${
                activeTechIndex === index ? "text-purple bg-purple bg-opacity-40 font-medium" : "text-secondary "
              }`}
              onClick={() => setActiveTechIndex(index)}>
              {categoryName}
            </button>
          );
        })}
      </div>
      <div className="mt-8 mb-8 ">
        {tech.map((category, index) => {
          const categoryName = Object.keys(category)[0];
          const technologies = category[categoryName];

          return (
            <ul key={index} className={`${activeTechIndex === index ? "block" : "hidden"} flex justify-center gap-x-4`}>
              {technologies.map((technology, index) => {
                const { name, Icon } = technology;

                return (
                  <li
                    key={index}
                    className="flex flex-col justify-center items-center pt-4 text-primary opacity-90 text-md gap-y-2">
                    <Icon size={30} className="text-purple" />
                    {name}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
