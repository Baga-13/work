"use client"
import { useState } from "react";
import Link from "next/link";

const style = {
  button:
    "hidden lg:block font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-white hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider",
  buttona:
    "lg:hidden sm:py-[7px] font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-white hover:text-[#2f3061] transition px-3 py-1 rounded-[3px] cursor-pointer hover:shadow-md",
  letter:
    "hidden lg:block font-abc hover:bg-slate-100 transition-all text-[13px] font-regular hover:bg-white px-3 py-2 rounded-sm cursor-pointer hover:shadow-lg",
  logo: "font-cde mr-20 text-[#2f3061] font-normal text-[28px] cursor-pointer",
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggle = (e: any) => {
    setToggle(!toggle);
  };

  const handleSearchToggle = (e: any) => {
    setToggleSearch(!toggleSearch);
  };

  const handleFalse = () => {
    setToggleSearch(false);
  };

  return (
    <div className="border-b">
      <div className="flex px-5 justify-between md:mx-[2rem] xl:mx-9 lg:px-[4rem] py-2 items-center">
        <div className="flex justify-between items-center">
          <p className={style.logo}>JobFrisk</p>
          <div className="flex">
            <p className={style.letter}>Startup</p>
            <p className={style.letter}>Internships</p>
            <Link href="/findjob">
              <p className={style.letter}>Find Jobs</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex justify-between space-x-3 items-center">
            <p className="flex space-x-2 border py-[5px] hover:border-[#8FD400] focus:outline-blue-300 px-3 rounded-md items-center">
              <input
                type="text"
                placeholder="Search professionals and jobs"
                className="text-gray-500 text-[15px] w-[14rem] font-bcd outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </p>
            <Link href="/talent">
              <p className={style.button}>Hire a Talent</p>
            </Link>
            <Link href="/login">
              <p className={style.letter}>Login</p>
            </Link>
          </div>

          <div className="flex space-x-1 sm:space-x-2 md:space-x-4 items-center lg:hidden">
            <div className="flex items-center space-x-1 md:hidden">
              {toggleSearch && (
                <p className="flex border py-[5px] hover:border-[#8FD400] focus:outline-blue-300 px-1 rounded-md items-center transition">
                  <input
                    type="text"
                    placeholder="Search talents"
                    className="text-gray-500 text-[13.5px] w-[5.7rem] font-bcd outline-none"
                  />
                </p>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 cursor-pointer z-50 transition"
                onClick={handleSearchToggle}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <Link href="/login">
              <p className={style.buttona}>Login</p>
            </Link>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 cursor-pointer transition-all"
                onClick={handleToggle}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {toggle && (
                <div className="transition">
                  <ul className="sidebar">
                    <Link href="/profile" className="sd-link">Startups</Link>
                    <Link href="" className="sd-link">About us</Link>
                    <Link href="" className="sd-link">Interships</Link>
                    <Link href="" className="sd-link">Contact us</Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div> */}
      </div>
    </div>
  );
};

export default Header;
