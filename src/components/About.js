import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ahnaf, nice to meet you. Feel free to look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent websites that help
              people. I am skilled in creating websites using popular
              technologies such as the MERN stack and Tailwind CSS. I am also
              always open to learning new things. Wouldn't it be awesome to have
              an enthusiastic developer by your side?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
