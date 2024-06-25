import React from "react";
import Link from "next/link";

const style = {
  box: "flex items-start hover:text-white hover:scale-105 transition xl:px-3 flex-col font-abc bg-white shadow-lg hover:bg-[#8FD400] px-5 py-6 mx-2 mt-3 mb-10  rounded-sm hover:shadow-md cursor-pointer",
  letter: "pt-4 font-ab font-medium text-lg ",
  para: "pt-4 text-[14px]",
  img: "w-[1.8rem]",
  imgbox: "flex w-[95%] pt-3 flex-1 justify-between items-center",
  icon: "relative right-[3.1rem]",
  button: "bg-blue-100 px-8 py-2 rounded-[1.6rem] hover:shadow-lg",
};

const Intro = ({ handleFalse }) => {
  return (
    <div className="" onClick={handleFalse}>
      <div className="mx-[2.6rem] md:mx-[3.3rem] lg:mx-[6.3rem] xl:mx-[9rem] mt-[7rem] lg:mt-[10rem]">
        {/* hired */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-[1rem] lg:mt-[2rem]">
          <div className="lg:w-[33rem] pt-[3rem] relative bottom-[2rem]">
            <p className="py-9 lg:py-0 text-center lg:text-left font-semibold leading-tight font-ab text-[2rem] lg:text-[3.6rem]">
              Hire Nigeria's top Talents!{" "}
            </p>
            <p className="text-center lg:text-left pb-8 xl:pb-0 font-abc pt-5">
              <span className="text-[#8FD400] text-[24px] font-bcd font-semibold">
                Jobfrisk
              </span>{" "}
              aims to provide innovation and quality at your fingertips through
              the cutting-edge products and services of talents across nigeria.
            </p>
            <div className="flex space-x-3 md:space-x-5 justify-center lg:justify-start">
              <Link href="/search">
                <button className="greenbutton">
                  Hire a Talent
                </button>
              </Link>
              <Link href="/login">
                <button className="hover:shadow-2xl py-3 px-5 md:px-8 shadow-lg bg-white hover:bg-slate-100 text-[#2f3061] font-ab rounded-md mt-9">
                  Post a Job
                </button>
              </Link>
            </div>
          </div>
          <img
            className="hidden lg:block xl:w-[25rem] lg:w-[23rem] mr-[2rem]"
            src="./intro/hired.png"
            alt=""
          />
        </div>

        <div className="">
          {/*=============== oppurtunities =============*/}
          <div className="py-20">
            <div className="text-center">
              <p className=" font-normal font-bcd text-[1.8rem]">
                Find your next creative professional today!{" "}
              </p>
              <p className="font-abc font-light text-[15px] pt-2">
                Innovation and Quality at Your Fingertips
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg: lg: mt-[2.7rem]">
              <Link href="/search">
                <div className={style.box}>
                  <div className="flex">
                    <img className="" src="./intro/code.png" alt="" />
                    <img
                      className={style.icon}
                      src="./intro/code2.png"
                      alt=""
                    />
                  </div>
                  <h3 className={style.letter}>Developers</h3>
                  <link rel="stylesheet" href="" />
                  <p className={style.para}>
                    Seasoned software engineers, coders, and architects with
                    expertise across hundreds of technologies.
                  </p>
                  <div className={style.imgbox}>
                    <p></p>
                    <img
                      className={style.img}
                      src="./intro/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
              <Link href="/search">
                <div className={style.box}>
                  <div className="flex">
                    <img
                      className="bg-white rounded-md"
                      src="./intro/designer.png"
                      alt=""
                    />
                  </div>
                  <h3 className={style.letter}>Designers</h3>
                  <p className={style.para}>
                    Find creative, imaginative and ardent designers with the
                    competence to generate original and innovative ideas.
                  </p>
                  <div className={style.imgbox}>
                    <p></p>
                    <img
                      className={style.img}
                      src="./intro/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
              <Link href="/search">
                <div className={style.box}>
                  <div className="flex">
                    <img
                      className="w-[50px] bg-white rounded-md"
                      src="./intro/network.png"
                      alt=""
                    />
                  </div>
                  <h3 className={style.letter}>Project Managers</h3>
                  <p className={style.para}>
                    Digital and technical project managers, scrum masters, and
                    experts in a variety of PM tools, frameworks, and styles.
                  </p>
                  <div className={style.imgbox}>
                    <p></p>
                    <img
                      className={style.img}
                      src="./intro/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
              <Link href="/search">
                <div className={style.box}>
                  <div className="flex">
                    <img
                      className="w-[50px] bg-white rounded-md"
                      src="./intro/tree.png"
                      alt=""
                    />
                  </div>
                  <h3 className={style.letter}>Product Managers</h3>
                  <p className={style.para}>
                    Digital product managers with experience in a variety of
                    sectors, including health, e-commerce, and finance.
                  </p>
                  <div className={style.imgbox}>
                    <p></p>
                    <img
                      className={style.img}
                      src="./intro/right-arrow.png"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
