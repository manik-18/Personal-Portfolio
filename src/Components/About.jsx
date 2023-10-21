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
          src="https://internship.codeclause.com/assets/img/codeclause.png"
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
          src="https://media.glassdoor.com/sql/3678885/smartknower-squarelogo-1641471935343.png"
          className="w-18 h-18 rounded-full"
          alt="smartknower"
        />
      ),
    },
  ];

  const educationData = [
    {
      date: "2024",
      title: "New Horizon College Of Engineering",
      subtitle: "B.E. in Computer Science, Bangalore",
      description: "",
      icon: (
        <img
          src="https://scontent.fblr25-1.fna.fbcdn.net/v/t39.30808-6/365555943_672123748280749_7135534216767217260_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wNFI7YVykgcAX_jbUO7&_nc_ht=scontent.fblr25-1.fna&oh=00_AfDOtCqV5ut8jMVJ9S2nv4POF1mYjZP4z6oCQtRs8ReZ_g&oe=65384527"
          className="w-18 h-18 rounded-full"
          alt="codeclause"
        />
      ),
    },
    {
      date: "2020",
      title: "Govt. Ranbir Higher Secondary School",
      subtitle: "Class - XII, Jammu",
      description:
        "",
      icon: (
        <img
          src="https://scontent.fblr25-1.fna.fbcdn.net/v/t39.30808-6/301378011_3224704917742118_6900531713301741881_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7-T-6XzOZqsAX-lEpV9&_nc_ht=scontent.fblr25-1.fna&oh=00_AfDc2j4mYJ3LPqpwil3IyvAd5aWJUNTwqR-WftWVk50U2w&oe=65371E1B"
          className="w-18 h-18 rounded-full"
          alt="smartknower"
        />
      ),
    },
    {
      date: "2018",
      title: "New Dream Land Public High School",
      subtitle: "Class - X, Jammu",
      description:
        "",
      icon: (
        <img
          src="https://scontent.fblr25-1.fna.fbcdn.net/v/t1.6435-9/53345340_110044236821567_407672261307269120_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=5fSgLimPFG0AX-HjqAn&_nc_ht=scontent.fblr25-1.fna&oh=00_AfC53I4zNMqUbahTMdME2SmwKexjBu89DotfGveGtNuEBw&oe=655A2D4A"
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
        <div className="container mx-auto pt-24 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Education</span>
            </h2>
            <p className="text-gray-400 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">My Education Details</span>
            </p>
          </div>
        </div>
        <TimeLine timelineData={educationData} />
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
