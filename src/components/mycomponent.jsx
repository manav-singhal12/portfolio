import React from 'react';
import { Link } from 'react-scroll';

const MyComponent = () => {
  return (
    <div>
      <div id="section1" className="section">
        Section 1vfabhk
      </div>
      <div id="section2" className="section">
        Section 2
      </div>
      <div id="section3" className="section">
        Section 3
      </div>
      <div id="section4" className="section">
        Section 4
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 flex justify-center">
        <Link
          className="text-white mr-4 cursor-pointer"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Section 1
        </Link>
        <Link
          className="text-white mr-4 cursor-pointer"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
        >
          Section 2
        </Link>
        <Link
          className="text-white mr-4 cursor-pointer"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
        >
          Section 3
        </Link>
        <Link
          className="text-white cursor-pointer"
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          duration={500}
        >
          Section 4
        </Link>
      </nav>
    </div>
  );
};

export default MyComponent;
