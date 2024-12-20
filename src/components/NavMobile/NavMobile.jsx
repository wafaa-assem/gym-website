const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`lg:hidden bg-neutral-800 w-full fixed top-0 left-0 right-0 -z-20 h-0 overflow-hidden duration-300 
        ${navMobile ? "min-h-screen" : "min-h-0"}`}
    >
      <ul className="text-white font-bold h-full flex flex-col items-center justify-center gap-8">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Workouts</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Community</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      {/* buttons */}
      <div className="text-white -mt-32 flex justify-center items-center gap-12">
        <button className="uppercase cursor-pointer text-white hover:text-green-200 font-bold tracking-[1px] text-[14px]">
          log in
        </button>
        <button className="uppercase cursor-pointer text-white font-bold bg-green-400 hover:bg-green-400/90 rounded-sm py-2 px-10 tracking-[1px] text-[14px]">
          signUp
        </button>
      </div>
    </nav>
  );
};

export default NavMobile;
