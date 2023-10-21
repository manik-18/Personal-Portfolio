import React from "react";

function Skills() {
  const skills = [
    {
      alt: 'bash',
      logo: 'https://www.svgrepo.com/show/361365/terminal-bash.svg',
    },
    {
      alt: 'bootstrap',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    },
    {
      alt: 'c',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    },
    {
      alt: 'css3',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    },
    {
      alt: 'express',
      logo: 'https://www.svgrepo.com/show/330398/express.svg',
    },
    {
      alt: 'firebase',
      logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    },
    {
      alt: 'git',
      logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
    {
      alt: 'html5',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    },
    {
      alt: 'java',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    },
    {
      alt: 'javascript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
      alt: 'linux',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
    },
    {
      alt: 'mongodb',
      logo: 'https://www.svgrepo.com/show/373845/mongo.svg',
    },
    {
      alt: 'mysql',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    },
    {
      alt: 'nextjs',
      logo: 'https://www.svgrepo.com/show/342062/next-js.svg',
    },
    {
      alt: 'nodejs',
      logo: 'https://www.svgrepo.com/show/452075/node-js.svg',
    },
    {
      alt: 'opencv',
      logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
    },
    {
      alt: 'php',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    },
    {
      alt: 'postman',
      logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    },
    {
      alt: 'python',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    },
    {
      alt: 'react',
      logo: 'https://www.svgrepo.com/show/354259/react.svg',
    },
    {
      alt: 'redux',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    },
    {
      alt: 'sass',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    },
    {
      alt: 'sqlite',
      logo: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
    },
    {
      alt: 'tailwind',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
  ];
  
  return (
    <section>
      <div className="container mx-auto mt-4 pt-24 pb-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            <span className="bg-black">Skills</span>
          </h2>
          <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
            <span className="bg-black">My Technical Skills</span>
          </p>
        </div>
      </div>
      <div className="mt-8 mx-32 flex flex-wrap justify-center items-center gap-8 bg-black">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div>
              <img
                src={skill.logo}
                alt={skill.alt}
                className={`mb-2 p-2 rounded-2xl ${
                  skill.alt === "express" || skill.alt === "nextjs" || skill.alt === "bash"
                    ? "bg-white rounded-4xl"
                    : "bg-black"
                } w-20 h-20`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
