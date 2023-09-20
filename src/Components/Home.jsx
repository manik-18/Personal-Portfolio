import React, { useEffect } from "react";
import Typed from "typed.js";
import Manik from "../assets/Manik.png";

function Home() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "Programmer",
        "Software Developer",
        "Full-stack enthusiast",
        "CSE student",
      ],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const resumeUrl =
    "https://drive.google.com/file/d/1ea-qtY1vKkSfa3iNDNICKDL-ECkQANJY/view?usp=sharing";

  const openResumeInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      <br />
      <br />
      <br />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi there 👋,
          </h1>
          <p className="max-w-2xl mb-6 font-semibold lg:mb-8 md:text-lg lg:text-xl dark:text-white">
            I am Manik. People know me as a{" "}
            <span className="typing text-green-600"></span>.
          </p>
          <p className="lg:max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Welcome to my portfolio! I'm delighted to have you here. I invite
            you to explore my real-world projects, showcasing seamless user
            experiences crafted through frontend and backend development. Join
            me on this journey of creativity and innovation!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 cursor-pointer"
            onClick={openResumeInNewTab}
          >
            View Resume
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 flex min-[300px]:mt-5 min-[300px]:items-center min-[300px]:justify-center">
          <img src={Manik} alt="image" className="h-96 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Home;
