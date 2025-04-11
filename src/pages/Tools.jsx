import React from "react";

const tools = [
  {
    title: "Mail Sender Bot",
    description:
      "Effortlessly send files or messages to any email address. Share documents, images, or content seamlessly.",
    image:
      "https://res.cloudinary.com/dzjujoqyi/image/upload/v1698936046/mail-bot-preview_qz3or4.png",
    demoLink: "https://mail.dsourav.com",
    codeLink: "https://github.com/dsouravcom/mail-sender-bot",
  },
  {
    title: "Url expander",
    description:
      "Expand shortened URLs and get the original URL. Unshorten any URL with a single click.",
    image:
      "https://res.cloudinary.com/dzjujoqyi/image/upload/v1713280136/wryfaepgfulud7wltyie.png",
    demoLink: "https://url.dsourav.com",
    codeLink: "https://github.com/dsouravcom/url-expander",
  },
  {
    title: "Insta Caption Extractor",
    description:
      "Extract captions from Instagram posts. Download captions in text format with a single click.",
    image:
      "https://caption.pocketutils.com/og-image.webp",
    demoLink: "https://caption.pocketutils.com",
    codeLink: "https://github.com/dsouravcom/insta-caption-extractor",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-[300px] mb-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-900">
      <img
        className="rounded-t-lg bg-contain bg-center bg-no-repeat h-40 w-full"
        src={project.image}
        alt={project.title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold font-mono tracking-tight ">
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

function Tools() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-8">
      <h1 className="text-4xl mb-14 font-bold text-center text-gray-900 dark:text-gray-100">
        My all Tools
      </h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {tools.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Tools;
