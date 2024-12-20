import img from "../../assets/community-icn.svg";
import CommunitySlider from "../CommunitySlider/CommunitySlider";

const Community = () => {
  return (
    <section className="pb-[80px] md:pb-[110px] lg:pb-[180px] relative">
      <div className="container  flex justify-center lg:justify-start">
        {/* title section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center items-center -space-x-20 mb-12 lg:mb-16"
        >
          <img src={img} alt="community" />
          <h2 className="font-extrabold text-3xl md:text-4xl flex">
            Community <span className="text-green-300">.</span>
          </h2>
        </div>

        {/* sliderrrrr */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="absolute -right-[80px] lg:-right-[110px] w-[650px] lg:w-[950px] top-40 lg:top-0"
        >
          <CommunitySlider />
        </div>
      </div>
    </section>
  );
};

export default Community;
