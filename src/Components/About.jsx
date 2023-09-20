import React from "react";
import Skills from "./Skills";
import GFG from "../assets/gfg.svg";
import Leetcode from "../assets/leetcode.svg";
import CardItem from "./CardItem";

function About() {
  return (
    <div id="about" className="bg-white dark:bg-gray-900">
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center mx-auto mb-8 max-w-screen-lg bg-white dark:bg-gray-900">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          About me
        </h2>
        <p className="text-center font-light text-gray-500 sm:text-xl dark:text-gray-400 px-4">
          I am a passionate Full-stack enthusiast,a Programmer, and a Developer,
          driven by a desire to make a positive impact on society. My expertise
          lies in creating real-world projects that deliver seamless user
          experiences through frontend and backend development. I find joy in
          using technology to help and benefit people, and I am dedicated to
          contributing my skills to meaningful projects. My goal is to leverage
          my programming abilities to address societal challenges, providing
          practical solutions and making a difference in people's lives.
        </p>
      </div>
      <section id="projects">
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center mb-8 lg:mb-16">
          <h2 className="my-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Check out my cool projects
          </p>
        </div>
        <div className="container mx-auto">
          <CardItem />
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex flex-col items-center mb-8 lg:mb-16">
            <br />
            <br />
            <br />
            <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Coding Profiles
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Check out my coding profiles
            </p>
          </div>
          <div className="flex flex-row justify-evenly max-[500px]:flex-col">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={GFG}
                alt="Geeks for Geeks"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://auth.geeksforgeeks.org/user/manik1810">
                  Geeks for Geeks &#8599;
                </a>
              </h3>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Leetcode}
                alt="Leetcode"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://leetcode.com/guptamanik1810">
                  Leetcode &#8599;
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
