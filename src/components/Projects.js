import React from "react";
import project1 from "../assets/medicalPlatform.png";
import chatApp from "../assets/chatApp.png";
import formService from "../assets/FormService.png";

const projects = [
  {
    image: project1,
    title: "Medical Platform",
    codeLink: "https://github.com/mAhnafTahmid/Medical-Platform/tree/ahnaf2",
  },
  {
    image: formService,
    title: "Form Service Website",
    codeLink: "https://github.com/mAhnafTahmid/ItransitionProject.git",
  },
  {
    image: chatApp,
    title: "Chat App",
    codeLink: "https://github.com/mAhnafTahmid/Chat-App.git",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:min-h-screen text-gray-300 py-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Check out some of my recent works. For more check out my GitHub{" "}
            <a
              href="https://github.com/mAhnafTahmid"
              target="_blank"
              rel="noreferrer"
              className="text-pink-600"
            >
              repo
            </a>
            .
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group md:transform transition-transform duration-300 lg:hover:scale-150 lg:hover:translate-y-16 md:hover:scale-105 md:hover:z-10 md:hover:translate-y-4"
            >
              <div className="relative w-full overflow-visible rounded-md shadow-lg shadow-[#040c16]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[15rem] lg:group-hover:h-auto object-cover transition-transform duration-300 origin-center lg:group-hover:scale-125"
                />

                {/* Buttons on the right side */}
                <div className="absolute top-4 right-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="mb-2 px-4 py-2 bg-white text-gray-700 font-bold text-sm rounded-lg"
                    disabled
                  >
                    Demo Not Available
                  </button>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center"
                  >
                    <button className="px-4 py-2 bg-white text-gray-700 font-bold text-sm rounded-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>

              {/* Title below the image */}
              <p className="mt-4 text-center text-lg font-semibold">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
