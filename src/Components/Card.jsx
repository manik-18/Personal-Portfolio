import React from "react";

function Card(props) {
  const { pictureSrc, title, description, readMoreLink } = props;

  return (
    <div className="hover:shadow-2xl  hover:shadow-green-500 hover:scale-105 transition-shadow max-w-sm border border-white rounded-lg shadow">
      <img className="rounded-t-lg w-96 h-36" src={pictureSrc} alt="" />
      <div className="p-5">
        <a href={readMoreLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="bg-black">
            {title}
            </span>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="bg-black">
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
          </span>
        </p>

        <a
          href={readMoreLink}
          className="inline-flex cursor-pointer transition-all bg-green-500 text-black font-bold border-2 px-6 py-2 rounded-lg
          border-green-900
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Know more &nbsp;
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
