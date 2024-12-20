import logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import NavMobile from "../NavMobile/NavMobile";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`fixed right-0 left-0 top-0 z-[99999] duration-300 ${
        isActive ? "bg-neutral-800 py-4" : "bg-transparent py-5"
      }`}
    >
      <div className={`container flex items-center justify-between`}>
        {/* logo */}
        <a href="">
          <img src={logo} className="h-[30px]" alt="gym" />
        </a>

        {/* nav => show on lg */}
        <Nav />

        {/* buttons => show on lg */}
        <div className="hidden lg:flex space-x-4">
          <button className="uppercase cursor-pointer text-white hover:text-green-200 font-bold tracking-[1px] text-[12px]">
            log in
          </button>
          <button className="uppercase cursor-pointer text-white font-bold bg-green-400 hover:bg-green-400/90 rounded-sm py-2 px-10 tracking-[1px] text-[12px]">
            signUp
          </button>
        </div>

        {/* icons menu => hidden on lg */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="absolute right-5 lg:hidden text-green-200 text-3xl cursor-pointer"
        >
          {navMobile ? <RiCloseFill /> : <RiMenu4Fill />}
        </div>

        {/* navMobile => hidden on lg */}
        <NavMobile navMobile={navMobile} />
      </div>
    </header>
  );
};

export default Header;
