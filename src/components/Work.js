import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full h-screen -z-10">
      <div className="mx-auto px-8 flex flex-col justify-center h-full max-w-[1000px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work Experience
          </p>
        </div>
        <div className="pb-3">
          <h1 className="text-4xl sm:text-3xl font-bold text-[#ccd6f6] border-b-2 border-[#ccd6f6] inline">
            Vectrs
          </h1>
        </div>
        <h2 className="text-4xl sm:text-3xl font-bold text-[#8892b0]">
          3-month Internship
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In Vectrs, I worked on a vector database library which was made using
          python. My primary duty was to implement real life applications using
          the library and similar technologies inorder to test the usability of
          the library, find bugs and see how it fares against competing
          technologies.
        </p>
        <div className="pb-3 mt-4">
          <h1 className="text-4xl sm:text-3xl font-bold text-[#ccd6f6] border-b-2 border-[#ccd6f6] inline">
            Itransition
          </h1>
        </div>
        <h2 className="text-4xl sm:text-3xl font-bold text-[#8892b0]">
          3-month Internship
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In Itransition, I worked on various projects of different sizes and
          some tasks. The main focus was on developing web applications using
          Dotnet Core on the backend and React on the frontend.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={900}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 -z-10">
              View Projects
              <span className="group-hover:rotate-90 duration-300 group-hover:-translate-y-[0.375rem] relative transition-transform">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
