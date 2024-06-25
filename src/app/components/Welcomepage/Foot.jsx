import React from "react";

const style = {
  logo: "font-cde font-normal text-[#2f3061] text-[16px] text-gray-700",
  text: " text-gray-600 py-1 hover:text-gray-500 hover:underline font-bcd text-[12px] cursor-pointer",
};

const Foot = () => {
  return (
    <div className="border-t xl:mx-[6rem] xl:mt-10">
      <div>
        <div className="flex flex-1 items-center md:py-3 py-6 px-5 justify-between xl:px-0 lg:py-6 lg:px-[3rem]">
          <div className="pt-1 flex space-x-6 md:space-x-[3rem]">
            <p className="text-[11px] text-gray-600">Copyright © 2022</p>
            <p className="text-[11px] hover:underline cursor-pointer text-gray-600">Terms of service</p>
            <p className="text-[11px] hover:underline cursor-pointer text-gray-600">Support</p>
            <p className="text-[11px] hover:underline cursor-pointer text-gray-600">FAQs</p>
          </div>
          <p>
            <span className={style.logo}>JobFrisk</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
