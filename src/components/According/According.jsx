import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";

const According = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(item);

  return (
    <div
      className="cursor-pointer bg-white border"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between py-3 px-7 rounded-sm">
        <h3 className="font-bold">{item.question}</h3>
        {isOpen ? (
          <FaChevronCircleUp className="text-lg" />
        ) : (
          <FaChevronCircleDown className="text-lg" />
        )}
      </div>
      <div
        className={`h-0 overflow-hidden  ${
          isOpen && "min-h-[180px] md:min-h-[130px]"
        }`}
      >
        <div className="px-7 mt-3 md:mt-6 rounded-sm text-gray-500">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default According;
