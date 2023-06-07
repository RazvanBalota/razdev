import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import heroimg from "../assets/hero-image.png";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="h-full lg:h-screen w-[100%] background ">
      <div className="container mx-auto flex flex-col lg:flex-row px-5 justify-center">
        <div className=" flex flex-col pt-24 lg:pt-64 px-2 lg:px-40">
          <h1 className="text-purple text-shadow text-4xl lg:text-6xl tracking-tight font-bold text-opacity-90">
            Razvan Balota
          </h1>
          <h2 className="text-primary text-xl tracking-wide mt-3">Frontend developer</h2>
          <p className="text-secondary text-md tracking-wide mt-4">
            I create web-based digital experiences that prioritize accessibility.
          </p>
          <div className="flex gap-x-4 pt-6 text-secondary">
            <a
              href="https://github.com/Razvi42"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150">
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/razvan-balota-b28687248/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150">
              <AiFillLinkedin size={30} />
            </a>
            <div className="group inline-block lg:flex  w-40 items-center">
              <div className="group cursor-pointer flex items-center gap-x-2 hover:gap-x-4 transition-all duration-150">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group text-secondary hover:text-purple font-medium group-hover:border-b-[1px] border-purple transition duration-300 ">
                  View Full Résumé
                </a>
                <span className="group">
                  <AiOutlineArrowRight className="text-secondary group-hover:text-purple transition-all duration-150" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src={heroimg} alt="" className="h-[400px] lg:h-[500px] float-right lg:mt-40" />
      </div>
    </section>
  );
}
