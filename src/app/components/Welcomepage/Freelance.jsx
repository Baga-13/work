import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <div className="mx-[2rem] md:mx-[4rem] lg:mx-[6rem] xl:mx-[9rem] lg:mt-[4.3rem] mb-[10rem] xl:mb-[3rem]">
      <div className="flex">
        <div>
          <img
            className="hidden lg:block md:w-[22rem] lg:w-[24rem] ml-[5rem] mr-[5rem] lg:ml-[1rem]"
            src="./intro/teamwork.png"
            alt="teamwork"
          />
        </div>
        <div className="w-[33rem] relative top-[2rem]">
          <p className="font-bcd font-normal  text-[1.8rem]">
            Assemble a fantastic team of imaginative people with skill and
            vision.
          </p>
          <p className="font-light font-abc pt-2">
            Create a team ready to tackle your most important initiatives.
          </p>
          <div className="space-x-6">
            {/* <Link> */}
            <Link href="/talent">
              <button className="greenbutton">
                Hire a Talent
              </button>
              </Link>
            {/* </Link> */}
            <Link href="/post">
              <button className="hover:shadow-2xl py-3 px-5 md:px-8 shadow-lg bg-white hover:bg-slate-100 text-[#2f3061] font-ab rounded-md mt-9">
                Post a Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
