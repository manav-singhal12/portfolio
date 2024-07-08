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
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png' alt='HTML' /> HTML</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/file-type-css-icon-226x256-ytqdyr76.png' alt='CSS' /> CSS</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/javascript-js-icon-512x512-q3igwln6.png' alt='JavaScript' /> JavaScript</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/react-icon-256x228-97ltgbl1.png' alt='React Js' /> React Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_nsrozhr9igl91.png' alt='Next Js' /> Next Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://seekicon.com/free-icon-download/tailwindcss_1.svg' alt='Tailwind CSS' /><p>Tailwind CSS</p></div>
            </div>
          </div>
          <div className="frontend border-2 w-full md:w-80 lg:w-96 cusshadow rounded-3xl h-auto flex flex-col pt-16 items-center" data-aos="fade-up">
            <h2 className='text-2xl font-bold px-8'>Backend</h2>
            <div className='flex flex-wrap gap-4 py-10 p-4 justify-center'>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png' alt='Node Js' /> Node Js</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-8' src='https://user-images.githubusercontent.com/46530103/149555472-2e2ed369-9011-496e-9fe5-69facdf534e8.png' alt='Express' /> Express</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/python-icon-256x254-m7n72ce3.png' alt='Python' /> Python</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/mysql-plain-icon-256x251-bt49eup1.png' alt='My SQL' /> My SQL</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/mongodb-icon-1024x1024-jyklwn1x.png' alt='Monog DB' /> Mongo DB</div>
            </div>
          </div>
          <div className="frontend border-2 w-full md:w-80 lg:w-96 cusshadow rounded-3xl h-auto flex flex-col pt-16 items-center" data-aos="fade-up">
            <h2 className='text-2xl font-bold px-8'>Others</h2>
            <div className='flex flex-wrap gap-4 py-10 p-4 justify-center'>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png' alt='Git' /> Git</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png' alt='Github' /> Github</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png' alt='VS Code' /> VS Code</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://icons-for-free.com/download.php?icon_download=brand+vercel-1330572013006236642&size=128&type=png&m=1715440274' alt='Vercel' /> Vercel</div>
              <div className='flex justify-center items-center border-2 gap-1 rounded-md p-2 opacity-70'><img className='h-6 w-6' src='https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png' alt='Postman' /> Postman</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
