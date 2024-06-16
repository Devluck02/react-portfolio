import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='logo text-center' onClick={() => setIsOpen(false)}>
          <Link to="/">&#123;Lucky Singh&#125;</Link>
      </div>
      <nav className={`${isOpen ? "navShow" : "navHide"}`}>
        <ul className="flex flex-x-between flex-y-center">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/about">About Me</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/skills">Skills</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/projects">Projects</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/experience">Experience</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        className={`mobileMenu ${isOpen ? "openMenu" : "closeMenu"}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Navbar;
