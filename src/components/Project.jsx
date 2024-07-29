import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-center text-3xl customcolor pt-20 font-bold" data-aos="zoom-in">
          Projects
        </h1>
        <p className="text-center text-gray-300 opacity-70 py-2 leading-5" data-aos="zoom-in">
          Here are some of my projects which <br />I have worked on in my past one year showcasing my web development skills.
        </p>
        <div className="projects flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-20 py-10 px-4">
          {[
            {
              title: 'Code Editor',
              imgSrc: './codeeditor.png',
              description: 'A simple frontend code editor built using HTML, CSS and JS to help you build simple projects which use these technologies.',
              tech: ['#HTML', '#CSS', '#JavaScript'],
              liveLink: 'https://code-editor-lime-chi.vercel.app/',
              githubLink: 'https://github.com/manav-singhal12/codeEditor'
            },
            {
              title: 'Looks',
              imgSrcs: ['./looks.png', './looks2.png'],
              description: 'A full stack e-commerce website designed to buy clothes. This website allows two different logins, one for normal users and other for specific users having id @looks which shows different prices.',
              tech: ['#NextJs', '#MongoDB', '#Tailwind'],
              liveLink: 'https://looks-pi.vercel.app/',
              githubLink: 'https://github.com/manav-singhal12/ECOMM'
            },
            // {
            //   title: 'Chat Vibe',
            //   imgSrc: './codeeditor.png',
            //   description: 'A full stack code application which provides real time chat between the users with a interactive UI design. Also provides emoji and images facilities.',
            //   tech: ['#React', '#Node', '#Socketio'],
            //   liveLink: 'https://code-editor-lime-chi.vercel.app/',
            //   githubLink: 'https://github.com/manav-singhal12'
            // },
            {
              title: 'PassMaps',
              imgSrc: './PassMaps.png',
              description: 'A frontend project used to manage your passwords in the local storage, allows you to edit and delete them.',
              tech: ['#ReactJS', '#Tailwind', '#UI/UX'],
              liveLink: 'https://password-manager-chi-eight.vercel.app/',
              githubLink: 'https://github.com/manav-singhal12/PasswordManager'
            },
            // {
            //   title: 'Motify',
            //   imgSrc: './codeeditor.png',
            //   description: 'A project which is a spotify clone used to play different songs allows you to play, stop the songs,increase or decrease the volume.',
            //   tech: ['#HTML', '#CSS', '#JavaScript'],
            //   liveLink: 'https://code-editor-lime-chi.vercel.app/',
            //   githubLink: 'https://github.com/manav-singhal12'
            // }
          ].map((project, index) => (
            <div
              key={index}
              className="h-[63vh] w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[24vw] border-2 rounded-3xl card relative overflow-hidden cusshadow"
              data-aos="fade-up"
            >
              <div className="h-full w-full">
                {project.imgSrcs ? (
                  <div className="flex gap-0 h-1/2">
                    {project.imgSrcs.map((src, i) => (
                      <img key={i} src={src} className="object-cover imgcus p-4 rounded-md w-1/2" alt={project.title} />
                    ))}
                  </div>
                ) : (
                  <img src={project.imgSrc} className="object-cover imgcus p-4 rounded-md h-1/2 w-full" alt={project.title} />
                )}
                <div className="p-4">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold text-blue-400">{project.title}</h2>
                    <div className="github">
                      <a href={project.githubLink} target="main">
                        <i className="fa-brands fa-github text-xl"></i>
                      </a>
                    </div>
                  </div>
                  <p className="opacity-70 py-3">{project.description}</p>
                  <div className="tech flex gap-4 md:gap-6 lg:gap-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-blue-400">{t}</span>
                    ))}
                  </div>
                </div>
                <a target="_blank" href={project.liveLink} className="overlay flex justify-center items-center cursor-pointer">
                  <p className="text-white py-2 px-4 rounded">Visit</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
