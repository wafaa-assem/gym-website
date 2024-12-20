import workOut from "../../assets/calendar.svg";
import WorkoutSlider from "../WorkoutSlider/WorkoutSlider";

const WorkOuts = () => {
  return (
    <section className="py-[80px] md:pb-[110px] lg:pb-[180px]">
      <div className="container">
        {/* title section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center items-center -space-x-20 mb-12 lg:mb-16"
        >
          <img src={workOut} alt="calendar" />
          <h2 className="font-extrabold text-3xl md:text-4xl flex">
            Training programs <span className="text-green-300">.</span>
          </h2>
        </div>
      </div>

      {/* workOut sliderrrrr */}
      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default WorkOuts;
