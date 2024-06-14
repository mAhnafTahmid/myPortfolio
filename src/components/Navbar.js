import React from 'react'
import Logo from '../assets/logo1.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{ width: '50px' }} />
        </div>

        {/* menu */}
        <ul className='md:flex hidden'>
            <li>
                <Link 
                to="home" 
                smooth={true} 
                duration={700} 
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                to="about" 
                smooth={true} 
                duration={700} 
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                to="skills" 
                smooth={true} 
                duration={700} 
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link 
                to="work" 
                smooth={true} 
                duration={700} 
                >
                    Work
                </Link>
            </li>
            <li>
                <Link 
                to="contact" 
                smooth={true} 
                duration={700} 
                >
                    Contact
                </Link>
            </li>
        </ul>
        

        {/* hamburger */}
        <div className="md:hidden z-10"
        onClick={handleClick}>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} 
                to="home" 
                smooth={true} 
                duration={700} 
                >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} 
                    to="about" 
                    smooth={true} 
                    duration={700} 
                    >
                        About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} 
                    to="skills" 
                    smooth={true} 
                    duration={700} 
                    >
                        Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} 
                    to="work" 
                    smooth={true} 
                    duration={700} 
                    >
                        Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} 
                    to="contact" 
                    smooth={true} 
                    duration={700} 
                    >
                        Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar