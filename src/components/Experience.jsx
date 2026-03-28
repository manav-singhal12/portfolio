import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Infrawave Solutions',
      works: [
        'Engineered scalable 50+ REST APIs using Node.js and Express, reducing response time by 40%',
        'Improved MongoDB schemas and queries, reducing data retrieval latency by 20%',
        'Implemented secure authentication and authorization using JWT',
        'Automated CI/CD pipelines, reducing deployment time to under 45 seconds'
      ],
      time: ['Jan 2025', 'July 2025']
    },
    {
      role: 'Frontend Developer Intern',
      company: 'CodeWithJay',
      works: [
        'Led migration to Redux Toolkit, reducing API calls by 70%',
        'Built course platform used by 15,000+ users',
        'Improved page load speed by ~15% using lazy loading'
      ],
      time: ['July 2025', 'Oct 2025']
    }
  ];

  return (
    <div className="min-h-screen">
      <div>

        <h1 className="text-center text-3xl customcolor pt-20 font-bold" data-aos="zoom-in">
          Experience
        </h1>
        <p className="text-center text-gray-300 opacity-70 py-2 leading-5" data-aos="zoom-in">
          I have a total of 1 year of industry experience.
        </p>

        <div className="relative flex flex-col items-center py-10">

          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

          <div className="flex flex-col items-center gap-12 w-full">

            {experiences.map((exp, index) => (
              <div key={index} className="relative w-full flex justify-center cursor-pointer">

                <div className="absolute -left-[calc(50%-6px)] top-6 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />

                <div
                  className="w-[85vw] md:w-[65vw] backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 cusshadow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  data-aos="fade-up"
                >

                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold customcolor italic">
                        {exp.role}
                      </h2>
                      <p className="text-gray-300 italic text-lg md:text-xl mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-lg md:text-xl text-gray-300">
                      {exp.time[0]} – {exp.time[1]}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.works.map((work, i) => (
                      <li
                        key={i}
                        className="text-gray-300 leading-relaxed flex md:text-lg text-xl"
                      >
                        <span className="mr-3 text-blue-400">•</span>
                        {work}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;