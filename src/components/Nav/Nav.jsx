const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="text-white font-medium flex items-center justify-center gap-8">
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            Workouts
          </a>
        </li>
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            Pricing
          </a>
        </li>
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            Community
          </a>
        </li>
        <li>
          <a href="" className="hover:text-green-200 duration-200">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
