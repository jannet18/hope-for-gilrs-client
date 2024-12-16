import React, { useState } from "react";
import { BsCart3, BsFillBalloonHeartFill, BsTwitterX } from "react-icons/bs";
import { FaBars, FaHeart, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
// import Hero from "./Hero";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navLinks = [
    { label: "About", href: "#" },
    { label: "Testimonial", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Donations", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Outreach", href: "#" },
  ];
  return (
    <>
      <header className="shadow-md md:shadow-none bg-white font-sans tracking-wide relative z-50">
        <section className="relative flex items-center justify-around py-4">
          {/* <section className="flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]"> */}
          <div className="hidden md:flex justify-center items-center gap-3">
            <div className="border p-3 rounded-full bg-[#FBD459]">
              <BsFillBalloonHeartFill className="w-6 h-6 text-[#283734]" />
            </div>
            <span className="hover:text-[#01715d] text-2xl font-bold">
              Volunteer
            </span>
          </div>
          <div className="hidden space-x-4 md:absolute md:right-10 md:flex items-center max-md:ml-auto">
            {/* <div className="hidden md:grid grid-cols-3 items-center"> */}
            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk className="w-8 h-8 text-[#01715d]" />
              <span>+25472270000</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineMailOpen className="w-8 h-8 text-[#01715d]" />
              <span>Email@hopeforgirls.com</span>
            </div>
            <div className="flex items-center gap-3">
              <SlLocationPin className="w-8 h-8 font-bold text-[#01715d]" />
              <span>Nairobi, Kenya.</span>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap py-0 px-10 overflow-x-auto">
          <div className="w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <section className="flex items-center justify-between">
              <a href="#">
                {/* <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="md:w-[170px] w-36"
              /> */}
                <span className="text-3xl">Hope For Life Girls</span>
              </a>
              <div className="flex">
                <ul className="flex items-center gap-4 bg-[#01715D] h-16 px-3 text-gray-50 rounded-tl-lg overflow-hidden">
                  {/* <ul className="lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"> */}
                  <li className="mb-6 hidden max-lg:block">
                    <a href="#">
                      <img
                        src="https://readymadeui.com/readymadeui.svg"
                        alt="logo"
                        className="w-36"
                      />
                    </a>
                  </li>
                  {navLinks.map((link, index) => (
                    <li key={index} className="max-lg:border-b max-lg:py-3">
                      <a
                        href={link.href}
                        className="hover:text-white text-[#6AADA0] font-bold text-[15px] block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <GoSearch className="w-6 h-6 cursor-pointer hover:text-[#FBD459]" />
                  </li>
                  <li>
                    <BsCart3 className="w-6 h-6 cursor-pointer hover:text-[#FBD459]" />
                  </li>
                </ul>
                <button className="bg-[#FBD459] flex items-center gap-2 px-3 text-[#283734] hover:bg-[#283734] hover:text-white">
                  <FaHeart />
                  Donate Now
                </button>
              </div>
            </section>
          </div>
          <div className="flex ml-auto lg:hidden">
            {/* <button id="toggleOpen">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
            <button
              onClick={handleToggleMenu}
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline text-[#01715d]"
            >
              {openMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {openMenu && (
            <>
              <ul className="absolute top-0 left-0 w-[300p] h-screen bg-[#283734] text-white shadow-md p-4 space-y-4 z-50">
                <a href="#">
                  {/* <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="md:w-[170px] w-36"
              /> */}
                  <span className="text-3xl text-left ">
                    Hope For Life Girls
                  </span>
                </a>
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="border-b border-gray-500 py-1"
                  >
                    <a
                      href={link.href}
                      className="block text-white font-medium hover:text-emerald-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <GoSearch className="w-6 h-6 cursor-pointer hover:text-[#FBD459]" />
                </li>
                <li>
                  <BsCart3 className="w-6 h-6 cursor-pointer hover:text-[#FBD459]" />
                </li>
                <div>
                  <p className="flex items-center gap-3 py-2 hover:text-[#01715d]">
                    <span className="bg-[#01715d] p-3 rounded-full">
                      <HiOutlineMailOpen className="w-4 h-4 text-white" />
                    </span>
                    email@example.com
                  </p>
                  <p className="flex items-center gap-3 hover:text-[#01715d]">
                    <span className="bg-[#01715d] p-3 rounded-full">
                      <MdOutlinePhoneInTalk className="w-4 h-4 text-white" />
                    </span>
                    email@example.com
                  </p>
                  <div className="flex items-center gap-3 justify-between py-3 text-white">
                    <RiFacebookFill className="w-4 h-4 hover:text-[#01715d]" />
                    <BsTwitterX className="w-4 h-4 hover:text-[#01715d]" />
                    <FaLinkedinIn className="w-4 h-4 hover:text-[#01715d]" />
                    <FaSquareInstagram className="w-4 h-4 hover:text-[#01715d]" />
                  </div>
                </div>
              </ul>
            </>
          )}
        </div>
      </header>
      {/* <Hero /> */}
    </>
  );
}

export default Header;

// FBD459 YELLOW
// 283734 HEART
// 6AADAO
