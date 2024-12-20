import price from "../../assets/price.svg";
import PlanList from "../PlanList/PlanList";

const Pricing = () => {
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container">
        {/* heading section */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center -space-x-20 mb-12 lg:mb-16"
        >
          <img src={price} alt="price image" />
          <h2 className="font-extrabold text-3xl md:text-5xl flex">
            Pricing plan <span className="text-green-200">.</span>
          </h2>
        </div>

        {/* planList */}
        <PlanList />
      </div>
    </section>
  );
};

export default Pricing;
