import woman from "../../assets/woman.png";

const Join = () => {
  return (
    <section className="mt-[110px] bg-neutral-900 min-h-[580px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-20 md:-space-y-0">
          {/* image section */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-offset="200"
            className="flex-1 -mt-10"
          >
            <img src={woman} className="w-full" alt="join image" />
          </div>

          {/* info section */}
          <div
            data-aos="fade-left"
            // data-aos-offset="100"
            data-aos-delay="200"
            className="flex-1 ps-5"
          >
            <h2 className="font-extrabold text-3xl lg:text-5xl text-white">
              Wanna join <span className="text-green-300">&</span> <br /> have
              fun?
            </h2>
            <p className="text-gray-300 my-4 lg:my-6 max-w-md leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              vitae sunt dolorem rem quas cupiditate natus quae.
            </p>
            <button className="bg-white py-2 px-6 lg:px-8 rounded-sm text-neutral-700 hover:bg-white/90">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
