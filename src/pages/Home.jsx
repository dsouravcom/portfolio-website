import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <section className="flex  text-gray-600 body-font min-h-screen dark:bg-gray-800 dark:text-white">
          <div className="flex container place-items-center mx-auto md:flex-row md:px-4 flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 items-center text-center">
              <h3 className="text-2xl py-3 font-serif">Hello everyone, i am</h3>
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-taviraj">
                Sourav Dutta
              </h1>
              <p className="mb-8 leading-relaxed font-roboto_slob">
              I am a student of the Bankura Unnayani Institute of Engineering pursuing a B.Tech in Computer Science and Engineering. I am a web developer. I am self-motivated and enjoy learning new skills.
              </p>
              {/* icons */}
              <div>
                <div className="mb-2">
                <span>Technologys I work with:</span> 
                </div>
                <div className="mb-4 gap-2 grid grid-cols-6 px-4 md:px-0 md:grid-cols-12">
                <img width="48" height="48" src="https://img.icons8.com/nolan/48/amazon-web-services.png" alt="amazon-web-services"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
                <img width="64" height="64" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js"/>
                <img width="48" height="48" src="https://img.icons8.com/office/48/react.png" alt="react"/>
                <img width="50" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/external-soft-fill-juicy-fish/48/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" alt="sql"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/linux--v1.png" alt="linux--v1"/>
                <img width="52" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href={import.meta.env.VITE_APP_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex font-roboto_slob font-bold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Resume
                  </button>
                </a>
                <Link to="/projects">
                  <button className="ml-4 font-roboto_slob font-bold inline-flex text-gray-700 bg-gray-300 dark:bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 dark:hover:bg-gray-200 rounded text-lg">
                    Projects
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                className="px-3 sm:px-0"
                alt="Sourav Dutta"
                src = {import.meta.env.VITE_APP_PFP}
              />
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Home;