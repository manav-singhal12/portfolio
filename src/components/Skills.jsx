import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className='h-auto py-24'>
      <div>
        <h1 className='text-center text-4xl font-bold customcolor' data-aos="zoom-in">Skills</h1>
        <p className='text-center opacity-70 text-slate-300 m-2' data-aos="zoom-in">
          Here are some of my technical level skills on which<br /> I have been working for the past one year.
        </p>
        <div className="flex flex-wrap gap-10 justify-center pt-20">
          <div className="frontend border-2 w-full md:w-80 lg:w-96 cusshadow rounded-3xl h-auto flex flex-col pt-16 items-center" data-aos="fade-up">
            <h2 className='text-2xl font-bold px-8'>Frontend</h2>
            <div className='flex flex-wrap gap-4 py-10 p-4 justify-center'>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/html.webp' alt='HTML' /> HTML</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/css.webp' alt='CSS' /> CSS</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/javascript.webp' alt='JavaScript' /> JavaScript</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/typescript.webp' alt='TypeScript' /> TypeScript</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-10' src='./skills/react.webp' alt='React Js' /> React Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/next.webp' alt='Next Js' /> Next Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/tailwind.webp' alt='Tailwind CSS' /><p>Tailwind CSS</p></div>
            </div>
          </div>
          <div className="frontend border-2 w-full md:w-80 lg:w-96 cusshadow rounded-3xl h-auto flex flex-col pt-16 items-center" data-aos="fade-up">
            <h2 className='text-2xl font-bold px-8'>Backend</h2>
            <div className='flex flex-wrap gap-4 py-10 p-4 justify-center'>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/node.webp' alt='Node Js' /> Node Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-8' src='./skills/express.webp' alt='Express' /> Express</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/python.webp' alt='Python' /> Python</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-12' src='./skills/mysql.webp' alt='My SQL' /> My SQL</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-12' src='./skills/mongodb.webp' alt='Monog DB' /> Mongo DB</div>
            </div>
          </div>
          <div className="frontend border-2 w-full md:w-80 lg:w-96 cusshadow rounded-3xl h-auto flex flex-col pt-16 items-center" data-aos="fade-up">
            <h2 className='text-2xl font-bold px-8'>Others</h2>
            <div className='flex flex-wrap gap-4 py-10 p-4 justify-center'>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/git.webp' alt='Git' /> Git</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/github.webp' alt='Github' /> Github</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/vscode.webp' alt='VS Code' /> VS Code</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-10' src='./skills/vercel.webp' alt='Vercel' /> Vercel</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/postman.webp' alt='Postman' /> Postman</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/C.webp' alt='C Language' /> C Language</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='./skills/java.webp' alt='Java' /> Java</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
