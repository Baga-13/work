// "use client"
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const style = {
  label: "font-bcd text-[15px] text-[#2f3061]",
  block: "space-y-1",
  select: "font-bcd text-gray-500",
  options: "text-[12px] text-[#2f3061] font-ab",
};

export const CompanyForm = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <div className="w-[80vw] mx-auto">
        <div className="space-y-10">
          <div>
            {/* ============  Form =========== */}
            <h2 className="font-ab font-medium text-xl py-4 text-slate-600">
              Company Information
            </h2>
            <form action="" className="space-y-5">
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Name
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="company name"
                  id=""
                  placeholder="e.g JobFrisk"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Description
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="company description"
                  id=""
                  placeholder=""
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Number of Employees
                </label>
                <br />
                <div className="scale-75 relative right-[8.9rem]">
                  <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                    <InputLabel id="demo-select-small"></InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      // label=""

                      className={style.select}
                    >
                      <MenuItem value="">
                        <em className={style.options}></em>
                      </MenuItem>
                      <MenuItem className={style.options} value={10}>
                        1 - 20
                      </MenuItem>
                      <MenuItem className={style.options} value={20}>
                        20 - 50
                      </MenuItem>
                      <MenuItem className={style.options} value={30}>
                        50 - 120
                      </MenuItem>
                      <MenuItem className={style.options} value={30}>
                        120 and over
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Employer fullname
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="employer"
                  id=""
                  placeholder="e.g John Doe"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Phone number
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name="contact"
                  id=""
                  placeholder="e.g +2348088877777"
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
                  name="company email"
                  id=""
                  placeholder="e.g jobfrisk@careers.com"
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
                  type="text"
                  name="website"
                  id=""
                  placeholder="e.g https://www.jobfrisk.com"
                  required
                />
              </div>
              <div className={style.block}>
                <label className={style.label} htmlFor="">
                  Location
                </label>
                <br />
                <input
                  className="input"
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g Surulere, Lagos"
                  required
                />
              </div>
            </form>
          </div>

          <div>
            <button
              type="submit"
              className="greenbutton font-bcd animate-bounce"
            >
              Post a job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
