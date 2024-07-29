import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const textArray = ["Full Stack Developer", "Freelancer", "UI/UX Designer"];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='min-h-screen md: p-4 py-20 flex flex-col md:flex-row items-center'>
      <div className="left w-full md:w-1/2 py-10 md:py-20 md:pl-20" data-aos='fade-right'>
        <p className='text-xl md:text-3xl'>Hello, I am</p>
        <h1 className='text-4xl md:text-6xl customcolor uppercase font-dancing font-mono'>Manav Singhal</h1>
        <div className='py-3 text-lg md:text-2xl'>
          <Typewriter
            words={textArray}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
        <p className='pr-4 md:pr-16 py-4 md:py-8 text-base md:text-xl opacity-60'>
          I am a dedicated web developer focused on crafting responsive and user-friendly websites.
        </p>
        <div className="social flex gap-4 md:gap-7 py-2">
          <a href="https://www.instagram.com/_manav_singhal_/" target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-instagram text-xl md:text-2xl text-red-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/manav-singhal-9a737727a/" target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-linkedin text-xl md:text-2xl text-blue-500"></i>
          </a>
          <a href="https://github.com/manav-singhal12" target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-github text-xl md:text-2xl"></i>
          </a>
        </div>
        <p className='border-2 p-2 md:p-3 h-16  w-36 md:w-44 rounded-md flex justify-center items-center my-4 md:my-10 resume'>
          <a target='_blank' href='./updatedmanav.pdf' rel='noopener noreferrer'>Download Resume</a>
        </p>
      </div>
      <div className="right w-full md:w-1/2 flex items-center justify-center northeast-border-container rounded-full" data-aos='fade-left'>
        <img className='rounded-full h-48 w-48 md:h-[50vh] md:w-[25vw]  object-cover moving-image borderimage border-green-200' src='./121.jpg' alt='Manav Singhal' />
      </div>
    </div>
  );
}

export default Home;
