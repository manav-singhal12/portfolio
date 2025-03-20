import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen md:py-32 flex flex-col">
      <div>
        <h1 className="text-center text-4xl font-bold customcolor" data-aos="zoom-in">
          About me
        </h1>
        <p className="text-center text-gray-300 pt-2 font-serif opacity-70" data-aos="zoom-in">
          My Introduction
        </p>
        <p className="py-20 pl-4 sm:px-12 md:px-20 lg:px-32 xl:px-44 font-thin text-lg md:text-xl lg:text-2xl text-balance" data-aos="zoom-in">
          I am a second year student currently pursuing my BTech in Computer Science and Engineering from IIIT UNA. I am a dedicated web developer passionate about crafting responsive and user-friendly websites. With a strong foundation in front-end technologies like HTML, CSS, and JavaScript, I excel in creating dynamic and engaging user interfaces. I am adept at using frameworks and libraries such as React.js and Tailwind CSS to streamline development and enhance user experience. I also have experience with back-end technologies like Node.js, Express.js and MongoDB, allowing me to build full-stack applications that are robust and scalable.I also have experience in Next.js to build projects. Constantly learning and exploring new technologies, I strive to deliver innovative solutions that meet both client needs and industry standards. 
        </p>
        {/* <Link className="mx-auto  border-2 h-10 w-32 flex justify-center items-center resume" data-aos="zoom-in" activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={1000}>
          Get in Touch
        </Link> */}
      </div>
    </div>
  );
}

export default About;
