import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-between p-5 md:p-10  text-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="customcolor cusshadow uppercase border-2 p-2 md:ml-20 shadow-md md:w-80 flex justify-center items-center bg-gray-800 rounded-md border-blue-500">
            Welcome to my Portfolio 
          </p>
        </div>
        <button className="md:hidden mr-10" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-white text-2xl`}></i>
        </button>
        <nav
          className={`flex flex-col md:flex-row md:ml-[35vw]  gap-4 md:gap-10 absolute md:static bg-gray-900 z-50 md:bg-transparent transition-all duration-500 ease-in-out ${
            isOpen ? 'top-16 left-0 w-full p-5 md:p-0 ' : 'top-[-500px] left-0 w-full p-5 md:p-0'
          }`}
        >
          <Link
            className="text-white cursor-pointer py-2 md:py-0"
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="text-white cursor-pointer py-2 md:py-0"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="text-white cursor-pointer py-2 md:py-0"
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            className="text-white cursor-pointer py-2 md:py-0"
            activeClass="active"
            to="Project"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            className="text-white cursor-pointer py-2 md:py-0"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="flex flex-col">
        <div id="Home" className="section">
          <Home />
        </div>
        <div id="About" className="section">
          <About />
        </div>
        <div id="Skills" className="section">
          <Skills />
        </div>
        <div id="Project" className="section">
          <Project />
        </div>
        <div id="Contact" className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
