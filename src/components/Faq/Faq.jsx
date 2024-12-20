import image from "../../assets/question-mark.svg";
import According from "../According/According";
const asks = [
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
  {
    question: "what is your favourite color?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ex? Autem eum nisi at minus!",
  },
];
const Faq = () => {
  return (
    <section className="pt-[275px] lg:pt-[180px]">
      <div
        className={`max-w-[750px] mx-auto lg:min-h-[900px] lg:bg-[url('./assets/bg1.png')] lg:bg-no-repeat lg:bg-contain bg-center lg:py-[110px]`}
      >
        {/* Title Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-start lg:justify-center items-center -space-x-5 ps-5 lg:ps-0 mb-8"
        >
          <img src={image} className="lg:hidden" alt="question" />
          <h2 className="font-extrabold text-3xl md:text-4xl flex">
            FAQ <span className="text-green-300">.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="px-4 flex flex-col gap-4"
        >
          {asks.map((item, idx) => (
            <According item={item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
