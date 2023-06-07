import TechStack from "../components/TechStack";

function About() {
  return (
    <section id="about" className="h-full lg:h-screen ">
      <div className="relative overflow-hidden flex justify-center px-4 lg:px-[100px]">
        <div className="about-bg-sm"></div>
        <div className="about-bg-lg"></div>
        <div className="flex flex-col w-[700px]">
          <h2 className="text-4xl text-primary font-medium pb-4 py-4 border-b-[5px] rounded-full items-center justify-center flex border-purple w-48 mb-8 mt-4">
            About me
          </h2>
          <p className="text-secondary tracking-wide leading-6">
            I've always been passionate about technology. Even as a child, I had a knack for tinkering with it. I would
            "host" my own game servers in an <span className=" text-purple">IDE</span>, like Metin2 or Counter-Strike
            1.6, and have fun exploring the files. I would customize and add colors, create personalized skins for me
            and my friends using <span className="text-purple">PhotoShop</span>, and even tweak the bonuses for in-game
            items like damage and health points.
          </p>
          <p className="pt-4 text-secondary tracking-wide leading-6">
            Nowadays, my focus has shifted towards <span className="text-purple">frontend development</span>. I thrive
            on creating <span className="text-purple">pixel-perfect</span> websites and applications. I enjoy the
            challenge of crafting visually stunning interfaces and ensuring every detail is meticulously designed and
            implemented.
          </p>
          <p className="pt-4 text-secondary tracking-wide leading-6">
            I enjoy exploring new
            <span className="text-purple"> frameworks</span> and <span className="text-purple">libraries</span>,
            experimenting with responsive design techniques, and optimizing performance for seamless
            <span className="text-purple"> user experiences</span>. I find immense satisfaction in the process of
            transforming ideas and concepts into functional and visually captivating websites that leave a lasting
            impression on users.
          </p>
          <div className="">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
