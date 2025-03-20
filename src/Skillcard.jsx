import React from 'react';

const SkillCard = ({ title, imgSrc, altText, link }) => {
  return (
    <div className="skill-card relative border-2 w-96 h-96 flex flex-col justify-center items-center rounded-lg overflow-hidden group transition-opacity duration-100 hover:opacity-70">
      <img className="h-20 w-20 mb-4" src={imgSrc} alt={altText} />
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className="hidden group-hover:flex absolute inset-0 justify-center items-center">
        <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded">Visit {title}</a>
      </div>
    </div>
  );
}

const Skillscard = () => {
  const skills = [
    {
      title: 'HTML5',
      imgSrc: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png',
      altText: 'HTML5',
      link: 'https://www.w3schools.com/html/'
    },
    {
      title: 'CSS3',
      imgSrc: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-226x256-ytqdyr76.png',
      altText: 'CSS3',
      link: 'https://www.w3schools.com/css/'
    },
    {
      title: 'JavaScript',
      imgSrc: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-512x512-q3igwln6.png',
      altText: 'JavaScript',
      link: 'https://www.w3schools.com/js/'
    },
    {
      title: 'React Js',
      imgSrc: 'https://static-00.iconduck.com/assets.00/react-icon-256x228-97ltgbl1.png',
      altText: 'React Js',
      link: 'https://reactjs.org/'
    },
    {
      title: 'Next Js',
      imgSrc: 'https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_nsrozhr9igl91.png',
      altText: 'Next Js',
      link: 'https://nextjs.org/'
    },
    {
      title: 'Tailwind CSS',
      imgSrc: 'https://seekicon.com/free-icon-download/tailwindcss_1.svg',
      altText: 'Tailwind CSS',
      link: 'https://tailwindcss.com/'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-8">
      {skills.map(skill => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  );
}

export default Skillscard;
