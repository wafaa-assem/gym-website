import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
const lists = [
  {
    id: 1,
    name: "Basic",
    price: 20,
    list: [
      { name: "unlimited gym access" },
      { name: "1 training programs" },
      { name: "free fitness consultation" },
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: 35,
    list: [
      { name: "unlimited gym access" },
      { name: "1 training programs" },
      { name: "free fitness consultation" },
      { name: "personal traniner" },
    ],
  },
  {
    id: 3,
    name: "Elite",
    price: 49,
    list: [
      { name: "unlimited gym access" },
      { name: "1 training programs" },
      { name: "free fitness consultation" },
      { name: "personal traniner" },
      { name: "50% off drinks" },
    ],
  },
];
const PlanList = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-7 lg:min-h-[350px]">
      {lists.map((item, index) => {
        // console.log(index);   0 1 2

        return (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 350}
            key={index}
            onClick={() => setIdx(index)}
            className={`w-full ${
              index === idx
                ? `bg-neutral-900/90 text-white`
                : `bg-gray-400/25 text-gray-900`
            }
                flex justify-center items-center lg:flex-col space-x-3 md:space-x-10 lg:space-x-0 px-2 lg:px-0 gap-7 py-10
            `}
          >
            {/* name & price */}
            <div className="flex flex-col justify-center items-center">
              <div
                className={`${
                  index === idx ? "bg-white text-black" : " bg-black text-white"
                } px-3 mb-3 md:mb-6 font-medium h-[26px] flex items-center justify-center`}
              >
                {item.name}
              </div>
              <div>
                <span className={`text-xl md:text-3xl font-extrabold`}>
                  {item.price}
                </span>
                <span className={`text-xl md:text-3xl font-extrabold`}>$</span>
              </div>
              <span>/month</span>
            </div>
            {/* map kman listtttttt & btn */}
            <div>
              <ul className="flex flex-col gap-3 mb-8">
                {item.list.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <BsCheckCircleFill className="text-lg md:text-xl" />
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              <div className="flex lg:justify-center">
                <button
                  className={`py-2 px-5 rounded-sm font-bold text-xs ${
                    index === idx
                      ? `bg-white text-black`
                      : `border border-black`
                  } `}
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
