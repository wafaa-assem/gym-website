import bgImage from "../../assets/bg.png";

const Banner = () => {
  return (
    <section className="bg-neutral-900 h-[690px]">
      <div className="container h-full">
        <div className="flex items-center h-full -space-x-44">
          {/* info section */}
          <div className="text-white flex-1 relative z-10">
            <h1
              data-aos="fade-down"
              data-aos-delay="500"
              className="font-extrabold text-3xl md:text-6xl leading-10"
            >
              Get the best part of your day{" "}
              <span className="text-green-200">-you fit here.</span>
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="text-gray-300 my-6 max-w-[450px] leading-snug"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              maiores aliquam porro.
            </p>
            <button
              data-aos="fade-down"
              data-aos-delay="700"
              className="bg-white py-2 px-10 rounded-sm text-neutral-700 hover:bg-white/90"
            >
              Join Now
            </button>
          </div>

          {/* image section */}
          <div
            data-aos="fade-right"
            data-aos-delay="900"
            className="w-full h-full flex-1 bg-no-repeat bg-right md:bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
