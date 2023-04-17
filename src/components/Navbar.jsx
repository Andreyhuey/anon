import React, { useState } from "react";
import { Link } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-[80px] z-10 bg-zinc-200 drop-shadow-lg fixed">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">ANON</h1>
          <ul className="hidden sm md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-125} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>

            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platform
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="absoulte right-0 top-0 mr-4 mt-4 md:mr-4 md:mt-4"></div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3 rounded-3xl">Sign Up</button>
        </div>
        <div className="md:hidden mr-2 rounded-md" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-6" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-125}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>

        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 rounded-xl">
            Sign In
          </button>
          <button className="px-8 py-3 rounded-lg">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
