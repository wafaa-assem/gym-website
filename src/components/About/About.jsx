import userImage from "../../assets/users-icn.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container px-[40px] md:px-[135px]">
        {/* title section */}
        <div
          className="flex justify-start items-center -space-x-20 mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={userImage} alt="person" />
          <h2 className="font-extrabold text-3xl md:text-4xl flex">
            Our mission <span className="text-green-300">.</span>{" "}
          </h2>
        </div>
        {/* subtitle section */}
        <p
          className="text-2xl text-gray-500 leading-snug mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quae maiores eius incidunt cumque harum vero tempora dolorem assumenda
          beatae quibusdam, voluptatibus rem est voluptate eveniet!
        </p>
        <p
          className="text-2xl text-gray-500 leading-snug mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          repudiandae ipsa rem? Fugiat maxime blanditiis assumenda molestiae
          sequi.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href=""
            className="font-bold inline-flex items-center gap-2 hover:gap-4 duration-200"
          >
            JOIN NOW <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>{" "}
      </div>
    </section>
  );
};

export default About;
