import React from "react";
import Skills from "./Skills";
import GFG from "../assets/gfg.svg";
import Leetcode from "../assets/leetcode.svg";
import CardItem from "./CardItem";
import TimeLine from "./TimeLine";
import "./Card.css"

function About() {
  const timelineData = [
    {
      date: "Sep 2023",
      title: "Web Developer Intern",
      subtitle: "CodeClause, Remote",
      description: "Worked on real-world projects using MERN stack",
      icon: (
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQFheEbgt4_U_w/company-logo_200_200/0/1661277230836/codeclause_logo?e=1706140800&v=beta&t=5ZtJvTxOfshZFsItTTsGI0ko-2st43-QI6ZninFsjEE"
          className="w-18 h-18 rounded-full"
          alt="codeclause"
        />
      ),
    },
    {
      date: "Oct 2022 - Nov 2022",
      title: "Web Developer Intern",
      subtitle: "SmartKnower, Remote",
      description:
        "Learned about web development technologies like HTML, CSS, JavaScript, Bootstrap, jQuery, MySQL, and completed interesting projects",
      icon: (
        <img
          src="https://media.licdn.com/dms/image/C560BAQEurnSUo3oWFw/company-logo_200_200/0/1588835805794/smartknower_logo?e=1706140800&v=beta&t=JX8LCaxOLYb7FxTM0E2iz0LN2Me6zkezhBOJtsDNQZo"
          className="w-18 h-18 rounded-full"
          alt="smartknower"
        />
      ),
    },
  ];

  return (
    <div id="about">
      <br />
      <br />
      <br />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            <span className="bg-black">About me</span>
          </h2>
          <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
            <span className="bg-black">
              I am a passionate Full-stack enthusiast, a Programmer, and a
              Developer, driven by a desire to make a positive impact on
              society. My expertise lies in creating real-world projects that
              deliver seamless user experiences through frontend and backend
              development. I find joy in using technology to help and benefit
              people, and I am dedicated to contributing my skills to meaningful
              projects. My goal is to leverage my programming abilities to
              address societal challenges, providing practical solutions and
              making a difference in people's lives.
            </span>
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto pt-24 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Experience</span>
            </h2>
            <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out my Experience.</span>
            </p>
          </div>
        </div>
        <TimeLine timelineData={timelineData} />
      </section>
      <section id="projects">
        <div className="container mx-auto pt-32 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Projects</span>
            </h2>
            <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out My Coool Projects.</span>
            </p>
          </div>
        </div>
        <CardItem />
      </section>
      <section>
        <div className="container mx-auto pt-32 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Coding Profiles</span>
            </h2>
            <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out My Coding Profiles.</span>
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center gap-32 mt-16 mx-4">
            <div className="w-[190px] p-4 card">
              <div className="p-6 rounded-lg flex justify-center items-center flex-col">
                <a
                  href="https://auth.geeksforgeeks.org/user/manik1810"
                  className="text-white text-center"
                  target="_blank"
                >
                  <img
                    className="w-32 h-32 object-cover object-center"
                    src={GFG}
                    alt="GeeksforGeeks"
                  />
                  <h2 className="text-lg font-medium mt-4">GeeksforGeeks</h2>
                </a>
              </div>
            </div>
            <div className="w-[190px] p-4 card">
              <div className="p-6 rounded-lg flex justify-center items-center flex-col">
                <a
                  href="https://leetcode.com/guptamanik1810/"
                  className="text-white text-center"
                  target="_blank"
                >
                  <img
                    className="w-32 h-32 object-cover object-center"
                    src={Leetcode}
                    alt="Leetcode"
                  />
                  <h2 className="text-lg font-medium mt-4">Leetcode</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
