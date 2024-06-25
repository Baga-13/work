import React from "react";

const style = {
  label: "font-bcd text-[15px] text-[#2f3061]",
  block: "space-y-1",
  select: "font-bcd text-gray-500",
  options: "text-[12px] text-[#2f3061] font-ab",
  heading: "font-ab font-normal text-lg p,t-4 text-slate-600",
};

export const TalentForm = () => {
  return (
    <div>
      <div className="w-[80vw] mx-auto">
        <div className="space-y-10">
          <div className="mt-7">
            <form action="/api/createUser" method="POST" className="space-y-5">
              <h2 className={style.heading}>Personal Information</h2>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Firstname
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="name"
                  id=""
                  placeholder="e.g John Doe"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Lastname
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="name"
                  id=""
                  placeholder="e.g John Doe"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Email
                </label>
                <br />
                <input
                  className="input"
                  type="email"
                  name="email"
                  id=""
                  placeholder="e.g johndoe@gmail.com"
                  required
                />
              </div>

              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Job Title
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="job title"
                  id=""
                  placeholder="e.g Product Designer"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Describe yourself
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="describe"
                  id=""
                  placeholder="Tips - Describe your best self in your position"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Experience Level
                </label>
                <br />
              </div>

              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Upload Resume
                </label>
                <br />
                <input
                  className="input"
                  type="file"
                  name="resume"
                  id=""
                  placeholder=""
                  required
                />
              </div>

              <h2 className={style.heading}>Links</h2>

              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Github
                </label>
                <br />
                <input
                  className="input"
                  type="url"
                  name="github"
                  id=""
                  placeholder="e.g github.com/johndoe"
                  required
                />
              </div>

              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  LinkedIn
                </label>
                <br />
                <input
                  className="input"
                  type="url"
                  name="linkedin"
                  id=""
                  placeholder="e.g linkedin.com/johndoe"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Website
                </label>
                <br />
                <input
                  className="input"
                  type="url"
                  name="website"
                  id=""
                  placeholder="e.g https://www.jobfrisk.com"
                  required
                />
              </div>
              {/* <input
                type="submit"
                value="Done"
                className="font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-slate-50 hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider"
              /> */}
              {/* <Link href="/profile"> */}
                <button type="submit" className="greenbutton">
                  Done
                </button>
              {/* </Link> */}
            </form>
          </div>

          {/* it remains skills */}
        </div>
      </div>
    </div>
  );
}
