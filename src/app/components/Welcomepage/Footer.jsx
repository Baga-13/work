import React from "react";

const style = {
  logo: "pb-[2rem] font-cde text-[#2f3061] font-normal text-[27px] cursor-pointer",
  heading: "font-semibold font-abc text-[#2f3061] pb-1 text-sm",
  text: "font-bcd text-gray-600 text-sm py-[0.36rem] hover:text-yellow-500 hover:underline cursor-pointer",
  texticon: "py-[0.36rem]",
  para: "font-bcd text-yellow-500 text-[16px] w-[23rem]",
  social: "w-[1.8rem] opacity-100 hover:bg-gray-300 rounded-md cursor-pointer",
  list: "flex space-x-1 justify-between",

  // 556b2f
};

const Footer = () => {
  return (
    <div className="xl:mt-10">
      <div className="flex items-center px-5 md:px-5 py-[4rem] xl:mx-12 lg:py-10 lg:px-[3.4rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:flex-1">
          <div>
            <p className={style.logo}>JobFrisk</p>
          </div>
          <div className="space-y-7 lg:space-y-0 lg:flex lg:justify-between lg:items-start lg:space-x-20">
            <ul>
              <li className={style.heading}>Oppurtunities</li>
              <li className={style.text}>Software Engineer</li>
              <li className={style.text}>Design & UI/UX</li>
              <li className={style.text}>Product Manager</li>
              <li className={style.text}>Product Designer</li>
              <li className={style.text}>Internships</li>
            </ul>
            <ul>
              <li className={style.heading}>Services</li>
              <li className={style.text}>Job Vacancies</li>
              <li className={style.text}>Post Jobs</li>
              <li className={style.text}>CV & Cover Letter Writing</li>
            </ul>
            <ul>
              <li className={style.heading}>Company</li>
              <li className={style.text}>Careers</li>
              <li className={style.text}>Privacy & Cookie policy</li>
            </ul>
            <div>
              <p className={style.heading}>Social</p>
              <div className={style.list}>
                <div className={style.texticon}>
                  <img
                    id={style.twit}
                    className={style.social}
                    src="./social/twitter.png"
                    alt=""
                  />
                </div>

                <div className={style.texticon}>
                  <img
                    className={style.social}
                    src="./social/facebook.png"
                    alt=""
                  />
                </div>
                <div className={style.texticon}>
                  <img
                    className={style.social}
                    src="./social/linkedin.png"
                    alt=""
                  />
                </div>
                <div className={style.texticon}>
                  <img
                    className={style.social}
                    src="./social/instagram.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
