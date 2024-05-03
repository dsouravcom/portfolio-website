import React from "react";

const projects = [
  {
    title: "Daily Journal",
    description:
      "A simple and secure journal app to write down your thoughts and feelings. It's like a diary, but better.",
    image:
      "https://res.cloudinary.com/dzjujoqyi/image/upload/v1707309141/rojlekho.com.jpg",
    demoLink: "https://app.rojlekho.com",
    codeLink: "https://github.com/dsouravcom/rojlekho",
  },
  {
    title: "To Do App",
    description:
      "A simple and intuitive to-do app that helps you organize your tasks and stay on top of your daily activities.",
    image:
      "https://res.cloudinary.com/dzjujoqyi/image/upload/v1713279651/s4kyodmz24trzn3geyv6.png",
    demoLink: "https://todo.dsourav.com",
    codeLink: "https://github.com/dsouravcom/todo-app",
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortener service that allows you to shorten long URLs into short for easy to share.",
    image:
      "https://res.cloudinary.com/dzjujoqyi/image/upload/v1714705431/fpw5eagsufsopfk53tbq.png",
    demoLink: "https://www.minilink.live",
    codeLink: "https://github.com/dsouravcom/url-shortner",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm mb-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-900">
      <img
        className="rounded-t-lg bg-contain"
        src={project.image}
        alt={project.title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-3xl font-bold font-mono tracking-tight ">
          {project.title}
        </h5>

        <p className="mb-3 font-roboto_slob font-semibold">
          {project.description}
        </p>
        <a
          href={project.codeLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Git
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 ml-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Live Demo
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-8">
      <h1 className="text-4xl mb-14 font-bold text-center text-gray-900 dark:text-gray-100">
        My all Projects
      </h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
