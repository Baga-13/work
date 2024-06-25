import React from "react";

const style = {
  options: "text-[14px] text-gray-500 flex space-x-12",
  option:
    "text-[14px] text-gray-500 rounded-sm flex space-x-5 hover:bg-white border-b cursor-pointer my-3 pb-1",
  img: "w-[4rem]",
  name: "font-ab font-medium",
  job: "text-gray-500 font-bcd text-[13px]",
  location: "flex space-x-1 items-center",
  locatitle: "text-gray-400 font-light text-[13px]",
  icon: "w-4 h-4 text-gray-300",
  social: "cursor-pointer hover:bg-slate-200 rounded-full p-[3px] shadow-sm",
};

export const Profile = () => {
  return (
    <div>
      <div className="flex flex-col justify-between mx-[6rem] py-[2.5rem]">
        <div className="rounded-sm bg-white shadow-sm">
          <div className="flex justify-between">
            <div className="flex py-4">
              <div className="py-9 px-8">
                <img
                  src="./woman.jpg"
                  className="w-[9rem] shadow-xl rounded-full border-2 border-blue-400"
                  alt=""
                />
              </div>

              <div className="flex">
                <div className="pt-10 space-y-[1px] border-r pr-[15rem]">
                  <h2 className="text-[1.4rem] font-ab">Wisdom</h2>
                  <p className="font-ab font-light text-[14px]">developer</p>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="font-ab text-[14px] font-light">Lagos</p>
                  </div>
                  <div className="space-x-3">
                    <button className="relative font-bcd rounded top-7 py-2 px-5 text-[14px] hover:shadow-md text-[#8FD400] hover:text-gray-500 border-[#8FD400] hover:bg-slate-100 transition-all border">
                      Resume
                    </button>
                    <button className="relative font-bcd top-7 py-2 px-5 text-[14px] text-white hover:shadow-md hover:text-[#8FD400] border-[#8FD400] bg-[#8FD400] hover:bg-slate-50 transition-all rounded border">
                      Portfolio
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="text-gray-400 font-bcd text-[14px] pt-12 pl-8 font-light space-y-3">
                    <li className="flex space-x-12">
                      <p>Availability:</p>
                      <p>3 years</p>
                    </li>
                    <li className="flex space-x-16">
                      <p>Location:</p>
                      <p>Lagos, Nigeria</p>
                    </li>
                    <li className="flex space-x-12">
                      <p>Experience:</p>
                      <p>intermediate</p>
                    </li>
                    <li className="flex pt-3">
                      <div className="flex space-x-3">
                        <img
                          className={style.social}
                          src="https://img.icons8.com/sf-black-filled/24/8FD400/github.png"
                        />
                        <img
                          className={style.social}
                          src="https://img.icons8.com/ios-glyphs/24/8FD400/twitter--v1.png"
                        />
                        <img
                          className={style.social}
                          src="https://img.icons8.com/windows/24/8FD400/linkedin-2.png"
                        />
                        <img
                          className={style.social}
                          src="https://img.icons8.com/material-outlined/24/8FD400/globe--v2.png"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600 mr-3 mt-3 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* = ========= new section ============== */}

        <div className="flex my-7 space-x-6">
          {/* ================ left section =================== */}
          <div className="w-[80vw]">
            {/*====================== about section ==================== */}
            <div className="mb-7 bg-white shadow-sm">
              <div className="flex">
                <div className="py-[2.5rem] px-8 space-y-2">
                  <h2 className="font-ab text-[15px] font-medium text-gray-600">
                    ABOUT ME
                  </h2>
                  {/* at most 450 */}
                  <p className="font-bcd text-gray-500 text-[14px] leading-6">
                   A well experienced developer
                  </p>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-600 mr-3 mt-3 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/*====================== skill section ==================== */}
            <div className="my-7 bg-white shadow-sm">
              <div className="flex justify-between">
                <div className="py-[2.5rem] px-8">
                  <h2 className="font-ab text-[14px] text-gray-600 font-medium pb-2">
                    SKILLS
                  </h2>
                  <ul className="space-y-2">
                    {}
                    <li className={style.options}>Branding</li>
                    <li className={style.options}>UI/UX</li>
                    <li className={style.options}>Web - Design</li>
                    <li className={style.options}>Packaging</li>
                    <li className={style.options}>Print & Editorial</li>
                  </ul>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-600 mr-3 mt-3 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/*====================== contact section ==================== */}
            <div className="my-7 bg-white shadow-sm">
              <div className="flex justify-between">
                <div className="py-[2.5rem] px-8">
                  <h2 className="font-ab text-gray-600 font-medium pb-2">
                    Contact
                  </h2>
                  <ul className="space-y-4">
                    <li className={style.options}>
                      <p>Phone:</p>
                      <p className="pl-2 text-[#8FD400] hover:underline cursor-pointer">
                        +2348138476254
                      </p>{" "}
                    </li>
                    <li className={style.options}>
                      <p>Email:</p>
                      <p className="pl-4 text-[#8FD400] hover:underline cursor-pointer">
                        hello@ebiereademola.com
                      </p>
                    </li>
                    <li className={style.options}>
                      <p>Address:</p>
                      <p>18 Akintade Street, JadesolaVille, Lagos</p>
                    </li>
                    <li className={style.options}>
                      <p>Website: </p>
                      <p className=" text-[#8FD400] hover:underline cursor-pointer">
                        www.ebiereademola.com
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-600 mr-3 mt-3 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== right section ======================== */}
          <div>
            <div className="space-y-12">
              <div className="bg-white shadow-sm flex justify-center flex-col items-center py-7">
                <p className="font-bcd text-center font-medium text-gray-700 text-[16px] leading-5 pb-4">
                  Get career advice and learn more about your field
                </p>
                <button className="font-bcd py-2 px-5 text-[14px] text-[#8FD400] hover:shadow-lg hover:text-white border-[#8FD400] hover:bg-[#8FD400] transition-all rounded-sm border">
                  Learn more
                </button>
              </div>

              {/* ======================= suggestion ================== */}
              <div>
                <div>
                  <h2 className="font-bcd text-gray-500 text-[14px]">
                    SIMILAR PROFILES
                  </h2>
                  <hr />
                  <ul>
                    <li className={style.option}>
                      <div>
                        <img
                          className={style.img}
                          src="./girl.jpg"
                          alt="girl"
                        />
                      </div>
                      <div>
                        <p className={style.name}>Shalewa Sulaimon</p>
                        <p className={style.job}>Product Designer</p>
                        <div className={style.location}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={style.icon}
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className={style.locatitle}>Kaduna</p>
                        </div>
                      </div>
                    </li>
                    <li className={style.option}>
                      <div>
                        <img
                          className={style.img}
                          src="./lady.jpg"
                          alt="girl"
                        />
                      </div>
                      <div>
                        <p className={style.name}>Kemisola Adeyemi</p>
                        <p className={style.job}>Product Designer</p>
                        <div className={style.location}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={style.icon}
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className={style.locatitle}>Kaduna</p>
                        </div>
                      </div>
                    </li>
                    <li className={style.option}>
                      <div>
                        <img
                          className={style.img}
                          src="./woman.jpg"
                          alt="girl"
                        />
                      </div>
                      <div>
                        <p className={style.name}>Preciuos Okeke</p>
                        <p className={style.job}>Product Designer</p>
                        <div className={style.location}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={style.icon}
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className={style.locatitle}>Kaduna</p>
                        </div>
                      </div>
                    </li>
                    <li className={style.option}>
                      <div>
                        <img className={style.img} src="./man.jpg" alt="girl" />
                      </div>
                      <div>
                        <p className={style.name}>Kevin Ola</p>
                        <p className={style.job}>Product Designer</p>
                        <div className={style.location}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={style.icon}
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className={style.locatitle}>Kaduna</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
