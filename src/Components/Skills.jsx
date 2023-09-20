import React from "react";
import C from "../assets/c.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Css from "../assets/css.svg";
import Html from "../assets/html.svg";
import Java from "../assets/java.svg";
import Javascript from "../assets/javascript.svg";
import Mongo from "../assets/mongodb.svg";
import Php from "../assets/php.svg";
import Python from "../assets/python.svg";
import Reactjs from "../assets/react.svg";
import Sql from "../assets/sql.svg";
import Tailwind from "../assets/tailwind.svg";

function Skills() {
  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Following are some technologies I know
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 max-[300px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={C}
                alt="C language"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">C</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Java}
                alt="java language"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Java</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Python}
                alt="Python language"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Python</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-16 h-16 " src={Html} alt="Html" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">HTML</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-16 h-16 " src={Css} alt="Css" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">CSS</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Bootstrap}
                alt="Bootstrap"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bootstrap</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Tailwind}
                alt="Tailwind"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Tailwind</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Javascript}
                alt="Javascript"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Javascript</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Reactjs}
                alt="React"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">React</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-16 h-16 " src={Sql} alt="Mysql" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">MySQL</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-16 h-16 "
                src={Mongo}
                alt="Mongo"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mongo DB</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-16 h-16 " src={Php} alt="php" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">PHP</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Skills;
