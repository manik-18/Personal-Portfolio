import React from "react";
import Skills from "./Skills";
import GFG from "../assets/gfg.svg";
import Leetcode from "../assets/leetcode.svg";
import CardItem from "./CardItem";

function About() {
  return (
    <div id="about">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            About me
          </h2>
          <p className="font-light text-gray-400">
            I am a passionate Full-stack enthusiast, a Programmer, and a
            Developer, driven by a desire to make a positive impact on society.
            My expertise lies in creating real-world projects that deliver
            seamless user experiences through frontend and backend development.
            I find joy in using technology to help and benefit people, and I am
            dedicated to contributing my skills to meaningful projects. My goal
            is to leverage my programming abilities to address societal
            challenges, providing practical solutions and making a difference in
            people's lives.
          </p>
        </div>
      </div>
      <section id="projects" className="bg-gray-900">
        <div className="container mx-auto py-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white my-8">
              My Projects
            </h2>
            <p className="font-light text-gray-400">
              Check out my cool projects
            </p>
          </div>
          <div className="">
            <CardItem />
          </div>
        </div>
      </section>
      <section className="bg-gray-900">
        <div className="container mx-auto py-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white my-8">
              My Coding Profiles
            </h2>
            <p className="font-light text-gray-400">
              Check out my coding profiles
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="p-6 rounded-lg flex justify-center items-center flex-col">
                <a href="https://auth.geeksforgeeks.org/user/nipun2003/?utm_source=geeksforgeeks" className="text-white text-center">
                  <img
                    className="w-32 h-32 object-cover object-center"
                    src={GFG}
                    alt="GeeksforGeeks"
                  />
                  <h2 className="text-lg font-medium mt-4">GeeksforGeeks 🔗</h2>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="p-6 rounded-lg flex justify-center items-center flex-col">
                <a href="https://leetcode.com/khajurianipun2/" className="text-white text-center">
                  <img
                    className="w-32 h-32 object-cover object-center"
                    src={Leetcode}
                    alt="Leetcode"
                  />
                  <h2 className="text-lg font-medium mt-4">Leetcode 🔗</h2>
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
