//
import React, { useState } from "react";
// import {
//   BookmarkIcon,
//   EllipsisVerticalIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

const style = {
  details: "bg-gray-200 rounded px-[8px] py-[3px] text-slate-700 text-[13px]",
  list: "absolute bg-white rounded px-[6px] space-y-1 pt-[8px] pb-[8px] shadow-lg font-bcd text-slate-600 text-[14px] border font-light",
  options:
    "flex items-center my-[2px] px-2 py-2 space-x-3 hover:bg-gray-100 cursor-pointer rounded-sm transition",
  img: "w-5 h-5",
};

export const JobCard = ({ name }) => {
  return (
    <div>
      <div className="border rounded p-2 lg:p-3 flex justify-between space-x-4">
        {/* <div className="flex"> */}
        <img
          src="./chat.png"
          alt="logo"
          className="w-[65px] h-[65px] lg:w-[100px] lg:h-auto rounded bg-white "
        />

        <div className="space-y-1 flex-1">
          <h3 className="font-ab cursor-pointer">{name}</h3>
          <p className="font-bcd font-light text-slate-800 cursor-pointer text-[15px] hover:underline">
            Excop Tech
          </p>
          <ul className="flex space-x-3">
            <li className={style.details}>Lagos</li>
            <li className={style.details}>Fulltime</li>
            <li className={style.details}>N150k - N300k</li>
          </ul>
        </div>
        {/* </div> */}

        <div className="flex flex-col justify-between items-end">
          <div>
            {/* <EllipsisVerticalIcon
              className="w-7 h-7 text-slate-500 cursor-pointer rounded hover:bg-slate-100 p-1"
            
            /> */}
          </div>
          <p className="font-def text-[11px] text-gray-500">2 days ago</p>
        </div>
      </div>
    </div>
  );
};
