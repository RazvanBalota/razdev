import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const listLinks = [
  {
    link: "Home",
    href: "#home",
  },
  {
    link: "About",
    href: "#about",
  },
  {
    link: "Experience",
    href: "#experience",
  },
  {
    link: "Projects",
    href: "#projects",
  },
  {
    link: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className=" h-full">
      <div className="bg-[#faf6ff] container mx-auto flex flex-col justify-center items-center py-10">
        <div className="flex flex-col ">
          <div className="flex gap-x-4">
            <a
              href="https://github.com/Razvi42"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150 border-2 rounded-full p-5 hover:border-purple">
              <AiFillGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/razvan-balota-b28687248/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150 border-2 rounded-full p-5 hover:border-purple">
              <AiFillLinkedin size={25} />
            </a>
            <a
              href="mailto:balotarazvan02@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150 border-2 rounded-full p-5 hover:border-purple">
              <AiFillMail size={25} />
            </a>
          </div>
        </div>
        <div className="pt-4">
          <ul className="flex gap-x-4 text-md md:text-lg font-nunito">
            {listLinks.map((link) => (
              <li className="cursor-pointer text-primary font-medium hover:text-purple transition-all duration-150">
                <a href={link.href} alt="" className=" scroll-smooth">
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center font-medium p-5 text-primary">Razvan Balota | 2023</div>
    </footer>
  );
}
