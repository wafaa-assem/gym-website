import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="h-[120px] md:h-[170px] bg-neutral-900">
      <div
        data-aos="fade-up"
        // data-aos-delay="200"
        className="container flex items-end pb-10 justify-between h-full"
      >
        {/* logo */}
        <a href="">
          <img src={logo} alt="" />
        </a>
        {/* text */}
        <div>
          <p className="text-gray-300 text-sm">
            All rights reserved. Gym 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
