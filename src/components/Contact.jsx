import contact from "../assets/contact.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact" className="h-full flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row px-2 lg:px-40 gap-x-10 ">
        <div className="flex flex-1">
          <img src={contact} alt="" className="h-[400px]" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl font-semibold text-shadow">Contact me</h2>
          <p className="leading-6 tracking-wide text-secondary font-nunito text-lg pt-4 pb-8">
            Do you want to get in touch with me? My inbox is always open. Whether you want to work with me or just want
            to say hi, I'll get back to you as soon as possible!{" "}
          </p>
          <a
            href="mailto:razvanbalota02@gmail.com"
            className=" w-[200px] px-12 py-3 flex items-center justify-center border-2 border-[#35323E] text-[#35323E] rounded-md font-bold tracking-wide hover:bg-[#35323E] hover:text-[#fcfcfc] transition-all duration-300 ">
            MAIL ME
          </a>
          <div className="flex gap-x-8 pt-10">
            <a
              href="https://github.com/Razvi42"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150">
              <AiFillGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/razvan-balota-b28687248/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-purple transition-all duration-150">
              <AiFillLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
