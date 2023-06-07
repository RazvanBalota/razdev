const listLinks = [
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

function Nav() {
  return (
    <nav className="absolute h-[55px] w-[100%] bg-transparent ">
      <div className="container mx-auto h-full pt-4 px-5">
        <div className="flex flex-row justify-end items-center lg:px-[250px] h-full text-slate-400">
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
    </nav>
  );
}

export default Nav;
