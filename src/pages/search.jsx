"use client";
import Input from "../app/components/search/Input";
import { JobCard } from "../app/components/search/JobCard";

export const Search = () => {
  return (
    <div className="mt-[8rem]">
      <Input />
      <div className="flex flex-col">
        <div className="mt-[2.3rem]">
          <div className="w-[92vw] lg:w-[77.5vw] m-auto my-8">
            <p className="font-ab font-regular text-[16px] text-gray-700 cursor-pointer">
              Job Search Results
            </p>
            <p className="font-light text-[13px] font-bcd">
              1 to 50 of 192 for "Front End Web Developer"
            </p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5 mt-6 flex flex-col border-box w-[100%]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-7">
          <button className="text-gray-800 text-[10px] font-ab cursor-pointer hover:text-blue-500 hover:underline">
            prev
          </button>
          <p className="text-[10px]">2</p>
          <button className="text-gray-800 text-[10px] font-ab cursor-pointer hover:text-blue-500 hover:underline">
            next
          </button>
        </div>
      </div>
    </div>
  );
};
