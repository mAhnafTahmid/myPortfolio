import React from "react";
import Logo from "../assets/mySignature.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNav(!nav);
    console.log("nav state:", nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-40">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px", height: "60px" }} />
      </div>

      {/* menu */}
      <ul className="md:flex hidden">
        <li>
          <Link to="home" smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={700}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={700}>
            Work
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={700}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-50" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={700}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={700}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <a
              href="http://www.linkedin.com/in/ahnaf-tahmid-631552335"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              href="https://github.com/mAhnafTahmid"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500">
            <a
              href="mailto:ahnaf.tahmid0628@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              href="https://docs.google.com/document/d/16yQa48HHzY7_GJzRBvaY82bdmMoDb-6b/edit?usp=sharing&ouid=106293461552502354272&rtpof=true&sd=true"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
