import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const style = {
  buttona:
    "md:hidden font-ab text-[12.4px] font-regular bg-[#8FD400] text-white hover:text-[#2f3061] hover:bg-slate-100 transition px-[4px] py-1 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider",
  button:
    "hidden lg:block font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-slate-100 hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider",
  letter:
    "hidden lg:block font-abc text-[#2f3061] text-[14px] font-regular hover:bg-white px-3 py-2 rounded-sm cursor-pointer hover:shadow-lg hover:bg-slate-100",
  lettera:
    "block font-abc text-[#2f3061] text-[13px] md:text-[14px] font-regular hover:bg-slate-100 hover:bg-white px-3 py-1 transition-all rounded-sm cursor-pointer hover:shadow-lg",
  logo: "font-cde text-[#2f3061] font-normal text-[28px] cursor-pointer",
  list: "absolute w-[14rem] top-[70px] right-[20px] bg-white rounded-md px-[9px] pt-[12px] pb-[8px] shadow-lg font-ab text-[14px] font-light",
  options:
    "flex items-center my-[2px] px-2 py-2 space-x-3 hover:bg-gray-100 cursor-pointer rounded-sm transition",
  img: "w-5 h-5",
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e: any) => {
    setToggle(!toggle);
  };

  return (
    <div className="border-b">
      <div className="flex px-5 justify-between md:mx-[2rem] xl:mx-9 lg:px-[4rem] py-2 items-center">
        <div className="flex justify-between space-x-9 items-center">
          <Link href="/">
            <p className={style.logo}>JobFrisk</p>
          </Link>
          <div className="flex">
            <p className={style.letter}>Career Advice</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex justify-between space-x-1 lg:space-x-3 items-center">
            <Link href="/freelancer">
              <p className={style.letter}>Freelance projects</p>
            </Link>
            <Link href="/talent">
              <p className={style.button}>Hire a Talent</p>
            </Link>
          </div>

          <div className="lg:hidden space-x-3 flex items-center">
            <div className="flex space-x-1 items-center">
              <Link href="/login">
                <p className={style.lettera}>Login</p>
              </Link>
              <Link href="/talent">
                <p className={style.buttona}>Hire a Talent</p>
              </Link>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 cursor-pointer"
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
                    <Link href="/profile" className="sd-link">
                      Freelance Projects
                    </Link>
                    <Link href="" className="sd-link">
                      Career Advice
                    </Link>
                    <Link href="" className="sd-link">
                      Company reviews
                    </Link>
                    <Link href="" className="sd-link">
                      Help center
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
