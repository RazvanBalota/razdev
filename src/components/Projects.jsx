import React from "react";
import dexonline from "../assets/projects/dexonline.png";
import bistrocafe from "../assets/projects/bistrocafe.png";
import carrental from "../assets/projects/carrental.png";
import guessthecolor from "../assets/projects/guessthecolor.png";
import carsharing from "../assets/projects/carsharing.png";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Car Sharing Oradea",
    img: carsharing,
    description: (
      <p className="bg-white card-shadow font-medium rounded-md px-6 py-5 text-lg text-secondary font-nunito leading-8 tracking-wide">
        The landing page showcases a visually appealing design with interactive animations created using Framer Motion.
        It aims to provide a delightful user experience and effectively communicate the message of the service promoted.
      </p>
    ),
    tech: ["React  ", "Tailwind  ", "Git"],
    visit: {
      github: `https://github.com/Razvi42/car-sharing`,
      website: `https://car-sharing-oradea.netlify.app/`,
    },
  },
  {
    title: "Dexonline Clone",
    img: dexonline,
    description: (
      <p className="bg-white card-shadow font-medium rounded-md px-6 py-5 text-lg text-secondary font-nunito leading-8 tracking-wide">
        A dictionary website based on{" "}
        <a href="https://dexonline.ro/" target="_blank" rel="noreferrer" className="text-purple cursor-pointer">
          dexonline
        </a>
        , but with less functionality due to the limited API.
      </p>
    ),
    tech: ["React  ", "Tailwind  ", "Git"],
    visit: {
      github: `https://github.com/Razvi42/dex-online`,
      website: `https://razvi42.github.io/dex-online`,
    },
  },
  {
    title: "Bistro Cafe",
    img: bistrocafe,
    description: (
      <p className="bg-white card-shadow font-medium rounded-md px-6 py-5 text-lg text-secondary font-nunito leading-8 tracking-wide">
        Bistro cafe is a template that I used for developing a site for a client, a restaurant from my hometown.
      </p>
    ),
    tech: ["React ", "Tailwind ", "Framer Motion"],
    visit: {
      github: `https://github.com/Razvi42/bistro-cafe`,
      website: `https://razvi42.github.io/bistro-cafe/`,
    },
  },
  {
    title: "Car Rental",
    img: carrental,
    description: (
      <p className="bg-white card-shadow font-medium rounded-md px-6 py-5 text-lg text-secondary font-nunito leading-8 tracking-wide">
        A car rental website is an online platform that allows users to rent cars for personal or business use.
      </p>
    ),
    tech: ["React  ", "Tailwind  ", "Git"],
    visit: {
      github: `https://github.com/Razvi42/car-rental`,
      website: `https://razvi42.github.io/car-rental/`,
    },
  },
  {
    title: "Guess The Color",
    img: guessthecolor,
    description: (
      <p className="bg-white card-shadow font-medium rounded-md px-6 py-5 text-lg text-secondary font-nunito leading-8 tracking-wide">
        Guess the Color is a game where the player is assigned a random color and 3 buttons with one correct answer and
        2 random ones.
      </p>
    ),
    tech: ["React  ", "Tailwind  ", "Git"],
    visit: {
      github: `https://github.com/Razvi42/guess-the-color/`,
      website: `https://razvi42.github.io/guess-the-color/`,
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-full bg-[#fcfcfc] pb-10">
      <div className="container mx-auto pt-10 px-6 lg:px-40">
        <div className="flex">
          <h2 className="text-2xl text-primary font-medium text-shadow">Projects</h2>
        </div>
        {projects.map((project) => (
          <div className="flex flex-col lg:flex-row w-full justify-between pt-16">
            <a href={project.visit.website} target="_blank" rel="noreferrer" className="max-w-[600px] ">
              <img
                src={project.img}
                alt=""
                className="rounded-xl hover:brightness-75 transition duration-300 cursor-pointer card-shadow"
              />
            </a>
            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-end lg:w-[600px] lg:text-right text-center">
              <h2 className="text-4xl font-nunito font-medium text-[#1b1b1b] pt-6">{project.title}</h2>
              <div className="pt-4 lg:pt-10 lg:-ml-20 z-[99999]">{project.description}</div>
              <ul className="flex justify-end pt-6 text-secondary font-nunito lg:pr-10">
                <li>{project.tech}</li>
              </ul>
              <div className="pt-2 lg:pt-6 lg:pr-10 flex gap-x-4">
                <a
                  href={project.visit.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple transition duration-150">
                  <FiExternalLink size={25} />
                </a>
                <a
                  href={project.visit.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple transition duration-150">
                  <AiFillGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
