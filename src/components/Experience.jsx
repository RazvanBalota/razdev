import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const jobs = [
  {
    companyName: "Web & Go",
    title: "Front-End Web Developer",
    employment: "Apr 2022 — Jun 2022",
    description: [
      "Participated in pre-project analysis and technical assessments to validate creation of user-friendly interface.",
      "Built reusable code to utilise for other projects and to minimise costs.",
      "Collaborated with designers to implement concept and design of website.",
    ],
  },
  {
    companyName: "Freelance",
    title: "Front-End Web Developer",
    employment: "Oct 2022 - Present",
    description: [
      "Designed layout and graphics to enhance aesthetics and appearance of website.",
      "Assisted customers with testing and selecting products suited to individual tastes, styles or needs",
      "Created attractive displays for merchandise to enhance sales.",
    ],
  },
  {
    companyName: "uTest",
    title: "Software Tester",
    employment: "Aug 2021 - Present",
    description: [
      "Prioritised bugs through focused data collection and analysis, driving continual innovation.",
      "Reported testing progress to line management, communicating effectively and escalating where appropriate",
      "Maintained and created product knowledge documentation for use within the test team",
      "Wrote and executed manual tests utilising meticulous attention to detail",
      "Reviewed and validated requirements and technical specifications to develop and execute test plans.",
    ],
  },
];

export default function Experience() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  return (
    <section id="experience" className="h-full my-4">
      <div className="container mx-auto flex flex-col lg:px-40">
        <h2 className="text-primary font-medium text-center lg:text-left text-2xl ext-shadow">Experience</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start pt-6">
          <div className="flex flex-row lg:flex-col pb-6 ">
            {jobs.map((job, index) => (
              <h2
                key={index}
                className={` font-inter w-28 pt-2 text-lg cursor-pointer flex justify-center lg:justify-normal py-3 lg:py-10 lg:px-5 border-b-[3px] lg:border-b-0 lg:border-l-[3px] hover:text-purple hover:opacity-100 hover:border-purple  transition-all duration-200 ${
                  activeJobIndex === index ? "text-purple font-medium border-purple " : "text-secondary "
                }`}
                onClick={() => setActiveJobIndex(index)}>
                {job.companyName}
              </h2>
            ))}
          </div>

          <div className="lg:ml-48 pt-8">
            {jobs.map((job, index) => (
              <div className="w-[350px] lg:w-full  " key={index}>
                {activeJobIndex === index && (
                  <motion.div variants={fadeIn("up", "tween", 0.1, 0.4)} initial="hidden" whileInView={"show"}>
                    <p className="text-2xl text-purple font-medium">{job.title}</p>
                    <p className="text-secondary text-sm font-medium font-inter pt-1 pb-2 ">{job.employment}</p>
                    <ul>
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-primary text-lg pt-2 flex ">
                          <span>
                            <MdArrowRight size={30} className="text-purple" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
